'use client';

import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";


import { useScrollProgressContext } from "@/components/animations/context/scroll-progress-context";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

import BackgroundImage from "../../../../public/pic3.jpg";



export const ImageSentenceSection = () => {
  const { scrollYProgress } = useScrollProgressContext();
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '60vh']);

  return (
    <motion.div style={{ y }} className="relative h-full" >
      <Image
        src={BackgroundImage}
        alt="Background mountains landscape image"
        placeholder="blur"
        fill
        style={{ objectFit: 'cover' }}
        className="object-cover object-top"
      />
      <div className="relative flex flex-col size-full py-8 container">
        <Title color={'white'} type={'h2'} className="text-[3vw]">
          losowy title
        </Title>
        <Text className="text-2xl" color={'white'}>górzyste góry v0.1</Text>

        <div className="flex flex-col items-end justify-end h-full">
          <Text className="text-4xl opacity-70" color={'white'}>górzyste góry v0.1</Text>
        </div>
      </div>
    </motion.div>

  );
};
