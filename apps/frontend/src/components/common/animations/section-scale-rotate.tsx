"use client";

import { type ComponentProps, type ReactNode } from "react";

import { motion, useTransform } from "framer-motion";

import { useScrollProgressContext } from "./context/scroll-progress-context";

type SectionScaleRotateProps = {
  children: ReactNode;
  className?: ComponentProps<"section">["className"];
  scaleOpts?: { inputRange: number[]; outputRange: number[]; };
  rotateOpts?: { inputRange: number[]; outputRange: number[]; };
};
export const SectionScaleRotate = ({
  children,
  className,
  scaleOpts = {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  },
  rotateOpts = {
    inputRange: [0, 1],
    outputRange: [0, -5],
  },
}: SectionScaleRotateProps) => {
  const { scrollYProgress } = useScrollProgressContext();
  const scale = useTransform(scrollYProgress, scaleOpts.inputRange, scaleOpts.outputRange);
  const rotate = useTransform(scrollYProgress, rotateOpts.inputRange, rotateOpts.outputRange);

  return (
    <motion.section style={{ scale, rotate }} className={className}>
      {children}
    </motion.section>
  );
};
