import csv
import json
import math
import numpy as np
from netCDF4 import Dataset
from PIL import Image
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon


def dim(a):
    if not type(a) == list:
        return []
    return [len(a)] + dim(a[0])


def drawpoly(poly, cl):
    if dim(poly)[-1] > 2:
        polarr = []
        for pol in poly:
            lt = pol[0]
            ln = pol[1]
            polarr.append([lt, ln])
        poly = polarr
    poly = Polygon(poly, facecolor=cl, edgecolor=(0, 0, 0, 0))
    plt.gca().add_patch(poly)


def color_quantization(ncol):
    im = Image.open("map.png")
    im2 = im.quantize(ncol)
    im2.save("map2.png")


def remove_semi_transparent(fname):
    im = Image.open(fname)
    im = im.convert('RGBA')
    data = np.array(im)
    red, green, blue, alpha = data.T
    semi = (alpha != 255)
    data[...][semi.T] = (0, 0, 0, 0)
    # semi = (alpha != 255)
    # data[...][semi.T] = 255
    iner = (red != green)
    data[...][iner.T] = (0, 0, 0, 0)
    iner = (blue == 255)
    data[...][iner.T] = (0, 0, 0, 0)
    im2 = Image.fromarray(data)
    im2.save(fname)


def init_map(w, h):
    my_dpi = 96
    fig = plt.figure(figsize=(w * 10 / my_dpi, h * 10 / my_dpi), dpi=my_dpi, frameon=False, )
    ax = plt.Axes(fig, [0., 0., 1., 1.])
    ax.set_axis_off()
    fig.add_axes(ax)
    plt.axis("off")
    mapp = Basemap(projection='cyl', llcrnrlon=bound["east"], llcrnrlat=bound["south"], urcrnrlon=bound["west"],
                   urcrnrlat=bound["north"])
    mapp.fillcontinents(color=(0, 0, 0, 0))
    return fig


def resize_img(fname, w, h):
    img = Image.open(fname)
    img = img.resize((w, h), Image.ANTIALIAS)
    img.save(fname)


def to_nc(fname, bound):
    im = Image.open(fname)
    im = im.convert('RGBA')
    data = np.array(im)
    arr_data = data[:,:,1]
    plt.imshow(arr_data)
    plt.show()
    # rootgrp = Dataset("WPP.nc", "a")


if __name__ == '__main__':
    dset = Dataset('hires.nc', 'r', format="NETCDF4")
    lats = dset.variables["lat"][:]
    lngs = dset.variables["lon"][:]
    bound = {
        "north": np.max(lats),
        "south": np.min(lats),
        "east": np.min(lngs),
        "west": np.max(lngs)
    }
    h = lats.shape[0]
    w = lngs.shape[0]
    y_int = lats[1] - lats[0]
    x_int = lngs[1] - lngs[0]
    ncol = 0
    fig = init_map(w, h)
    with open("geojson/map.geojson") as f:
        data = json.load(f)
    total = len(data["features"])
    meta = []
    for i, feature in enumerate(data["features"]):
        col = (i+1) / 255.0
        rgba = (col, col, col, 1)
        name = feature["properties"]["name"]
        desc = feature["properties"]["description"]
        col_des = round(col*total,0)
        meta.append([i+1,name,desc])
        arr_geo = []

        # MultiPolygon & Polygon
        if feature["geometry"].get("coordinates"):
            geos = feature["geometry"]["coordinates"]
            tp = feature["geometry"]["type"]
            if tp == "Polygon":
                for idx, poly in enumerate(geos):
                    if idx == 0:
                        drawpoly(poly, rgba)
                    else:
                        drawpoly(poly, (0, 1, 1, 1))
            if tp == "MultiPolygon":
                for idx, poly in enumerate(geos):
                    for idy, pol in enumerate(poly):
                        if idy == 0:
                            drawpoly(pol, rgba)
                        else:
                            drawpoly(pol, (0, 1, 1, 1))

        # GeometryCollection
        elif feature["geometry"].get("geometries"):
            geos = feature["geometry"]["geometries"]
            for geo in geos:
                for idx, poly in enumerate(geo["coordinates"]):
                    if idx == 0:
                        drawpoly(poly, rgba)
                    else:
                        drawpoly(poly, (0, 1, 1, 1))
        ncol = i + 2
    with open('area.json', 'w') as outfile:
        json.dump({"data":meta}, outfile)
    fig.savefig('map.png', transparent=True, bbox_inches="tight", dpi=30, interpolation='none')
    remove_semi_transparent('map.png')
    # to_nc('map.png',bound)
    print('debug')