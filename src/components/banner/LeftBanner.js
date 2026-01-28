import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiNodedotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Streamer.", "Web Developer.", "Blogger."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD </h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Youra No AI</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">I am an active Informatic Engineering student at Texmaco Institute of Technology. As a skilled full-stack developer, I am dedicated to transforming ideas into innovative web applications. Explore my latest projects and articles that showcase my expertise in React.js and modern web development.</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
