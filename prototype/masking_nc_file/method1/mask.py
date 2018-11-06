import json
import numpy as np
from scipy import interpolate
from netCDF4 import Dataset
import matplotlib.pyplot as plt


def sum():
    return True


def min():
    return True


def max():
    return True


def is_rough_exsist():
    return True


def is_very_rough_exsist():
    return True


def which_area_rough():
    return True


def which_area_very_rough():
    return True


if __name__ == '__main__':
    # load all file needed
    dset = Dataset('hires.nc', 'r', format='NETCDF4')
    hs = dset.variables['hmax'][0][:]
    plt.imshow(np.flipud(hs))
    plt.colorbar()
    plt.title('Height of Significant Wave (Original Size)')
    plt.show()
    mask = np.load('area.npy')
    with open('area.json', 'r') as f:
        areas = json.load(f)
    # interpolate to fit mask dataset
    w = hs.shape[1]
    h = hs.shape[0]
    x = np.arange(0, w, 1)
    y = np.arange(0, h, 1)
    f = interpolate.interp2d(x, y, hs, kind='cubic')
    x_new = np.arange(0, w, float(w) / mask.shape[1])
    y_new = np.arange(0, h, float(h) / mask.shape[0])
    xv_new, yv_new = np.meshgrid(x_new, y_new)
    m_area = np.flipud(f(x_new, y_new))
    mask_area = m_area[0:mask.shape[1]][0:mask.shape[0]]
    mask_out_area = mask == 0
    # mask_area = np.ma.array(mask_area, mask=mask_out_area.astype(np.int), fill_value=-9999)
    # mask_area[mask_area < 0.01] = 0
    blank = np.zeros((mask_area.shape[0], mask_area.shape[1]), dtype=float)
    for idx, area in enumerate(areas['data']):
        name = area[1]
        mask_hs = mask != area[0]
        masked = np.ma.array(mask_area, mask=mask_hs.astype(np.int))
        mean = masked.mean()
        print(mean)
        blank[masked != False] = mean
        if 0 < mean < 1.25:
            blank[masked != False] = 1
        if 1.25 < mean < 2.50:
            blank[masked != False] = 2
        if 2.50 < mean < 4.0:
            blank[masked != False] = 3
        print(area[2])
    plt.imshow(mask_area)
    plt.colorbar()
    plt.title('Height of Significant Wave (Interpolated)')
    plt.show()
    plt.imshow(mask)
    plt.colorbar()
    plt.title('Height of Significant Wave Based on Area Services')
    plt.show()
    plt.imshow(blank)
    plt.colorbar()
    plt.title('Height of Significant Wave Based on Area Services')
    plt.show()
    print("done")