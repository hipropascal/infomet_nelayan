from src import misc,mask_tool

path = 'data/wilayah/'
path_target = 'data/wilayah_mask/inawave_mask/'
l_wilayah = misc.list_file(path)

for wilayah in l_wilayah:
    mask_tool.mask_generator_inawave(path+wilayah,path_target)