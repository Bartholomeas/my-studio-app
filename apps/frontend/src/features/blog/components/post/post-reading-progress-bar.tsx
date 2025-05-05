'use client';

import { motion, useScroll, useSpring } from "framer-motion";

export const PostReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className={"progress-bar fixed top-16 z-50 h-2 w-full origin-left bg-primary"} style={{ scaleX }} />;
};
