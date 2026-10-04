const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let busRoutes = [
    {
        id: 1,
        kodeRute: 'K1',
        asal: 'Terminal Alang-Alang Lebar',
        tujuan: 'Ampera',
        kota: 'Palembang',
        tarif: 5000
    },
    {
        id: 2,
        kodeRute: 'K2',
        asal: 'Terminal Sako',
        tujuan: 'Plaju',
        kota: 'Palembang',
        tarif: 6000
    },
    {
        id: 3,
        kodeRute: 'K3',
        asal: 'Terminal Jakabaring',
        tujuan: 'Bukit Besar',
        kota: 'Palembang',
        tarif: 7000
    }
];

let nextId = 4;

// GET / -> halaman utama
app.get('/', (req, res) => {
    res.json({
        message: 'RESTful API Rute Bus'
    });
});

// GET /bus-routes -> menampilkan seluruh data
// Filter: /bus-routes, kota=Palembang
app.get('/bus-routes', (req, res) => {
    const { kota } = req.query;

    if (kota) {
        const hasil = busRoutes.filter((b) => b.kota === kota);
        return res.json(hasil);
    }

    res.json(busRoutes);
});

// GET /bus-routes/:id -> menampilkan satu data berdasarkan id
app.get('/bus-routes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const data = busRoutes.find((b) => b.id === id);

    if (!data) {
        return res.status(404).json({
            status: 'error',
            message: 'Rute bus tidak ditemukan',
            data: null
        });
    }

    res.json(data);
});

// POST /bus-routes -> menambahkan data
app.post('/bus-routes', (req, res) => {
    const { kodeRute, asal, tujuan, kota, tarif } = req.body;

    if (!kodeRute || !asal || !tujuan || !kota || tarif === undefined) {
        return res.status(400).json({
            status: 'error',
            message: 'kodeRute, asal, tujuan, kota, dan tarif wajib diisi',
            data: null
        });
    }

    const bus = {
        id: nextId++,
        kodeRute,
        asal,
        tujuan,
        kota,
        tarif
    };

    busRoutes.push(bus);

    res.status(201).json({
        status: 'success',
        message: 'Rute bus berhasil ditambahkan',
        data: bus
    });
});

// PUT /bus-routes/:id -> mengubah data
app.put('/bus-routes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = busRoutes.findIndex((b) => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Rute bus tidak ditemukan',
            data: null
        });
    }

    const { kodeRute, asal, tujuan, kota, tarif } = req.body;

    if (!kodeRute || !asal || !tujuan || !kota || tarif === undefined) {
        return res.status(400).json({
            status: 'error',
            message: 'kodeRute, asal, tujuan, kota, dan tarif wajib diisi',
            data: null
        });
    }

    busRoutes[index] = {
        id,
        kodeRute,
        asal,
        tujuan,
        kota,
        tarif
    };

    res.json({
        status: 'success',
        message: 'Rute bus berhasil diperbarui',
        data: busRoutes[index]
    });
});

// DELETE /bus-routes/:id -> menghapus data
app.delete('/bus-routes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = busRoutes.findIndex((b) => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Rute bus tidak ditemukan',
            data: null
        });
    }

    const data = busRoutes.splice(index, 1)[0];

    res.json({
        status: 'success',
        message: 'Rute bus berhasil dihapus',
        data: data
    });
});

// Endpoint tidak ditemukan
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint tidak ditemukan',
        data: null
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});