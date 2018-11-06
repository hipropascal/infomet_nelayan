# Sistem Infomet Nelayan BMKG

Struktur file dan folder :

  - client : Aplikasi yang di deploy di sisi client Raspberry PI
  - data : Data yang diolah/digunakan pada server
  - doc : berisi dokumentasi pengembangan Aplikasi
  - prototype : uji coba modul
  - src : library dan modul python
  - static : HTML, CSS, JS, Image
  - template : page html
  - req.txt : list library yang digunakan (pip install -r req.txt)

### Cara Install

```sh
$ git clone https://github.com/hipropascal/infomet_nelayan.git
$ pip install -r req.txt
$ python app.py
```
#### 3rd Party library

```
-- Install proj
$ brew install proj

-- Install GDAL
$ brew install gdal --HEAD
```

## API LIST (Lihat app.py)

| Routing                                   | Deskripsi                  | GET                         | POST                    |
| ------------------------------------------|----------------------------|-----------------------------|------------------------ |
| /                                         | Page Dashboard Utama       |res: HTML                    | -                       |
| /area                                     | Page Area                  |res: HTML                    | -                       |
| /api/get_wilayah/                         | List Wilayah               |res: JSON                    | -                       |
| /api/get_area_geojson/<wilayah>           | List area dalam group area |req: wilayah  res: JSON      | -                       |
| /api/post_wilayah/<wilayah>               | Update Wilayah             |req: wilayah  res: Messege   | req :File .json         |
| /api/remove_wilayah/<wilayah>             | Remove Wilayah             |req: wilayah                 | -                       |


## Desain Antarmuka Sistem Monitoring
![alt text](https://github.com/hipropascal/infomet_nelayan/blob/master/doc/UI/monitoring.jpg?raw=true)
##
![alt text](https://github.com/hipropascal/infomet_nelayan/blob/master/doc/UI/wilayah.jpg?raw=true)
##
![alt text](https://github.com/hipropascal/infomet_nelayan/blob/master/doc/UI/infomet.jpg?raw=true)
##
![alt text](https://github.com/hipropascal/infomet_nelayan/blob/master/doc/UI/data_logger.jpg?raw=true)
##
## Desain Antarmuka Sisfomet Raspberry Pi
![alt text](https://github.com/hipropascal/infomet_nelayan/blob/master/doc/UI/raspi.jpg?raw=true)

