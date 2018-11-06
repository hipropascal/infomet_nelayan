from rasterio.mask import mask
from netCDF4 import Dataset
import matplotlib.pyplot as plt
import json
import numpy as np
from src import mask


def plot2d(H):
    plt.imshow(H)
    plt.colorbar(orientation='vertical')
    plt.show()


if __name__ == '__main__':
    with open('Selat Sunda.json') as f:
        geo = json.load(f)
        shape = geo['features'][0]
    dset = Dataset('hires.nc', 'r', format="NETCDF4")
    precip_da = mask.add_shape_coord_from_data_array(precip_da, shp_dir, "awash")
    awash_da = precip_da.where(precip_da.awash == 0, other=np.nan)
    awash_da.mean(dim="time").plot()
