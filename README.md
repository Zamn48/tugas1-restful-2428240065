# RESTful API Rute Bus

API sederhana berbasis Express.js untuk mengelola data rute bus. Project ini dibuat untuk memenuhi tugas RESTful API dengan operasi CRUD (Create, Read, Update, Delete).

## Identitas

- Nama: Angga Syahputra Azis
- NIM: 2428240065
- Kelas: SI5B
- Topik: Transportasi Umum
- Resource: Rute Bus

## Fitur

- Menampilkan seluruh data rute bus
- Menampilkan rute bus berdasarkan ID
- Menampilkan rute bus berdasarkan kota
- Menambahkan rute bus baru
- Mengubah data rute bus
- Menghapus data rute bus
- Validasi data pada proses POST dan PUT
- Penanganan error dengan response JSON
- Deployment API menggunakan Vercel

## Teknologi

- Node.js
- Express.js
- Nodemon
- Git
- GitHub
- Vercel
- Thunder Client

## Penjelasan
Project ini merupakan RESTful API yang digunakan untuk mengelola data rute bus dengan operasi CRUD (Create, Read, Update, Delete) serta filter berdasarkan kota. Data disimpan menggunakan array di dalam memori dan tidak menggunakan database sesuai dengan ketentuan tugas. Setiap data rute bus memiliki field `id`, `kodeRute`, `asal`, `tujuan`, `kota`, dan `tarif`. ID dibuat secara otomatis oleh server dan tidak dikirimkan pada request POST maupun PUT.

## Contoh data rute bus yang digunakan adalah:

```json
{
  "id": 1,
  "kodeRute": "K1",
  "asal": "Terminal Alang-Alang Lebar",
  "tujuan": "Ampera",
  "kota": "Palembang",
  "tarif": 5000
}

## Cara Menjalankan Lokal
BASH 
git clone https://github.com/Zamn48/tugas1-restful-2428240065.git

Masuk ke folder:
BASH
cd tugas1-restful-2428240065 

Install seluruh depedency dngan:
npm install

Jalankan dengan
npm start

Setelah itu dapat diakses dengan http://localhost:3000.

Untuk menambahkan data menggunakan POST, request body dikirim dalam format JSON dengan field kodeRute, asal, tujuan, kota, dan tarif. Contohnya:
{
  "kodeRute": "K4",
  "asal": "Terminal Plaju",
  "tujuan": "Bukit Besar",
  "kota": "Palembang",
  "tarif": 7000
}

Untuk PUT
{
  "kodeRute": "K1",
  "asal": "Terminal Alang-Alang Lebar",
  "tujuan": "Palembang Square",
  "kota": "Palembang",
  "tarif": 6000
}

Pada POST dan PUT dilakukan validasi terhadap field kodeRute, asal, tujuan, kota, dan tarif. Jika terdapat field yang tidak diisi, API memberikan status 400 Bad Request dengan response JSON:
{
  "status": "error",
  "message": "kodeRute, asal, tujuan, kota, dan tarif wajib diisi",
  "data": null
}

Response GET menggunakan data langsung berupa objek atau array. Response POST, PUT, DELETE, dan error menggunakan struktur status, message, dan data. Contoh response berhasil:
{
  "status": "success",
  "message": "Rute bus berhasil ditambahkan",
  "data": {}
}

Jika data tidak ditemukan, API memberikan status 404 Not Found dengan response:
{
  "status": "error",
  "message": "Rute bus tidak ditemukan",
  "data": null
}

Jika endpoint yang diakses tidak tersedia, API memberikan response:
{
  "status": "error",
  "message": "Endpoint tidak ditemukan",
  "data": null
}

## Struktur Project

```text
tugas1-restful-2428240065/
├── app.js
├── package.json
├── package-lock.json
├── vercel.json
├── .gitignore
└── README.md
## Catatan

Data rute bus disimpan sementara menggunakan in-memory array dan tidak menggunakan database.