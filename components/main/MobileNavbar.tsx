import React from 'react'
const MobileNavbar = () => {
  return (
    <div className=" flex flex-col items-center w-full h-96 gap-10 justify-center  bg-[#846DCF] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90">
        <a href="#about-me" className="cursor-pointer text-white text-2xl">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-white text-2xl">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-white text-2xl">
              Projects
            </a>
   </div>
  )
}

export default MobileNavbar