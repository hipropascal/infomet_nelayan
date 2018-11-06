# App Client

Struktur file dan folder :

  - package.json : list library yang digunakan di sisi client
  - package-lock.json : file yang dibuat otomatis oleh npm
  - webpack.config.js : file konfigurasi untuk webpack
  - js : berisi file js yang akan di compile oleh webpack
  - dist : berisi file hasil compile webpack
  - img : berisi file gambar (icon, legend, dsb)
  - components : berisi modul komponen yang terdiri dari template dan controller

### Cara Install Library

```sh
$ npm install
```

### Cara Compile

  - untuk mode release
```sh
$ npm run build
```
  - untuk mode development (baris error akan terlihat)
```sh
$ npm run build:dev
```