"use client";

import { forwardRef, useEffect, useRef } from "react";

import { useScroll } from "framer-motion";

type RollingTextPathProps = {
  text: string;
  pathOffsetValue?: number;
  textsMultiply?: number;
};

export const RollingTextPath = forwardRef<HTMLDivElement, RollingTextPathProps>(
  ({ text, pathOffsetValue = 50, textsMultiply = 2 }, ref) => {
    const pathsRef = useRef<SVGTextPathElement[]>([]);
    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "end start"],
    });

    useEffect(() => {
      scrollYProgress.on("change", (e) => {
        pathsRef.current?.forEach((path, i) => {
          path.setAttribute(
            "startOffset",
            -pathOffsetValue + (i * pathOffsetValue) + (e * pathOffsetValue) + "%",
          );
        });
      });
    }, []);

    // const pathArr = useMemo(() => Array.from({ length: textsMultiply }, () => null), [textsMultiply]);
    const pathArr = Array.from({ length: textsMultiply }, () => null);

    return (
      <svg viewBox={"0 0 250 90"} >
        <path
          id={"path-curve"}
          fill={"none"}
          d={"m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"}
        />
        <text className={"fill-primary text-[0.6rem] uppercase"}>
          {pathArr.map((_, i) => (
            <textPath
              key={`rollingTextPathItem-${i}`}
              ref={(ref: SVGTextPathElement | null) => {
                if (ref) pathsRef.current[i] = ref;
              }}
              href={"#path-curve"}
              startOffset={`${i * pathOffsetValue}%`}
              textLength={"55%"}
              lengthAdjust={"spacingAndGlyphs"}
            >
              <tspan xlinkHref={`#rollingTextPathItem-${i}`}>{text}</tspan>
            </textPath>
          ))}
        </text>
      </svg >
    );
  },
);

RollingTextPath.displayName = "RollingTextPath";
