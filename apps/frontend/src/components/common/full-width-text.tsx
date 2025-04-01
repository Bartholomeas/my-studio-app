'use client';

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { Text } from "./text";

export const FullWidthText = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className={"flex w-full max-w-full items-center overflow-hidden"}
      ref={containerRef}
    >
      <Text
        weight={'bold'}
        className={cn(
          "absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase",
          className,
        )}
        ref={textRef}
      >
        {children}
      </Text>
    </div>
  );
};