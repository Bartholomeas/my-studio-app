'use client';

import { forwardRef, useEffect, useRef } from "react";

import { useScroll } from "framer-motion";

type RollingTextPathProps = {
  text: string;
  pathOffsetValue?: number;
};

export const RollingTextPath = forwardRef<HTMLDivElement, RollingTextPathProps>(({ text, pathOffsetValue = 100 }, ref) => {
  const pathsRef = useRef<SVGTextPathElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    scrollYProgress.on("change", e => {
      pathsRef.current?.forEach((path, i) => {
        path.setAttribute("startOffset", -pathOffsetValue + (i * pathOffsetValue) + (e * pathOffsetValue) + '%');
      });
    });
  }, []);

  return (
    <svg
      className={"mb-OFFS w-full"}
      viewBox={"0 0 250 90"}
    >
      <path
        id={"path-curve"}
        fill={"none"}
        d={"m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"} />
      <text
        className={"fill-primary text-lg uppercase"}
      // style={{ fill: 'red' }}
      >
        {[...Array(3)].map((_, i) => (
          <textPath
            key={`rollingTextPathItem-${i}`}
            ref={(ref: SVGTextPathElement | null) => {
              if (ref) pathsRef.current[i] = ref;
            }}
            href={"#path-curve"}
            startOffset={`${i * pathOffsetValue}%`}
            className={"text-lg uppercase"}
          >
            <tspan xlinkHref={`#rollingTextPathItem-${i}`}>{text}</tspan>
          </textPath>
        ))}
      </text>
    </svg>
  );
});

RollingTextPath.displayName = 'RollingTextPath';
