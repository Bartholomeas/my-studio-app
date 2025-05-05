'use client';

import { useRef, type ReactNode } from "react";

import { motion, useInView, type Transition, type Variants } from "framer-motion";


import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { Card, CardContent } from "@/features/common/components/ui/card";



const DEFAULT_ANIMATION_VARIANTS = {
  hidden: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const DEFAULT_TRANSITION = {
  duration: 0.3,
  ease: "easeIn",
  bounce: 0.1,
  type: "spring",
  stiffness: 100
};

interface BentoDefaultItemProps {
  title: string;
  text: string;
  addiitonalContent?: ReactNode;
  animationVariants?: Variants;
  transition?: Transition;
}


export const BentoDefaultItem = ({
  title,
  text,
  addiitonalContent,
  animationVariants = DEFAULT_ANIMATION_VARIANTS,
  transition = DEFAULT_TRANSITION,
}: BentoDefaultItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      variants={{ ...DEFAULT_ANIMATION_VARIANTS, ...animationVariants }}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
      transition={{ ...DEFAULT_TRANSITION, ...transition }}
      className={"col-span-2 md:col-span-1"}>
      <Card variant={"darkGradient"} padding={"lg"}>
        <CardContent className={"flex h-full flex-col gap-4 p-0"}>
          <Title color={"white"} type={"h3"} className={"mb-2 text-2xl"}>
            {title}
          </Title>
          <Text color={"light"} className={"mb-8"}>
            {text}
          </Text>
          {addiitonalContent}
        </CardContent>
      </Card>
    </motion.div>
  );
};
