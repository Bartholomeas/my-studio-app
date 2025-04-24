"use client";

import { useMemo } from "react";

import { motion } from "framer-motion";

import { useMediaQuery } from "@/hooks/use-media-query";

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
        "pointer-events-none fixed flex size-[15px] items-center justify-center rounded-full bg-primary"
      }
    >
      <span
        className={
          "duration-600 pointer-events-none absolute inset-0 z-0 aspect-square scale-0 rounded-full bg-primary-200 transition-transform ease-out"
        }
      />
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width={200}
        height={200}
        className={"pointer-events-none absolute inset-4 z-10"}
      >
        <path
          id={"circlePath"}
          d={"M50,50 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0"}
          fill={"none"}
        />
        <text>
          <textPath
            href={"#circlePath"}
            fill={"black"}
            startOffset={"0%"}
            textLength={"300%"}
            // method={"align"}
            lengthAdjust={"spacing"}
            className={
              "fill-foreground text-lg font-semibold uppercase transition-opacity duration-700 ease-out group-hover:opacity-100"
            }
          >
            {cursorText}
            {cursorText}
          </textPath>
        </text>
      </motion.svg>

      {/* {cursorText && <span>{cursorText}</span>} */}
      {CursorIcon && <CursorIcon size={48} />}
    </motion.span>
  );
};
