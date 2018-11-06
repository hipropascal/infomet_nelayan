from rasterio.mask import mask
from netCDF4 import Dataset
import matplotlib.pyplot as plt
import json


def plot2d(H):
    plt.imshow(H)
    plt.colorbar(orientation='vertical')
    plt.show()


if __name__ == '__main__':
    with open('Selat Sunda.json') as f:
        geo = json.load(f)
        shape = geo['features'][0]
    dset = Dataset('hires.nc', 'r', format="NETCDF4")
    masked_dataset = mask(dset['hs'][0],shape ,crop=True)
