"use client";

import { useEffect, useState } from "react";

import { type SpringOptions, useMotionValue, useSpring } from "framer-motion";
import { type LucideIcon } from "lucide-react";

import { type CursorActionType } from "./cursor-handler.types";
import { getCursorContent } from "./cursor-handler.utils";


const smoothMouseConfig: SpringOptions = {
  damping: 20,
  stiffness: 300,
  mass: 0.5,
};

const cursorSize = 15;
const hoverSize = 200;

export const useMousePosition = () => {
  const [isHovering, setIsHovering] = useState(false);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorContent, setCursorContent] = useState<[string | null, LucideIcon | null]>([null, null]);


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouse = {
    x,
    y,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothMouseConfig),
    y: useSpring(mouse.y, smoothMouseConfig),
  };

  const checkForDataHoverElement = (e: globalThis.MouseEvent) => {
    const target = e.target as HTMLElement;
    const closestHoverEl = target.closest('[data-hover]');
    const cursorActionType = closestHoverEl?.getAttribute('data-hover') as CursorActionType;

    setCursorContent(getCursorContent(cursorActionType));
    setIsHovering(!!closestHoverEl);
  };

  const manageMouseMove = (e: globalThis.MouseEvent) => {
    checkForDataHoverElement(e);

    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });

    mouse.x.set(clientX - (isHovering ? hoverSize / 2 : cursorSize / 2));
    mouse.y.set(clientY - (isHovering ? hoverSize / 2 : cursorSize / 2));
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return {
    mouse,
    smoothMouse,
    mousePosition,
    x: x.get(),
    y: y.get(),
    isHovering,
    cursorSize,
    hoverSize,
    cursorContent,
    setCursorContent,
  };
};
