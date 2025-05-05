'use client';

const WindowMockup = dynamic(() =>
  import("@/features/common/components/special/window-mockup").then((mod) => mod.WindowMockup),
);

import { useRef } from "react";

import dynamic from "next/dynamic";

import { motion, useInView } from "framer-motion";


import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { Card, CardContent } from "@/features/common/components/ui/card";

interface BentoHighItemProps {
  title: string;
  text: string;
}

export const BentoHighItem = ({ title, text }: BentoHighItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn", bounce: 0.1, type: "spring", stiffness: 100 }}
      className={"col-span-1 h-full min-h-[600px] lg:col-span-4"}>
      <Card variant={"darkGradient"} padding={"lg"}>
        <CardContent className={"p-0"}>
          <Title color={"white"} type={"h3"} className={"mb-2 text-2xl"}>
            {title}
          </Title>
          <Text color={"light"} className={"mb-8"}>
            {text}
          </Text>
          <WindowMockup />
        </CardContent>
      </Card>
    </motion.div>
  );
};
