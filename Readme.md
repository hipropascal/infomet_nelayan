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

### API LIST

| Routing                                   | Deskripsi                  | GET                         | POST                    |
| ------------------------------------------|----------------------------|-----------------------------|------------------------ |
| /                                         | Page Dashboard Utama       |res: HTML                    | -                       |
| /area                                     | Page Area                  |res: HTML                    | -                       |
| /api/get_group_area/                      | List Group Area            |res: JSON                    | -                       |
| /api/get_area_geojson/<group_area>        | List area dalam group area |req: group_area|res: JSON    | -                       |
| /api/post_group_area/<group_area>         | Update group area          |req: group_area res: Messege | req :File .json         |
| /api/remove_group_area/<group_area>       | Remove group area          |req: group_area              | -                       |


### Page Managemen Area
#### Routing : /
![alt text](https://github.com/hipropascal/infomet_nelayan/blob/master/doc/area_management.jpg?raw=true)

