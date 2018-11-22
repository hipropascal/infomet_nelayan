from netCDF4 import Dataset, num2date
from PIL import Image, ImageDraw
import matplotlib.pyplot as plt
from src import misc
import numpy as np
import datetime
import geojson
import math
import json
import os


def flaten_wave(wave_arr):
    new_arr = np.copy(wave_arr)
    gradients = [0, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7]
    count = []
    for idx, gradient in enumerate(gradients):
        mask = (new_arr < gradients[idx+1])
        count.append(np.ma.count_masked(mask))
    return count


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
        meta.append({'id': idx + 1, 'name': name, 'category': category})
    with open(target_folder + '/' + os.path.split(path_geojson)[-1], 'w') as fp:
        json.dump(meta, fp, indent=4)
    fname = os.path.split(path_geojson)[-1].replace('json', 'png')
    im.save(target_folder + '/' + fname, 'PNG')


def masktoarr(path):
    im = Image.open(path)
    im2arr = np.array(im)
    arrseg = im2arr[:, :, 0]
    return arrseg


def find_nearest(array, value):
    array = np.asarray(array)
    armin = np.abs(array - value)
    idx = armin.argmin()
    return idx


def plot2d(H):
    plt.imshow(H)
    plt.colorbar(orientation='vertical')
    plt.show()


def generate():
    path = '../data/wilayah/geojson/'
    path_target = '../data/wilayah/mask/inawave/'
    l_wilayah = misc.list_file(path)
    for wilayah in l_wilayah:
        geojson2mask(path + wilayah, path_target)


def compile_data():
    compile = {}
    datas = ['wib', 'wit', 'wita']
    for data in datas:
        dset = Dataset('../data/netcdf/inawave/{}.nc'.format(data), 'r')
        times = num2date(dset['time'][:-1], units=dset['time'].units).tolist()
        time_str = [time.strftime('%m-%d-%Y-%H') for time in times]
        hs = dset['hs'][:-1].filled()
        hmax = dset['hmax'][:-1].filled()
        uwnd = dset['uwnd'][:-1].filled()
        vwnd = dset['vwnd'][:-1].filled()
        # data = flaten_wave(hs)
        spdwnd = np.sqrt(uwnd ** 2 + vwnd ** 2)
        dirwnd = np.arctan2(uwnd, vwnd) * 180 / math.pi
        compile[data] = {'times': time_str, 'hs': hs, 'hmax': hmax, 'uwnd': uwnd, 'vwnd': vwnd, 'spdwnd': spdwnd,
                         'dirwnd': dirwnd}
        dset.close()
    print 'done'
    return compile


def getval():
    path = '../data/wilayah/geojson/'
    path_target = '../data/wilayah/mask/inawave/'
    l_wilayah = misc.list_file(path)
    dset = compile_data()
    for wilayah in l_wilayah:
        name_wilayah = wilayah.replace('json', '')
        obj_wilayah = {name_wilayah: {'timeszone': 'wib', 'times': [], 'areas': []}}
        meta = path_target + wilayah
        mask = path_target + (wilayah.replace('json', 'png'))
        arr = masktoarr(mask)
        # plot2d(arr)
        with open(meta) as f:
            metaobj = json.load(f)
        times = dset['wib']['times']
        obj_wilayah[name_wilayah]['times'] = times
        for area in metaobj:
            obj_area = {'wvh_mean': [], 'wvh_min': [], 'wvh_max': [], 'spdwnd_mean': [], 'dirwnd_mean': []}
            # mask area
            masker = arr != int(area['id'])
            # array over time
            # extract wave
            if area['category'] == 'hs':
                hs_over_time = dset['wib']['hs']
                for hs in hs_over_time:
                    hs_masked = np.ma.array(hs, mask=masker)
                    hs_mean = float(np.nanmean(hs_masked))
                    hs_min = float(np.nanmin(hs_masked))
                    hs_max = float(np.nanmax(hs_masked))
                    obj_area['wvh_mean'].append(hs_mean)
                    obj_area['wvh_min'].append(hs_min)
                    obj_area['wvh_max'].append(hs_max)
            elif area['category'] == 'hmax':
                hmax_over_time = dset['wib']['hs']
                for hmax in hmax_over_time:
                    hmax_masked = np.ma.array(hmax, mask=masker)
                    hmax_mean = float(np.nanmean(hmax_masked))
                    hmax_min = float(np.nanmin(hmax_masked))
                    hmax_max = float(np.nanmax(hmax_masked))
                    obj_area['wvh_mean'].append(hmax_mean)
                    obj_area['wvh_min'].append(hmax_min)
                    obj_area['wvh_max'].append(hmax_max)
            # extract wind speed
            spdwnd_over_time = dset['wib']['spdwnd']
            for spdwnd in spdwnd_over_time:
                spdwnd_masked = np.ma.array(spdwnd, mask=masker)
                spdwnd_mean = float(np.nanmean(spdwnd_masked))
                obj_area['spdwnd_mean'].append(spdwnd_mean)
            # extract wind direction
            dirwnd_over_time = dset['wib']['dirwnd']
            for dirwnd in dirwnd_over_time:
                dirwnd_masked = np.ma.array(dirwnd, mask=masker)
                dirwnd_mean = float(np.nanmean(dirwnd_masked))
                obj_area['dirwnd_mean'].append(dirwnd_mean)
            obj_wilayah[name_wilayah]['areas'].append({'name': area['name'], 'values': obj_area})
        with open('../output/maritime/{}'.format(wilayah), 'w') as fp:
            json.dump(obj_wilayah, fp, indent=4)
    print 'done'


if __name__ == '__main__':
    getval()
    # generate()
