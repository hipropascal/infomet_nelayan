import urllib2


def inawave():
    username = 'renderofs'
    password = 'render2303'
    baseurl = 'http://172.19.1.121'
    files = ['data/netcdf/inawave/wib.nc', 'data/netcdf/inawave/wita.nc', 'data/netcdf/inawave/wit.nc']
    urls = ['/render/netcdf/infomet/inawave_wib.nc', '/render/netcdf/infomet/inawave_wita.nc',
            '/render/netcdf/infomet/inawave_wit.nc']
    manager = urllib2.HTTPPasswordMgrWithDefaultRealm()
    manager.add_password(None, baseurl, username, password)
    auth = urllib2.HTTPBasicAuthHandler(manager)
    opener = urllib2.build_opener(auth)
    urllib2.install_opener(opener)
    for i, url in enumerate(urls):
        response = urllib2.urlopen(baseurl + url)
        with open(files[i], 'wb') as local:
            local.write(response.read())
