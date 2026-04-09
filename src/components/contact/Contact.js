import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { sendTelegramMessage, formatContactMessage, validateContactForm } from "../../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error message when user starts typing
    if (errMsg) setErrMsg("");
  };

  // Handle form submission
  const handleSend = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");
    setErrMsg("");

    try {
      // Validate form
      const validation = validateContactForm(formData);
      
      if (!validation.valid) {
        setErrMsg(validation.error);
        setIsLoading(false);
        return;
      }

      // Format message
      const formattedMessage = formatContactMessage(formData);

      // Send to Telegram
      await sendTelegramMessage(formattedMessage);

      // Success!
      setSuccessMsg(`✅ Terima kasih ${formData.username}! Pesan Anda telah berhasil dikirim. Saya akan merespons dalam 24 jam.`);
      
      // Reset form
      setFormData({
        username: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      setErrMsg(`❌ ${error.message}`);
      console.error("Contact form error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Hubungi Saya" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
              {/* Error Message */}
              {errMsg && (
                <div className="py-3 px-4 bg-gradient-to-r from-red-900 to-red-800 shadow-shadowOne text-center text-red-200 text-base tracking-wide rounded animate-bounce border border-red-600">
                  {errMsg}
                </div>
              )}

              {/* Success Message */}
              {successMsg && (
                <div className="py-3 px-4 bg-gradient-to-r from-green-900 to-green-800 shadow-shadowOne text-center text-green-200 text-base tracking-wide rounded animate-bounce border border-green-600">
                  {successMsg}
                </div>
              )}

              {/* Name & Phone Row */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Nama Anda</p>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="contactInput"
                    disabled={isLoading}
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Nomor Telepon</p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+62 8xx xxxx xxxx"
                    className="contactInput"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@contoh.com"
                  className="contactInput"
                  disabled={isLoading}
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subjek</p>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Apa topik pesan Anda?"
                  className="contactInput"
                  disabled={isLoading}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Pesan</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ceritakan ide atau pertanyaan Anda..."
                  className="contactTextArea"
                  rows="8"
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "📨 Mengirim..." : "📨 Kirim Pesan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
