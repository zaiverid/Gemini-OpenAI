## **📌 About**
This is a **Telegram Bot** powered by **Google's Gemini AI**, designed to run on **Termux (Android)**. The bot provides AI-generated responses to user messages using the **Gemini 2.0 Flash** model.

---

## **📥 Prerequisites**
- **Termux** installed ([Download v0.118.2](https://github.com/termux/termux-app/releases/tag/v0.118.2))
- **Node.js** (Installed via Termux)
- **Git** (Installed via Termux)
- **Google Gemini API Key** (Get it from [Google AI Studio](https://aistudio.google.com/))

---

## **🛠 Installation & Setup**
### **1. Install Termux & Update Packages**
Open **Termux** and run:
```bash
apt update && apt upgrade -y
```

### **2. Install Required Packages**
```bash
pkg install nodejs git -y
```

### **3. Clone the Repository**
```bash
git clone https://github.com/zaiverid/Gemini-OpenAI
cd Gemini-OpenAI
```

### **4. Install Dependencies**
```bash
npm install
```

### **5. Configure Environment Variables**
Create a `.env` file:
```bash
nano .env
```
Add your **Telegram Bot Token** and **Gemini API Key**:
```env
BOT_TOKEN=your_telegram_bot_token_here
API_KEY=your_gemini_api_key_here
```
Save with `Ctrl + O` → `Enter` → `Ctrl + X`.

### **6. Run the Bot**
```bash
node index.js
```
The bot should now be **online**! 🚀

---

## **🤖 Bot Commands**
| Command | Description |
|---------|-------------|
| `/start` | Welcome message |
| `/help`  | Show bot usage guide |
| `/faq`   | Frequently Asked Questions |

**Note:** Just send a normal message (no command) to get an AI response.

---

## **⚠️ Troubleshooting**
### **1. Termux Permissions**
If Termux lacks storage access:
```bash
termux-setup-storage
```

### **2. Node.js Not Found**
If `node` or `npm` doesn't work:
```bash
pkg reinstall nodejs
```

### **3. API Key Errors**
- Ensure `.env` is correctly set.
- Check if the **Gemini API Key** is valid.

---

## **📜 License**
This project is under the **MIT License**.  
Developed by **[Zaiverid](https://github.com/zaiverid)**.

---

## **🔗 Useful Links**
- [Termux GitHub](https://github.com/termux/termux-app)
- [Google AI Studio](https://aistudio.google.com/)
- [Telegram BotFather](https://t.me/BotFather)

---

### **🎉 Ready to Use!**
Follow the steps, and your **Gemini AI Telegram Bot** will be running on **Termux (Android)**.  
For issues, check **[GitHub Issues](https://github.com/zaiverid/Gemini-OpenAI/issues)** or create a new one.  

**Happy Coding!** 👨‍💻🤖
