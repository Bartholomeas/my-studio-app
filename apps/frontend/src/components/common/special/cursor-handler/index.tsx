"use client";


import { motion } from "framer-motion";

import { useMediaQuery } from "@/hooks/use-media-query";

import { useMousePosition } from "./use-mouse-posiiton";

export const CursorHandler = () => {
  const { smoothMouse, isHovering, cursorSize, hoverSize } = useMousePosition();

  const isMobile = useMediaQuery(768, 'max');
  if (isMobile) return null;
  return (
    <motion.span
      animate={{ width: isHovering ? hoverSize : cursorSize, height: isHovering ? hoverSize : cursorSize }}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className={"pointer-events-none fixed size-[15px] rounded-full bg-black"}
    ></motion.span>
  );
};
