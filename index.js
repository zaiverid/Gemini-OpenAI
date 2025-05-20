require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Load environment variables with the new names you requested
const BOT_TOKEN = process.env.BOT_TOKEN;
const API_KEY = process.env.API_KEY;

// Check if required environment variables are set
if (!BOT_TOKEN || !API_KEY) {
    console.error('Error: Please set BOT_TOKEN and API_KEY in your .env file');
    process.exit(1);
}

// Initialize Telegram bot
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log('Bot Gemini AI is running...');

// Handle /start command
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || 'there';
    
    await bot.sendMessage(
        chatId,
        `Halo ${firstName}! Apa yang bisa saya bantu?`,
        { parse_mode: 'Markdown' }
    );
});

// Handle /help command
bot.onText(/\/help/, async (msg) => {
    const chatId = msg.chat.id;
    
    const helpMessage = `
*Bantuan Penggunaan Bot*

Bot ini menggunakan layanan Google Gemini AI untuk menjawab pertanyaan Anda. Berikut cara menggunakannya:

1. Kirim pesan teks untuk mendapatkan respons AI
2. Bot akan mencoba menjawab pertanyaan Anda sebaik mungkin
3. Untuk penjelasan lebih lanjut, gunakan /faq

Bot ini tidak memiliki menu atau tombol khusus. Cukup ketik pertanyaan Anda!
    `;
    
    await bot.sendMessage(
        chatId,
        helpMessage,
        { parse_mode: 'Markdown' }
    );
});

// Handle /faq command
bot.onText(/\/faq/, async (msg) => {
    const chatId = msg.chat.id;
    
    const faqMessage = `
*FAQ - Pertanyaan yang Sering Diajukan*

*1. Apa itu Bot Telegram Gemini OpenAI?*
Bot ini menggunakan model bahasa Gemini dari Google untuk menjawab pertanyaan Anda.

*2. Bagaimana cara menggunakannya?*
Cukup kirim pesan teks biasa (bukan command) dan bot akan merespons.

*3. Apakah bot ini menyimpan percakapan?*
Tidak, kami tidak menyimpan riwayat percakapan Anda.

*4. Kenapa respons bot terkadang tidak akurat?*
Model AI mungkin memiliki keterbatasan dalam memahami konteks tertentu dalam model gemini-2.0-flash.

*5. Fitur apa saja yang tersedia?*
Saat ini bot hanya merespons pesan teks biasa. Tidak ada fitur tambahan lainnya.
    `;
    
    await bot.sendMessage(
        chatId,
        faqMessage,
        { parse_mode: 'Markdown' }
    );
});

// Handle regular messages (not commands)
bot.on('message', async (msg) => {
    // Skip if the message is a command
    if (msg.text && msg.text.startsWith('/')) {
        return;
    }

    const chatId = msg.chat.id;
    const userMessage = msg.text;

    // Ignore non-text messages
    if (!userMessage) {
        return await bot.sendMessage(chatId, 'Maaf, saya hanya bisa memproses pesan teks.');
    }

    try {
        // Show typing indicator
        await bot.sendChatAction(chatId, 'typing');

        // Call Gemini API
        const response = await callGeminiAPI(userMessage);

        // Send the response back to the user
        await bot.sendMessage(chatId, response);
    } catch (error) {
        console.error('Error:', error);
        await bot.sendMessage(chatId, 'Maaf, saya mengalami kesalahan saat memproses permintaan Anda.');
    }
});

// Function to call Gemini API
async function callGeminiAPI(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const requestData = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }]
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await axios.post(url, requestData, config);

    // Extract the generated text from the response
    if (response.data && response.data.candidates && response.data.candidates[0] && response.data.candidates[0].content && response.data.candidates[0].content.parts) {
        return response.data.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Unexpected response format from Gemini API');
    }
}

// Handle errors
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

bot.on('webhook_error', (error) => {
    console.error('Webhook error:', error);
});
