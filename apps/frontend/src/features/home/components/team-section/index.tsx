import Image from "next/image";

import { getTranslations } from "next-intl/server";


import { CursorActionType } from "@/features/common/components/special/cursor-handler/cursor-handler.types";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { Carousel, CarouselContent, CarouselItem } from "@/features/common/components/ui/carousel";

export const TeamSection = async () => {
  const t = await getTranslations("/.teamSection");

  return (
    <section
      className={
        "relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-background-light to-white py-24 xl:py-[20%]"
      }
    >
      <div
        className={
          "container mx-auto flex h-full flex-col place-content-center items-center gap-8"
        }
      >
        <Title type={"h2"} size={"h1"} weight={"bold"} className={"mb-4"}>
          {t("title")} <Text as={"span"} size={"h1"} weight={"bold"} color={'light'}>{t("subtitle")}</Text>
        </Title>
        <Carousel data-hover={CursorActionType.DRAG} className={"w-full"}
          opts={{ align: 'start', containScroll: false }}>
          <CarouselContent className={"ml-0"}>
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

const TeamMember = () => {
  return (
    <CarouselItem className={"flex size-full basis-full flex-col items-center gap-2 sm:basis-1/3 lg:basis-1/4"}>
      <div className={"relative size-full overflow-hidden"}>
        <Image
          src={"/team/me.jpg"}
          alt={"Zdjęcie przedstawiające jakiegoś kartofla"}
          width={350}
          height={350}
          className={"object-cover"}
        />
      </div>
      <Text size={"lg"} weight={"semibold"} color={"primary"}>
        Bartosz Stefaniak
      </Text>
      <Text size={"sm"} weight={"normal"} color={"light"}>
        CEO
      </Text>
    </CarouselItem>
  );
};
