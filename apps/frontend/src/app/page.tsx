'use client';

import { useEffect, useRef } from "react";

import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";

import Pic1 from "./../../public/pic1.webp";
import Pic2 from "./../../public/pic2.jpg";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Home = () => {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default Home;

const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return <motion.section style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#ff991c] flex flex-col items-center justify-center text-white pb-[10vh] text-[3.5vw]">
    <p>Scroll perspective</p>
    <div className="flex gap-4">
      <p>Section</p>
      <div className="relative w-[12.5vw]">
        <Image src={Pic1} alt="BackgroundImage" fill placeholder="blur" />
      </div>
      <p>transition</p>
    </div>
  </motion.section>;
};

const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return <motion.section style={{ scale, rotate }} className="h-screen relative">
    <Image src={Pic2} alt="BackgroundImage" className="object-cover" fill placeholder="blur" />
  </motion.section>;
};