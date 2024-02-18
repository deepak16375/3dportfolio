'use client'
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react';
import MobileNavbar from "./MobileNavbar";
import SoundPlayer from "@/components/main/SoundPlayer";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (link?: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#home" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden lg:block text-gray-300">
            Deepak.dev
          </span>
        </a>

        <div className="hidden lg:flex items-center justify-between w-96 h-auto border border-[#7042f861] bg-[#0300145e] mr-4 px-4 py-2 rounded-full text-gray-200 ">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        <div className="flex gap-5 items-center">
          <div className="bg-white px-[0.35rem] rounded-full flex justify-center pt-1">
            <SoundPlayer />
          </div>
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              onClick={() => handleClick(social.link)}
              style={{ cursor: 'pointer' }}
              width={24}
              height={24}
            />
          ))}
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" />
          </div>
        </div>
      </div>

      {isOpen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;
