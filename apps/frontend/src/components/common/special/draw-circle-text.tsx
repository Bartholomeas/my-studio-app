"use client";

import { type PropsWithChildren, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Text, type TextProps } from "../text";

interface DrawCircleTextProps extends PropsWithChildren {
  className?: string;
  textProps?: TextProps;
  circleStrokeColor?: string;
  circleStrokeWidth?: number;
  padding?: number;
}

export const DrawCircleText = ({
  children,
  className,
  textProps = {},
  circleStrokeColor = "#ec4e39",
  circleStrokeWidth = 3,
  padding = 10
}: DrawCircleTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (textRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          setDimensions({
            width: entry.contentRect.width + padding * 2,
            height: entry.contentRect.height + padding * 2
          });
        }
      });

      resizeObserver.observe(textRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [padding]);

  return (
    <div className={"relative inline-block"}>
      <Text className={"relative z-10"} {...textProps} ref={textRef}>
        {children}
      </Text>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <svg
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          fill={"none"}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0",
            `w-[${dimensions.width}px] h-[${dimensions.height}px]`,
            className
          )}
          style={{
            width: dimensions.width,
            height: dimensions.height
          }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
            d={`M${dimensions.width / 4} ${padding} 
							C${dimensions.width / 8} ${dimensions.height / 4} 
							${padding} ${dimensions.height / 3} 
							${padding} ${dimensions.height / 2} 
							C${padding} ${dimensions.height * 2 / 3} 
							${dimensions.width / 3} ${dimensions.height - padding} 
							${dimensions.width / 2} ${dimensions.height - padding} 
							C${dimensions.width * 2 / 3} ${dimensions.height - padding} 
							${dimensions.width - padding} ${dimensions.height * 2 / 3} 
							${dimensions.width - padding} ${dimensions.height / 2} 
							C${dimensions.width - padding} ${dimensions.height / 3} 
							${dimensions.width * 3 / 4} ${dimensions.height / 4} 
							${dimensions.width * 3 / 4} ${padding}`}
            stroke={circleStrokeColor}
            strokeWidth={circleStrokeWidth}
          />
        </svg>
      )}
    </div>
  );
};
