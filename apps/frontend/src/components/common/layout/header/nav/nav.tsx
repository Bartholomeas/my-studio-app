'use client';

import { useState } from "react";

import { usePathname } from "next/navigation";

import { motion } from 'framer-motion';

import { menuSlide } from "../header.animations";


export const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.nav variants={menuSlide}>nav</motion.nav>
  );
};
