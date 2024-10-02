import Image from "next/image";

import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";

import Pic2 from "./../../../../public/pic2.jpg";

export const AboutSection = () => {
  return (
    <SectionScaleRotate
      scaleOpts={{ inputRange: [0, 1], outputRange: [0.8, 1] }}
      rotateOpts={{ inputRange: [0, 1], outputRange: [5, 0] }}
      className={"relative h-screen"}
    >
      <Image src={Pic2} alt={"BackgroundImage"} className={"object-cover"} fill placeholder={"blur"} />
    </SectionScaleRotate>
  );
};
