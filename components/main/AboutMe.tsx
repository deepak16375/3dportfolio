"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center z-40 gap-10 md:gap-36"
      id="about-me"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-10 md:pt-20">
        About Me
      </h1>
      <motion.div
        initial="hidden"
        variants={slideInFromTop}
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col justify-center items-center gap-4 md:gap-10"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/Me.png"
            height={500}
            width={500}
            alt="hero img"
            className="object-contain rounded-full wave-img"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-300 flex flex-col gap-4">
          <p className="text-lg md:text-xl text-center">
            A passionate front-end developer from India.📍
          </p>
          <p className="text-center lg:text-xl text-gray-300 p-4 md:p-10">
            As a Front-End Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
