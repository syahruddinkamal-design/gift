function kirimDanPindah() {
    // 1. Mengambil elemen textarea berdasarkan ID 'wish'
    const inputWish = document.getElementById('wish');
    const isiWish = inputWish.value;

    // 2. Cek apakah kolom harapan sudah diisi atau masih kosong
    if (isiWish.trim() !== "") {
        
        // Menampilkan pesan doa (Pop-up)
        alert("Aamin ya Allah ya Rabbal Aalamiin... Harapanmu tercatat dilangit ke-7. ✨");

        // 3. Pindah ke halaman bunga.html
        window.location.href = "bunga.html";
        
    } else {
        // Jika Chelsea belum menulis apa-apa tapi sudah klik tombol
        alert("Tuliskan dulu satu harapanmu di kolom ya, Chelsea.. :)");
    }
}