import src.to_shp as to_shp

gJ = to_shp.GeoJ('/Users/maritim/Project/BMKG/infomet_nelayan/prototype/masking_nc_file/method2/Selat Sunda.json')
# Creating a shapefile from the geoJSON object
gJ.toShp('out/')