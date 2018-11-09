from netCDF4 import Dataset, date2num, num2date
import numpy as np


def get_slice_inawave():
    nc = Dataset('/Users/maritim/Project/BMKG/infomet_nelayan/data/raw/inawave.nc', 'r')
    time = nc['time'][:]
    lat = nc['lat'][:]
    lon = nc['lon'][:]
    hs = nc['hs'][:]
    hmax = nc['hmax'][:]
    dir = nc['dir'][:]
    uwnd = nc['uwnd'][:]
    vwnd = nc['vwnd'][:]
    # Prepare container
    new_nc = Dataset('/Users/maritim/Project/BMKG/infomet_nelayan/data/raw/1h.nc', 'w')
    new_time_dim = new_nc.createDimension("time", None)
    new_lat_dim = new_nc.createDimension("lat", lat.shape[0])
    new_lon_dim = new_nc.createDimension("lon", lon.shape[0])
    new_time_var = new_nc.createVariable("time", "f8", ("time",))
    new_lat_var = new_nc.createVariable("lat", "f4", ("lat",))
    new_lon_var = new_nc.createVariable("lon", "f4", ("lon",))
    new_time_var.units = nc['time'].units
    new_time_var[:] = np.arange(time[0], time[-1], ((time[1] - time[0]) / 3))  # change from 3h into 1h
    new_lat_var[:] = lat
    new_lon_var[:] = lon
    # Prepare data
    new_hs_dim = new_nc.createDimension("hs", None)
    new_hs_var = new_nc.createVariable("hs", "f4", ("time", "lat", "lon",))
    new_hs_var[:] = interp_1h(hs, new_time_var[:])
    new_hmax_var = new_nc.createVariable("hmax", "f4", ("time", "lat", "lon",))
    new_hmax_var[:] = interp_1h(hmax, new_time_var[:])
    new_dir_var = new_nc.createVariable("dir", "f4", ("time", "lat", "lon",))
    new_dir_var[:] = interp_1h(dir, new_time_var[:])
    new_uwnd_var = new_nc.createVariable("uwnd", "f4", ("time", "lat", "lon",))
    new_uwnd_var[:] = interp_1h(uwnd, new_time_var[:])
    new_vwnd_var = new_nc.createVariable("vwnd", "f4", ("time", "lat", "lon",))
    new_vwnd_var[:] = interp_1h(vwnd, new_time_var[:])


def interp_1h(data, time_after):
    new_data = []
    for i, t in enumerate(time_after):
        c = i % 3
        if c == 0:
            new_data.append(data[i / 3][:])
        elif c == 1:
            bottom = data[i // 3][:]*2
            top = data[i // 3 + 1][:]*1
            new_data.append((bottom+top)/3)
        elif c == 2:
            bottom = data[i // 3][:]*1
            top = data[i // 3 + 1][:]*2
            new_data.append((bottom + top) / 3)
    return new_data 


def get_wib(nc):
    # GMT +7
    return True


def get_wita(nc):
    # GMT +8
    return True


def get_wit(nc):
    # GMT +9
    return True


if __name__ == '__main__':
    get_slice_inawave()
