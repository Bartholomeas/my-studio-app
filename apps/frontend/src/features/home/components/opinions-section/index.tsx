import { Suspense } from "react";

import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";


import { ParagraphReveal } from "@/features/common/components/animations/paragraph-reveal";
import { CtaCircle } from "@/features/common/components/special/cta-circle";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";

const OpinionsCarousel = dynamic(() =>
  import("./opinions-carousel").then((res) => res.OpinionsCarousel),
);

export const OpinionsSection = async () => {
  const t = await getTranslations("/.opinionsSection");

  return (
    <section
      className={
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-24"
      }
    >
      <div className={"w-full rounded-[3rem] bg-background py-16"}>
        <div className={"container mx-auto flex h-full flex-col justify-center py-8"}>
          <div className={"mb-12 flex flex-col"}>
            <Title type={"h2"} size={"h1"} weight={"bold"} color={'light'} >
              {t("title.first")} <Text as={"span"} size={"h1"} weight={"bold"} >{t("title.second")}</Text>
            </Title>
            {/* <Text size={"h2"} weight={"bold"}>To mówią o nas ludzie..</Text> */}
          </div>
          <div
            className={"grid grid-cols-1 place-content-center items-center gap-8 md:grid-cols-4"}
          >
            <div className={"mb-8 flex items-center justify-center md:col-span-1 md:mb-0"}>
              <CtaCircle
                arrowDirection={"right"}
                arrowClassName={"group-hover:-rotate-45"}
                text={t("ctaCircle")}
              />
            </div>
            <div className={"relative min-h-[300px] w-full md:col-span-3"}>
              <Suspense fallback={<div>Loading...</div>}>
                <OpinionsCarousel />
              </Suspense>
            </div>
          </div>
          <div className={"flex flex-col items-center justify-center pt-48"}>
            <ParagraphReveal
              className={"container"}
              text={
                "In time, or so I'm told I'm just another soul for sale, oh well The page is out of print We are not permanent, we're temporary, temporary Same old story"
              }
            />
          </div>
          {/* <div className={"mt-8 grid w-full grid-cols-12 gap-2"}>
            <div className={"col-span-4"}>
              <Text size={"h5"} weight={"medium"}>
                Masz coś do powiedzenia o nas?
              </Text>
            </div>
            <div className={"relative col-span-6"}>
              <DrawCircleText textProps={{ weight: "bold", size: "h4" }}>
                Zachęcamy do podzielenia się tym ze światem!
              </DrawCircleText>
            </div>
            <DrawCircleText textProps={{ weight: "bold", size: "h4" }}>
              <Button size={"lg"} variant={"primary"} className={"col-span-2 w-fit"}>
                Podziel się opinią!
              </Button>
            </DrawCircleText>
          </div> */}
        </div>
      </div>
    </section >
  );
};
