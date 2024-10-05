"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { Text } from "../common/text";
import { Title } from "../common/title";
import { TimelineBox } from "./timeline-box";


interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineSectionProps {
  data: TimelineEntry[];
  title?: string;
  description?: string;
}

export const TimelineSection = ({ title, description, data }: TimelineSectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsContainerRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%']
  });

  useEffect(() => {
    if (itemsContainerRef?.current) {
      const rect = itemsContainerRef?.current?.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [itemsContainerRef]);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return <section
    className={"w-full bg-background px-[2%] font-sans"}
    ref={containerRef}>
    <div className={"container py-20"}>
      {title && <Title>{title}</Title>}
      {description && <Text>{description}</Text>}
    </div>
    <div
      ref={itemsContainerRef}
      className={"relative pb-20"}
    >
      {data?.map((item, index) =>
        <TimelineBox
          key={`timelineItem-${item.title}-${index}`}
          title={item.title}
          content={item.content}
        />
      )}

      <div
        style={{ height: height + 'px' }}
        className={"d:left-8 bg-[linear-gradient(to_bottom, var(--primary-50), var(--primary-950))] to-transaprent [mask-image:linear-gradient(to_bottom,transparent_0%, black_10%, black_90%, transparent_100%)] absolute left-8 top-0 w-[2px] overflow-hidden from-transparent from-0% via-primary-500 to-[99%]"}
      >
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className={"absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"}
        />
      </div>
    </div>
  </section >;
};
