"use client";

import { type ComponentProps, type PropsWithChildren, useMemo, useRef } from "react";

import { cubicBezier, motion, type MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type ParagraphRevealProps = {
  text: string;
  className?: ComponentProps<"div">["className"];
};

export const ParagraphReveal = ({ text, className }: ParagraphRevealProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.55", "end 0.25"],
  });

  const words = useMemo(
    () =>
      text.split(" ")?.map((word, index) => {
        const start = index / text.length;
        const end = start + 1 / text.length;
        return (
          <WordToReveal
            key={`WordToReveal-${word}-${index}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </WordToReveal>
        );
      }),
    [scrollYProgress, text],
  );

  return (
    <p ref={container} className={cn("p-md flex flex-wrap items-center text-5xl", className)}>
      {words}
    </p>
  );
};

type WordToRevealProps = PropsWithChildren<{
  progress: MotionValue<number>;
  range: [number, number];
}>;
const WordToReveal = ({ children, progress, range }: WordToRevealProps) => {
  const opacity = useTransform(progress, range, [0, 1], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  return (
    <span className={"relative mr-[12px] mt-[12px]"}>
      <span className={"absolute opacity-20"}>{children}</span>
      <motion.span style={{ opacity }} className={"duration-500"}>
        {children}
      </motion.span>
    </span>
  );
};
