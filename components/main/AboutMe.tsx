"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ItemLayout from '../sub/itemLayout'
import Link from "next/link";
const AboutMe = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center z-40 gap-10 md:gap-36"
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
      <div className="grid grid-cols-12  gap-4 xs:gap-6  md:gap-8 p-5">
        <ItemLayout
          className={"col-span-5 max-md:col-span-12 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=deepak16375&theme=transparent&layout=compact&hide_border=true&title_color=FFFFFF"
            alt="github stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-7 max-md:col-span-12 !p-0 "}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=deepak16375&theme=transparent&hide_border=true&title_color=FFFFFF"
            alt="github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={" col-span-full border"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,js,tailwind,react,next,nodejs,expressjs,c,java,mongo,redux,mysql,threejs,git,github&perline=15"
            alt="github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className=""
            src="https://github-readme-streak-stats.herokuapp.com?user=deepak16375&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="github stats"
            loading="lazy"
          />
        </ItemLayout>

       

        <ItemLayout className={"col-span-6 !p-0 "}>
          <Link
            href="https://github.com/deepak16375/100DaysOfCode-Python"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=deepak16375&exclude&repo=100DaysOfCode-Python&theme=transparent&hide_border=true&title_color=FFFFFF"
              alt="github stats"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
        </div>

    </section>
  );
};

export default AboutMe;
