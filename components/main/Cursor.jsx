'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor hidden  lg:block"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    >
      <Image src="/rocket.png" width={50} height={50} alt="cursor-rocket"/>
    </motion.div>
  );
};

export default Cursor;
