"use client";

import { useMemo } from "react";

import { motion } from "framer-motion";

import { useMediaQuery } from "@/hooks/use-media-query";

import { Text } from "../../text";
import { useMousePositionContext } from "./use-mouse-position-context";

export const CursorHandler = () => {
  const {
    cursorContent: [cursorText, CursorIcon],
    smoothMouse,
    hoverSize,
    cursorSize,
    isHovering,
  } = useMousePositionContext();

  const isMobile = useMediaQuery(768, "max");
  const shouldHide = useMemo(
    () => !cursorText && !CursorIcon && isHovering,
    [cursorText, CursorIcon, isHovering],
  );

  if (isMobile || shouldHide) return null;

  return (
    <motion.span
      animate={{
        width: isHovering ? hoverSize : cursorSize,
        height: isHovering ? hoverSize : cursorSize,
      }}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className={
        "pointer-events-none fixed flex size-[15px] items-center justify-center overflow-hidden rounded-full bg-primary"
      }
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className={"absolute inset-0 z-0 bg-gradient-to-tr from-primary-600 via-primary-400 to-primary-200"}
      />

      <span
        className={
          "duration-600 z-1 pointer-events-none absolute inset-0 flex aspect-square scale-0 items-center justify-center gap-2 rounded-full bg-primary-200 transition-transform ease-out"
        }
      />

      <div className={"z-20 flex items-center justify-center gap-2 p-2"}>
        <Text weight={'bold'} size={'h4'} align={'center'} className={"text-pretty leading-none tracking-tighter"}>{cursorText}</Text>
        {/* {CursorIcon && <CursorIcon size={36} />} */}
      </div>
    </motion.span>
  );
};
