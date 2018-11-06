# Sistem Infomet Nelayan BMKG

Struktur file dan folder :

  - client : Aplikasi yang di deploy di sisi client Raspberry PI
  - data : Data yang diolah/digunakan pada server
  - doc : berisi dokumentasi pengembangan Aplikasi
  - prototype : uji coba modul
  - src : library dan modul python
  - static : Accessible folder
  - template : page html
  - req.txt : list librari yang digunakan (pip install -r req.txt)

### Cara Install

```sh
$ git clone https://github.com/hipropascal/INFO_MET.git
$ pip install -r req.txt
$ python app.py
```

### API LIST

```

/

/area

/api/get_group_area/

/api/get_area_geojson/<group_area>

/api/post_group_area/<group_area>

/api/remove_group_area/<group_area>
```
