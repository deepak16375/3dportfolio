'use client'
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ItemLayoutProps {
  children: ReactNode;
  className?: string;
}

const ItemLayout: React.FC<ItemLayoutProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 border",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
