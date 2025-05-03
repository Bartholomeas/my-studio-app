import Image from "next/image";

import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";

export const BlogPostHero = () => {
  return (
    <SectionScaleRotate
      className={"relative flex h-screen flex-col overflow-hidden"}

    >
      <div className={"relative h-[80vh] w-full after:absolute after:inset-0 after:z-10 after:size-full after:bg-gradient-to-b after:from-foreground after:to-transparent after:content-['']"}>
        <Image
          src={"/pic1.webp"}
          alt={"Blog post hero"}
          fill
          priority
          sizes={"100vw"}
          className={"object-cover"}
        />
      </div>

      <div className={"container flex w-full flex-col bg-background py-2 md:py-10"}>
        <Title type={"h1"} size={"h1"} className={"mb-4"}>Blog post title</Title>
        <div className={"flex w-full flex-row justify-between"}>
          <div className={"flex items-center gap-3"}>
            <div className={"relative size-16 overflow-hidden rounded-full"}>
              <Image
                src={"/team/me.jpg"}
                alt={"Author"}
                fill
                className={"object-cover"}
              />
            </div>
            <div>
              <Text weight={"semibold"}>John Doe</Text>
              <Text size={"sm"} color={"muted"}>CEO</Text>
            </div>
          </div>
          <Text color={"muted"} className={"mb-2"}>Marzec 15, 2024 • 5 minut czytania</Text>
        </div>

      </div>
    </SectionScaleRotate>
  );
};
