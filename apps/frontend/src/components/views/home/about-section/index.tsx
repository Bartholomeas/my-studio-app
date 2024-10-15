
import dynamic from "next/dynamic";

import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const BentoGrid = dynamic(() => import("./bento-grid").then((res) => res.BentoGrid));

export const AboutSection = () => {
  return (
    <SectionScaleRotate
      scaleOpts={{ inputRange: [0, 1], outputRange: [0.8, 1] }}
      rotateOpts={{ inputRange: [0, 1], outputRange: [5, 0] }}
      className={"relative min-h-screen bg-background-dark"}
    >
      <div className={"container flex flex-col gap-3 py-24"}>
        <div className={"flex flex-col gap-2"}>
          <Title color={'white'}>Kim jesteśmy?</Title>
          <Text color={'white'}>Na początku poznaj nas lepiej!</Text>
        </div>
        <BentoGrid />
      </div>
    </SectionScaleRotate>
  );
};
