import netCDF4
import rasterio.features
#from shapely.geometry import Point
import numpy as np
import matplotlib.pyplot as plt
from affine import Affine
#matplotlib inline

URL_TEMPLATE = "http://thredds-water.ceh.ac.uk/thredds/dodsC/PETDetail/chess_pet_wwg_{year:04d}{month:02d}.nc"

year = 2010
month = 5
url = URL_TEMPLATE.format(year=year, month=month)
dataset = netCDF4.Dataset(url)  # open the dataset
dataset

plt.figure(figsize=(6,7))
plt.imshow(dataset['pet'][0,:,:], origin='lower')
plt.colorbar()
plt.xticks(np.arange(0, 800, 100))
plt.yticks(np.arange(0, 1100, 100))
plt.axis("equal")
plt.grid(True)
plt.show()