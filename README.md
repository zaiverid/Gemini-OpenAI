

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
Simpan dengan `Ctrl + X `→` Y`.

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


## **🔗 Tautan**
- [Termux GitHub](https://github.com/termux/termux-app)
- [Google AI Studio](https://aistudio.google.com/)
- [Telegram BotFather](https://t.me/BotFather)

