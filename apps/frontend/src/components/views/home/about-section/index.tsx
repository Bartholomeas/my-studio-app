
import dynamic from "next/dynamic";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const BentoGrid = dynamic(() => import("./bento-grid").then((res) => res.BentoGrid));

export const AboutSection = () => {
  return (
    <section
      className={"relative min-h-screen bg-background-dark"}
    >
      <div className={"container flex h-full flex-col gap-3 py-24"}>
        <div className={"flex flex-col gap-2"}>
          <Title color={'white'}>Kim jesteśmy?</Title>
          <Text color={'white'}>Na początku poznaj nas lepiej!</Text>
        </div>
        <BentoGrid />
      </div>
    </section>
  );
};
