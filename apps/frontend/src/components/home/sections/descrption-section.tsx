'use client';

import { useRef } from "react";

import { useInView } from "framer-motion";

import { RevealingText } from "@/components/common/special/revealing-text";

export const DescrptionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    margin: "-200px",
  });

  return (
    <section
      className={"flex h-screen items-center justify-center bg-foreground"}>
      <div ref={containerRef} className={"container flex items-center justify-center"}>
        <RevealingText
          className={"text-white"}
          isInView={isInView}
          text={"Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."}
        />
      </div>
    </section>
  );
};
