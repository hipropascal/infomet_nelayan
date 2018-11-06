import json
import math
import scipy.misc
import random
import numpy as np
from scipy import spatial
from scipy.cluster.vq import kmeans, vq
from netCDF4 import Dataset
from PIL import Image, ImageDraw
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon
from pylab import imread, imshow, figure, show, subplot


# def latlng_to_xy(poly_ltlng_arr):
#     poly_xy_arr = []
#     for point in poly_ltlng_arr:
#         distance, index = spatial.KDTree(point).query(pt)
#         poly_ltlng_arr.append(xy)
#     return poly_xy_arr
#
#
# def geo_idx(dd, dd_array):
#     idx = spatial.KDTree(A).query(poly_ltlng_arr)[1]
#     geo_idx = (np.abs(dd_array - dd)).argmin()
#     return geo_idx


def draw_poly(poly_arr, area_idx, idx):
    pdraw = ImageDraw.Draw(img)
    pdraw.polygon(poly_arr, fill=(255, area_idx, idx))


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
    poly = Polygon(poly, facecolor=cl)
    plt.gca().add_patch(poly)


def color_quantization(ncol):
    im = Image.open("map.png")
    im2 = im.quantize(ncol)
    im2.save("map2.png")
    im2.show()


def remove_semi_transparent():
    im = Image.open('map.png')
    im = im.convert('RGBA')
    data = np.array(im)
    red, green, blue, alpha = data.T
    semi = (alpha != 255)
    data[...][semi.T] = (0, 0, 0, 0)  # Transpose back needed
    im2 = Image.fromarray(data)
    im2.save("map3.png")


def flatten_semi_transparent(fname):
    im = Image.open(fname)
    im = im.convert('RGBA')
    data = np.array(im)
    red, green, blue, alpha = data.T
    semi = (alpha != 255)
    data[...][semi.T] = (255, 255, 255, 255)  # Transpose back needed
    im2 = Image.fromarray(data)
    im2.save("map3.png")


def init_map():
    my_dpi = 96
    fig = plt.figure(frameon=False)
    ax = plt.Axes(fig, [0., 0., 1., 1.])
    ax.set_axis_off()
    fig.add_axes(ax)
    plt.figure(figsize=(width / my_dpi, height / my_dpi), dpi=my_dpi)
    plt.axis("off")
    mapp = Basemap(projection='cyl', llcrnrlon=bound["east"], llcrnrlat=bound["south"], urcrnrlon=bound["west"],
                   urcrnrlat=bound["north"])
    mapp.fillcontinents(color=(0, 0, 0, 0))
    return my_dpi


def to_nc(fname, bound):
    im = Image.open(fname)
    im = im.convert('RGBA')
    data = np.array(im)
    arr_data = data[:,1]
    rootgrp = Dataset("WPP.nc", "a")


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
    height = lats.shape[0]
    width = lngs.shape[0]
    y_int = lats[1] - lats[0]
    x_int = lngs[1] - lngs[0]
    my_dpi = init_map()
    ncol = 0
    with open("geojson/map.geojson") as f:
        data = json.load(f)
    total = len(data["features"])
    for i, feature in enumerate(data["features"]):
        rgba = (i / total, i / total, i / total, 1)
        name = feature["properties"]["name"]
        desc = feature["properties"]["description"]
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
                        drawpoly(poly, (0, 0, 0, 0))
            if tp == "MultiPolygon":
                for idx, poly in enumerate(geos):
                    for idy, pol in enumerate(poly):
                        if idy == 0:
                            drawpoly(pol, rgba)
                        else:
                            drawpoly(pol, (0, 0, 0, 0))

        # GeometryCollection
        elif feature["geometry"].get("geometries"):
            geos = feature["geometry"]["geometries"]
            for geo in geos:
                for idx, poly in enumerate(geo["coordinates"]):
                    if idx == 0:
                        drawpoly(poly, rgba)
                    else:
                        drawpoly(poly, (0, 0, 0, 0))
        ncol = i + 2
        fname = 'mask/' + name + '.png'
        print(fname)
        plt.savefig(fname, transparent=True, dpi=my_dpi, bbox_inches='tight')
        flatten_semi_transparent(fname)
        to_nc(fname, bound)
        plt.clf()
        init_map()