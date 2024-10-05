'use client';

import { useCallback, useEffect, useState } from "react";

import { type SpringOptions, useMotionValue, useSpring } from "framer-motion";


const smoothMouseConfig: SpringOptions = {
  damping: 20,
  stiffness: 300,
  mass: 0.5,
};

export const useMousePosition = () => {

  const [isHovering, setIsHovering] = useState(false);
  const cursorSize = 15;
  const hoverSize = 80;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothMouseConfig),
    y: useSpring(mouse.y, smoothMouseConfig),
  };

  const manageMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {

      const targetAttribute = (e.target as HTMLElement).getAttribute('data-cursor-type');

      if (targetAttribute === 'menu') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      const { clientX, clientY } = e;
      mouse.x.set(clientX - (isHovering ? cursorSize / 2 : cursorSize / 2));
      mouse.y.set(clientY - (isHovering ? cursorSize / 2 : cursorSize / 2));
    },
    [isHovering, mouse.x, mouse.y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);

  return { smoothMouse, isHovering, cursorSize, hoverSize };
};