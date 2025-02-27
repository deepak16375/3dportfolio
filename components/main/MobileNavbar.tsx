import { slideInFromRight, slideInFromTop } from '@/utils/motion';
import { delay, motion } from 'framer-motion';
import React from 'react';

const MobileNavbar = () => {
  return (
    <motion.div 
    initial="hidden"
    animate= "visible"
    variants={slideInFromRight(0.01)}
    
    className="flex flex-col items-center w-full h-96 gap-10 justify-center bg-purple-950 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90">
      <a href="#about-me" className="cursor-pointer text-white text-2xl hover:bg-purple-800 hover:text-white px-4 py-2 rounded-md">
        About me
      </a>
      <a href="#skills" className="cursor-pointer text-white text-2xl hover:bg-purple-800 hover:text-white px-4 py-2 rounded-md">
        Skills
      </a>
      <a href="#projects" className="cursor-pointer text-white text-2xl hover:bg-purple-800 hover:text-white px-4 py-2 rounded-md">
        Projects
      </a>
    </motion.div>
  );
};

export default MobileNavbar;
