"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { type SpringOptions, useMotionValue, useSpring } from "framer-motion";
import { type LucideIcon } from "lucide-react";

import { debounce } from "@/lib/debounce";

import { type CursorActionType } from "./cursor-handler.types";
import { getCursorContent } from "./cursor-handler.utils";

const SMOOTH_MOUSE_CONFIG: SpringOptions = {
  damping: 20,
  stiffness: 300,
  mass: 0.5,
};

const CURSOR_SIZE = 15;
const HOVER_SIZE = 200;

export const useMousePosition = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorContent, setCursorContent] = useState<[string | null, LucideIcon | null]>([
    null,
    null,
  ]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouse = { x, y };
  const smoothMouse = {
    x: useSpring(mouse.x, SMOOTH_MOUSE_CONFIG),
    y: useSpring(mouse.y, SMOOTH_MOUSE_CONFIG),
  };

  const updateCursorContent = useCallback((e: MouseEvent) => {
    const closestHoverEl = (e.target as HTMLElement).closest("[data-hover]");
    const cursorActionType = closestHoverEl?.getAttribute("data-hover") as CursorActionType;

    const isAlreadyHovering = Boolean(closestHoverEl);

    setCursorContent(getCursorContent(cursorActionType));

    if (isAlreadyHovering) {
      setIsHovering(isAlreadyHovering);
      window?.document?.body?.classList.add("cursor-hover");
    } else {
      setIsHovering(isAlreadyHovering);
      window?.document?.body?.classList.remove("cursor-hover");
    }
  }, []);

  const debouncedUpdateCursorContent = useMemo(
    () => debounce(updateCursorContent, 10),
    [updateCursorContent],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      debouncedUpdateCursorContent(e);

      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      const currentSize = isHovering ? HOVER_SIZE : CURSOR_SIZE;
      mouse.x.set(clientX - currentSize / 2);
      mouse.y.set(clientY - currentSize / 2);
    },
    [debouncedUpdateCursorContent, isHovering, mouse.x, mouse.y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return {
    mouse,
    smoothMouse,
    mousePosition,
    x: x.get(),
    y: y.get(),
    isHovering,
    cursorSize: CURSOR_SIZE,
    hoverSize: HOVER_SIZE,
    cursorContent,
    setCursorContent,
  };
};
