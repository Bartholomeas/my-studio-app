'use client';

import React, { useRef } from 'react';

import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { DynamicBlurImage } from "@/components/common/special/dynamic-blur-image";
import { useDimension } from "@/hooks/use-dimension";

const IMAGES = [
  "https://i.pinimg.com/564x/1b/8c/80/1b8c80a24507198ea2275d4e635cf7d1.jpg",
  "https://i.pinimg.com/564x/d0/0d/7e/d00d7e5283fe55c03ab1b3f7da4dfd6e.jpg"
  , "https://i.pinimg.com/474x/5b/b7/09/5bb70961c9fecf370e6aaa2ae3431e60.jpg",
  "https://i.pinimg.com/474x/8e/6d/53/8e6d536583e297c86beba25a1784737f.jpg",
  "https://i.pinimg.com/474x/95/d4/41/95d4413583d1acb62b36f66fbe65a3f1.jpg",
  "https://i.pinimg.com/474x/7d/5d/88/7d5d88d956f2f188446fafbfe6bef9ee.jpg",
  "https://i.pinimg.com/474x/77/0a/b9/770ab9adfe48450d6615deaa4ab0aaba.jpg",
  "https://i.pinimg.com/474x/0c/75/61/0c7561c9fd7b284f8a1e6294077bf0a0.jpg",
  "https://i.pinimg.com/474x/3d/c5/7e/3dc57e3ebd18405bf7824887c8b82eba.jpg",
  "https://i.pinimg.com/474x/57/6c/cd/576ccda3ed0da916059e398bd53c412a.jpg",
  "https://i.pinimg.com/474x/95/d4/41/95d4413583d1acb62b36f66fbe65a3f1.jpg",
  "https://i.pinimg.com/474x/7d/5d/88/7d5d88d956f2f188446fafbfe6bef9ee.jpg",
  "https://i.pinimg.com/474x/77/0a/b9/770ab9adfe48450d6615deaa4ab0aaba.jpg",
  "https://i.pinimg.com/474x/0c/75/61/0c7561c9fd7b284f8a1e6294077bf0a0.jpg",
  "https://i.pinimg.com/474x/3d/c5/7e/3dc57e3ebd18405bf7824887c8b82eba.jpg",
  "https://i.pinimg.com/474x/57/6c/cd/576ccda3ed0da916059e398bd53c412a.jpg",
] as const;

export const ProjectsTrailerSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const { height } = useDimension();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.6]);

  return (
    <section>
      <div ref={container} className='flex gap-[2vw] p-[2vw] gallery h-[175vh] bg-[#181818] overflow-hidden'>
        <Column images={[IMAGES[0], IMAGES[1], IMAGES[2]]} y={y1} />
        <Column images={[IMAGES[3], IMAGES[4], IMAGES[5]]} y={y2} />
        <Column images={[IMAGES[6], IMAGES[7], IMAGES[8]]} y={y3} />
        <Column images={[IMAGES[9], IMAGES[10], IMAGES[11]]} y={y4} />
      </div>
    </section>
  );
};


type ColumnProps = {
  images: string[];
  y?: MotionValue<number>;
};
const Column = ({ images, y }: ColumnProps) => {
  return <motion.div style={{ y }} className='projects-trailer-column relative flex flex-col gap-[2vw] w-[25%] h-full min-w-[250px] first:top-[-45%] second:top-[-45%] third:top-[-45%] fourth:top-[-45%]'>
    {images.map(img => (
      <div key={`project-trailer-${img}`} className="relative rounded-[1vw] overflow-hidden w-full h-full">
        <Image
          src={img}
          alt="Project image"
          className="object-cover"
          loading="lazy"
          fill
        />
      </div>
    ))}

  </motion.div>;
};