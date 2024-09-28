'use client';

import { type ComponentProps, useRef, useState } from "react";

import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type MagneticWrapperProps = MotionProps & {
  className?: ComponentProps<'div'>['className'];
};

export const MagneticWrapper = ({
  children,
  className,
  ...props
}: MagneticWrapperProps) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    const { height, width, left, top } = containerRef?.current?.getBoundingClientRect() ?? { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + (width / 2));
    const middleY = clientY - (top + (height / 2));

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return <motion.div
    ref={containerRef}
    onMouseMove={handleMouse}
    onMouseLeave={reset}
    className={cn('relative h-min w-min p-[50px] flex items-center justify-center', className)}
    animate={{ x, y }}
    transition={{ type: "spring", stiffness: 50, damping: 5, mass: 0.1 }}
    {...props}>
    {children}
  </motion.div >;
};