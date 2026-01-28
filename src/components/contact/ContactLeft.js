import React from "react";
import { FaGithub, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img className="w-full h-64 size-24 object-top  object-cover rounded-lg mb-2" src={contactImg} alt="contactImg" />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Youra No AI</h3>
        <p className="text-base text-gray-400 tracking-wide">I am an active Informatic Engineering student at Texmaco Institute of Technology. As a skilled full-stack developer, I am dedicated to transforming ideas into innovative web applications. Explore my latest projects and articles that showcase my expertise in React.js and modern web development.</p>
        <div>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+62 853-5185-1170</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">youranoai@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/YouraNoAI" target="blank">
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </a>
        <a href="https://www.tiktok.com/@code_sheet" target="blank">
          <span className="bannerIcon">
            <FaTiktok />
          </span>
        </a>
        <a href="https://www.instagram.com/youra_no_ai" target="blank">
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </a>
        <a href="https://www.youtube.com/@Code_Sheet" target="blank">
          <span className="bannerIcon">
            <FaYoutube />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactLeft;
