# MemoRide-SBD

<p align="center">
  <i align="center">A Cultural Journey</i>
</p>

<p align ="center">
  <a href="#authors">Authors</a> •
  <a href="#introduction">Introduction</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#language-and-tools">Language and Tools</a> •
  <a href="#tables">Tables</a> •
  <a href="#flowchart">Flowchart</a> •
  <a href="#relational-table-and-uml">Relational Table and UML</a> 
</p>

## Authors

- [@birujung](https://www.github.com/birujung) - 
- [@akmalrbn](https://www.github.com/akmalrbn) - 2106731610
- [@sulsyd](https://www.github.com/sulsyd) - 


## Introduction
<p align="justify">MemoRide merupakan sebuah aplikasi berbasis web yang dirancang untuk memudahkan pengguna dalam melakukan *booking* destinasi wisata kultural. Dengan menggunakan halaman utama aplikasi ini, pengguna dapat dengan mudah memilih dan mencari destinasi wisata kultural di Indonesia sesuai dengan preferensi mereka. Ketika pengguna telah memilih salah satu destinasi wisata, mereka akan dapat melihat rating yang diberikan oleh pengguna lain. Aplikasi ini juga menyediakan fitur riwayat booking dan riwayat wisata bagi pengguna, sehingga pengguna dapat melacak perjalanan mereka sebelumnya.</p>

<p align="justify">Selain itu, pengguna akan memiliki tingkatan member yang berbeda tergantung dari seberapa sering mereka melakukan perjalanan. Dalam aplikasi ini juga terdapat pengguna dengan peran admin, yang memiliki kemampuan untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada destinasi wisata yang tersedia. Dengan adanya fitur ini, admin dapat dengan mudah mengelola informasi dan detail destinasi wisata.</p>

<p align="justify">Dengan demikian, MemoRide hadir sebagai sebuah aplikasi web yang membantu pengguna dalam melakukan pemesanan destinasi wisata kultural di Indonesia. Aplikasi ini tidak hanya memberikan informasi dan rating yang berguna, tetapi juga menyediakan fitur riwayat dan tingkatan member, serta memberikan kontrol penuh kepada admin untuk mengelola destinasi wisata.</p>

## Tables

### 1.  ```Wisata```
[ desc ]
```
1. Nama
2. Lokasi (Jalan)
3. Lokasi (Provinsi)
4. Jarak
5. Deskripsi
6. Review
7. Biaya per orang
8. Maksimal orang per wisata

```

### 2.  ```Review```
[ desc ]
```
1. wisata_Id
2. Username
3. Text Review
4. Rating

```

### 3.  ```User```
[ desc ]
```
1. Account_ID
2. Email
3. Password
4. Role

```

### 4.  ```Booking```
[ desc ]
```
1. user_Id
2. Username
3. Nama Lengkap
4. Jumlah orang
5. Nomor Telepon
6. Booking Date
7. Nama Wisata
8. Total_Price

```


## How To Use


## Flowchart

## Relational Table and UML 