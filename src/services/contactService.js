import axios from 'axios';

/**
 * Service untuk mengirim pesan ke Telegram secara aman
 * Menggunakan environment variables, bukan hardcoded credentials
 */

const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID || '';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Mengirim pesan ke Telegram
 * @param {string} message - Pesan yang akan dikirim
 * @param {string} parseMode - Format pesan: 'HTML' atau 'Markdown'
 * @returns {Promise} Response dari Telegram API
 */
export const sendTelegramMessage = async (message, parseMode = 'HTML') => {
  try {
    // Validasi credentials
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('⚠️ Telegram credentials tidak tersedia. Pastikan .env.local sudah dikonfigurasi.');
    }

    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: parseMode,
    }, {
      timeout: 10000 // 10 second timeout
    });

    return response.data;
  } catch (error) {
    console.error('❌ Error sending Telegram message:', error.message);
    throw new Error(`Gagal mengirim pesan: ${error.message}`);
  }
};

/**
 * Format pesan form contact ke format yang rapi
 * @param {object} formData - Data dari form
 * @returns {string} Formatted message
 */
export const formatContactMessage = (formData) => {
  const { username, phoneNumber, email, subject, message } = formData;
  
  const timestamp = new Date().toLocaleString('id-ID');
  
  return `
<b>📧 NEW CONTACT MESSAGE</b>
━━━━━━━━━━━━━━━━━━━━━━━━━

<b>👤 Name:</b> ${username}
<b>📱 Phone:</b> ${phoneNumber}
<b>📨 Email:</b> ${email}
<b>📌 Subject:</b> ${subject}

<b>💬 Message:</b>
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━
<i>⏰ ${timestamp}</i>
  `.trim();
};

/**
 * Validasi form contact
 * @param {object} formData - Data yang akan divalidasi
 * @returns {object} {valid: boolean, error?: string}
 */
export const validateContactForm = (formData) => {
  const { username, phoneNumber, email, subject, message } = formData;

  // Regex patterns
  const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^[\d\s\-()+]{7,}$/; // Minimal 7 digit/char

  if (!username || username.trim() === '') {
    return { valid: false, error: '❌ Nama harus diisi!' };
  }

  if (!phoneNumber || phoneNumber.trim() === '') {
    return { valid: false, error: '❌ Nomor telepon harus diisi!' };
  }

  if (!phoneRegex.test(phoneNumber)) {
    return { valid: false, error: '❌ Format nomor telepon tidak valid!' };
  }

  if (!email || email.trim() === '') {
    return { valid: false, error: '❌ Email harus diisi!' };
  }

  if (!emailRegex.test(email.toLowerCase())) {
    return { valid: false, error: '❌ Format email tidak valid!' };
  }

  if (!subject || subject.trim() === '') {
    return { valid: false, error: '❌ Subject harus diisi!' };
  }

  if (!message || message.trim() === '') {
    return { valid: false, error: '❌ Pesan harus diisi!' };
  }

  if (message.length < 10) {
    return { valid: false, error: '❌ Pesan minimal 10 karakter!' };
  }

  return { valid: true };
};

const contactService = {
  sendTelegramMessage,
  formatContactMessage,
  validateContactForm,
};

export default contactService;
