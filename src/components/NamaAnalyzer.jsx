import React, { useState } from 'react';

const NamaAnalyzer = () => {
    const [nama, setNama] = useState('');
    const [panjangNama, setPanjangNama] = useState(0);
    const [jumlahkata, setJumlahkata] = useState(0);
    const [total, setTotal] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Menghapus spasi dari nama untuk menghitung jumlah huruf
        const namaTanpaSpasi = nama.replace(/\s/g, '');
        const panjangNamaBaru = namaTanpaSpasi.length;

        // Menghitung jumlah kata dengan menisahkan berdasarkan spasi
        const kataArray = nama.trim().split(/\s+/); // split by spaces
        const jumlahkataBaru = kataArray.length;

        // Mengupdate state
        setPanjangNama(panjangNamaBaru);
        setJumlahkata(jumlahkataBaru); // Perbaikan di sini
        setTotal(panjangNamaBaru + jumlahkataBaru); // Hitung total
    };

    return (
        <div style={{ margin: '50px auto', textAlign: 'center' }}>
            <h2>Analisis Nama</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Masukkan Nama:
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <br />
                <button type="submit" style={{ marginTop: '10px' }}>Hitung</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <p>Panjang Nama (tanpa spasi): {panjangNama}</p>
                <p>Jumlah Kata: {jumlahkata} </p>
                <p><strong>Total: {total} </strong></p>
            </div>
        </div>
    );
};

export default NamaAnalyzer;
