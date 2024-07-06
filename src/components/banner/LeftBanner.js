import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTelegram,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Front End Developer.",
      "Back End Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize text-lg">
            menberu walelgn
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I have experience in creating responsive and mobile-first web designs,
          enhancing user accessibility and engagement across all devices and,
          worked in Git development environments, collaborating closely with
          cross-functional teams to deliver high-quality web applications within
          project timelines.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://t.me/Menbie21wa" className="bannerIcon">
              <FaTelegram />
            </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <a
              href="https://www.linkedin.com/in/walelgn27wa/"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
