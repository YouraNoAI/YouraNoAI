import React, { useState, useEffect } from "react";
import { FaGithub, FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { fetchSocialMedia, getSocialMediaUrl } from "../../services/socialMediaService";

const ContactLeft = () => {
  const [socials, setSocials] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch social media data dari API
    const loadSocialMedia = async () => {
      try {
        const data = await fetchSocialMedia();
        setSocials(data);
      } catch (error) {
        console.error('Error loading social media:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSocialMedia();
  }, []);

  // Social media links dengan icon
  const socialLinks = [
    { platform: 'github', icon: FaGithub, handle: socials.github },
    { platform: 'tiktok', icon: FaTiktok, handle: socials.tiktok },
    { platform: 'instagram', icon: FaInstagram, handle: socials.instagram },
    { platform: 'youtube', icon: FaYoutube, handle: socials.youtube },
    { platform: 'facebook', icon: FaFacebook, handle: socials.facebook },
  ];

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 size-24 object-top object-cover rounded-lg mb-2"
        src={contactImg}
        alt="YouraNoAI"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">YOURA NO AI</h3>
        <p className="text-base text-gray-400 tracking-wide">
          Saya adalah mahasiswa aktif Teknik Informatika di Texmaco Institute of Technology. 
          Sebagai full-stack developer yang berdedikasi, saya mengubah ide menjadi aplikasi web yang inovatif. 
          Jelajahi proyek dan artikel terbaru saya yang menampilkan keahlian saya dalam React.js dan pengembangan web modern.
        </p>
        <div>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Telepon: <span className="text-lightText">+62 853-5185-1170</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">youranoai@gmail.com</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Status: <span className="text-yellow-400">Tersedia untuk Freelance & Kolaborasi</span>
          </p>
        </div>
      </div>
      
      {/* Social Media Links - Dynamic from API */}
      <div className="flex gap-4 flex-wrap">
        {loading ? (
          <p className="text-gray-500">Memuat media sosial...</p>
        ) : (
          socialLinks.map((social) => {
            if (!social.handle) return null;

            const IconComponent = social.icon;
            const url = getSocialMediaUrl(social.platform, social.handle);

            return (
              <a
                key={social.platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow @${social.handle}`}
                className="bannerIcon hover:text-designColor"
              >
                <IconComponent />
              </a>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContactLeft;
