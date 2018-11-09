from PIL import Image, ImageDraw
import matplotlib.pyplot as plt
import numpy as np
import os
import json
from src import misc
import geojson


def geojson2mask(path_geojson, target_folder):
    lat_0 = 15.0
    lat_1 = -15.0
    lon_0 = 90
    lon_1 = 145
    interval = 0.0625
    w = 881
    h = 481
    im = Image.new('RGBA', (w, h))
    draw = ImageDraw.Draw(im)
    lats = np.arange(lat_0, lat_1, -interval)
    lons = np.arange(lon_0, lon_1, interval)
    with open(path_geojson) as geo:
        data = geojson.load(geo)
    meta = []
    for idx, feature in enumerate(data['features']):
        name = feature['properties']['name']
        category = feature['properties']['category']
        poly = []
        coor_poly = feature['geometry']['coordinates'][0]
        for coor in coor_poly:
            x = find_nearest(lons[:], coor[0])
            y = find_nearest(lats[:], coor[1])
            poly.append((x, y))
        draw.polygon(poly, (idx + 1, idx + 1, idx + 1, 255), (idx + 1, idx + 1, idx + 1, 255))
        meta.append({'id':idx+1,'name':name,'category':category})
    with open(target_folder + '/' +os.path.split(path_geojson)[-1],'w') as fp:
        json.dump(meta,fp, indent=4)
    fname = os.path.split(path_geojson)[-1].replace('json', 'png')
    im.save(target_folder + '/' + fname, 'PNG')


def find_nearest(array, value):
    array = np.asarray(array)
    armin = np.abs(array - value)
    idx = armin.argmin()
    return idx


def plot2d(H):
    plt.imshow(H)
    plt.colorbar(orientation='vertical')
    plt.show()


def render():
    path = '../data/wilayah_bak/'
    path_target = '../data/wilayah_mask/inawave_mask/'
    l_wilayah = misc.list_file(path)
    for wilayah in l_wilayah:
        geojson2mask(path + wilayah, path_target)

if __name__ == '__main__':
    render()