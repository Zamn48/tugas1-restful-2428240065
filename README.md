# RESTful API Rute Bus

API sederhana berbasis Express.js untuk mengelola data rute bus. Project ini dibuat untuk kebutuhan tugas RESTful API dengan operasi CRUD (Create, Read, Update, Delete).

## Fitur

- Menampilkan semua data rute bus
- Menampilkan rute bus berdasarkan ID
- Filter data rute berdasarkan kota
- Menambahkan rute bus baru
- Mengubah data rute bus
- Menghapus rute bus
- Mengembalikan response JSON yang rapi dan konsisten

## Teknologi

- Node.js
- Express.js

## Struktur Project

- `app.js` - file utama server API
- `package.json` - konfigurasi package dan script
- `vercel.json` - konfigurasi deploy ke Vercel

## Persyaratan

Pastikan perangkat Anda sudah terinstal:

- Node.js (versi 18 ke atas disarankan)
- npm

## Instalasi

1. Clone atau unduh project ini.
2. Buka terminal di folder project.
3. Jalankan perintah berikut:

```bash
npm install
```

## Menjalankan Server

### Mode produksi

```bash
npm start
```

### Mode development

```bash
npm run dev
```

Server akan berjalan di:

```text
http://localhost:3000
```

## Endpoint API

### 1. Menampilkan halaman utama

```http
GET /
```

Response:

```json
{
  "message": "RESTful API Rute Bus"
}
```

### 2. Menampilkan semua rute bus

```http
GET /bus-routes
```

### 3. Filter rute bus berdasarkan kota

```http
GET /bus-routes?kota=Palembang
```

### 4. Menampilkan rute bus berdasarkan ID

```http
GET /bus-routes/:id
```

### 5. Menambahkan rute bus baru

```http
POST /bus-routes
```

Body request:

```json
{
  "kodeRute": "K4",
  "asal": "Terminal Pasar 16",
  "tujuan": "Kenten",
  "kota": "Palembang",
  "tarif": 8000
}
```

### 6. Mengubah data rute bus

```http
PUT /bus-routes/:id
```

Body request:

```json
{
  "kodeRute": "K4",
  "asal": "Terminal Pasar 16",
  "tujuan": "Kenten",
  "kota": "Palembang",
  "tarif": 9000
}
```

### 7. Menghapus rute bus

```http
DELETE /bus-routes/:id
```

## Contoh Response Success

```json
{
  "status": "success",
  "message": "Rute bus berhasil ditambahkan",
  "data": {
    "id": 4,
    "kodeRute": "K4",
    "asal": "Terminal Pasar 16",
    "tujuan": "Kenten",
    "kota": "Palembang",
    "tarif": 8000
  }
}
```

## Deployment ke Vercel

Project ini sudah dilengkapi dengan konfigurasi Vercel di file `vercel.json`.

Untuk deploy:

```bash
vercel
```

Setelah proses deploy selesai, Vercel akan menyediakan URL publik API Anda.

## Catatan

Data rute bus disimpan sementara di memory server (in-memory array), sehingga data akan kembali ke kondisi awal ketika server di-restart.
