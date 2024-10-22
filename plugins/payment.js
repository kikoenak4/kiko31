let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'https://pomf2.lain.la/f/g6jrwm26.jpg', 'img.jpg', `
╔══「 *Pembayaran* 」
╟
╟ 
╚════════════════ 
_Jika sudah melakukan pembayaran harap hubungi Owner_

*QRIS belum di buat*
Cara scan QRIS
${conn.readmore}
1. Download gambar di atas
2. Buka aplikasi E-Waalet kamu(Ovo, Shopeepay dll)
3. Pilih tab *Bayar*, maka akan di arahkan ke opsi kamera
4. Pilih icon galery di pojok, lalu pilih kode yg sudah didownload
5. Masukkan nominal
6. Pembayaran berhasil`, m)
}
handler.command = /^payment$/i

module.exports = handler