
## **📌 Tentang**
Ini adalah **Bot Telegram** yang didukung oleh **Google Gemini AI**, dirancang untuk berjalan di **Termux (Android)**. Bot ini memberikan respons berbasis AI menggunakan model **Gemini 2.0 Flash**.

---

## **📥 Persyaratan**
- **Termux** terinstal ([Unduh v0.118.2](https://github.com/termux/termux-app/releases/tag/v0.118.2))
- **Node.js** (Diinstal via Termux)
- **Git** (Diinstal via Termux)
- **Google Gemini API Key** (Dapatkan dari [Google AI Studio](https://aistudio.google.com/))

---

## **🛠 Instalasi & Penyiapan**
### **1. Instal Termux & Perbarui Paket**
Buka **Termux** dan jalankan:
```bash
apt update && apt upgrade -y
```

### **2. Instal Paket yang Diperlukan**
```bash
pkg install nodejs git -y
```

### **3. Clone Repository**
```bash
git clone https://github.com/zaiverid/Gemini-OpenAI
cd Gemini-OpenAI
```

### **4. Instal Dependensi**
```bash
npm install
```

### **5. Konfigurasi Variabel Lingkungan**
Buat file `.env`:
```bash
nano .env
```
Tambahkan **Token Bot Telegram** dan **Kunci API Gemini**:
```env
BOT_TOKEN=token_bot_telegram_anda_disini
API_KEY=kunci_api_gemini_anda_disini
```
Simpan dengan `Ctrl + O` → `Enter` → `Ctrl + X`.

### **6. Jalankan Bot**
```bash
node index.js
```
Bot sekarang seharusnya sudah **online**! 🚀

---

## **🤖 Perintah Bot**
| Perintah | Deskripsi |
|---------|-------------|
| `/start` | Pesan sambutan |
| `/help`  | Panduan penggunaan bot |
| `/faq`   | Pertanyaan yang Sering Diajukan |

**Catatan:** Cukup kirim pesan biasa (bukan perintah) untuk mendapatkan respons AI.

---

## **⚠️ Pemecahan Masalah**
### **1. Izin Termux**
Jika Termux tidak bisa mengakses penyimpanan:
```bash
termux-setup-storage
```

### **2. Node.js Tidak Ditemukan**
Jika `node` atau `npm` tidak bekerja:
```bash
pkg reinstall nodejs
```

### **3. Masalah Kunci API**
- Pastikan `.env` sudah benar.
- Periksa apakah **Kunci API Gemini** valid.

---

## **📜 Lisensi**
Proyek ini menggunakan **Lisensi MIT**.  
Dikembangkan oleh **[Zaiverid](https://github.com/zaiverid)**.

---

## **🔗 Tautan Berguna**
- [Termux GitHub](https://github.com/termux/termux-app)
- [Google AI Studio](https://aistudio.google.com/)
- [Telegram BotFather](https://t.me/BotFather)

---

### **🎉 Siap Digunakan!**
Ikuti langkah-langkahnya, dan **Bot Telegram Gemini AI** Anda akan berjalan di **Termux (Android)**.  
Untuk masalah, periksa **[GitHub Issues](https://github.com/zaiverid/Gemini-OpenAI/issues)** atau buat yang baru.  

**Selamat mencoba!** 👨‍💻
