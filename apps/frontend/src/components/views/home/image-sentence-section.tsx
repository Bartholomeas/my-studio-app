"use client";


import Image from "next/image";

import { motion, useTransform } from "framer-motion";

import { useScrollProgressContext } from "@/components/common/animations/context/scroll-progress-context";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

import BackgroundImage from "../../../../public/pic3.jpg";

export const ImageSentenceSection = () => {
  const { scrollYProgress } = useScrollProgressContext();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["-8vh", "35vh"]);
  return (
    <section className={"relative h-screen overflow-hidden grid grid-cols-12 p-8 gap-4 md:grid-rows-6"}>

      <motion.div style={{ y }} className={"relative h-full rounded-3xl overflow-hidden col-span-12 md:col-span-5 md:row-span-5"}>
        <Image
          src={BackgroundImage}
          alt={"Background mountains landscape image"}
          placeholder={"blur"}
          fill
          style={{ objectFit: "cover" }}
          className={"object-cover object-top"}
        />
        <div className={"container relative flex size-full flex-col py-8"}>
          <Title color={"white"} type={"h2"} className={"text-[3vw]"}>
            losowy title
          </Title>
          <Text className={"text-2xl"} color={"white"}>
            górzyste góry v0.1
          </Text>

          <div className={"flex h-full flex-col items-end justify-end"}>
            <Text className={"text-4xl opacity-70"} color={"white"}>
              górzyste góry v0.1
            </Text>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ y: y2 }} className={"p-8 relative h-full rounded-3xl overflow-hidden col-span-12 md:col-span-7 bg-background md:row-span-2"}>
        <Title type={"h2"} >Nadal brakuje Ci informacji?</Title>
      </motion.div>
      <div className="grid col-span-12 md:col-span-7 grid-cols-12 gap-4 md:row-span-6">
        <motion.div style={{ y: y3 }} className={"relative h-full rounded-3xl overflow-hidden col-span-12 md:col-span-7 bg-primary row-span-5"}></motion.div>
        <motion.div style={{ y: y4 }} className={"relative h-full rounded-3xl overflow-hidden col-span-12 md:col-span-5 md:row-span-3 bg-background-dark"}></motion.div>
      </div>
    </section>

  );
};
