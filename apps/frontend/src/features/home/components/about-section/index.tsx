import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";

import { FullWidthText } from "@/features/common/components/full-width-text";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";

const BentoGrid = dynamic(() => import("./bento-grid").then((res) => res.BentoGrid));

export const AboutSection = async () => {
  const t = await getTranslations("/.aboutSection");

  return (
    <section className={"relative min-h-screen overflow-hidden bg-background-dark"}>
      <div className={"container flex h-full flex-col gap-6 md:py-24 lg:pb-48"}>
        <div className={"mb-6 flex flex-col gap-0 xl:max-w-[40%]"}>
          <Title type={"h2"} size={"h1"} weight={"bold"} color={'light'}>
            {t("title")} <Text as={"span"} size={"h1"} weight={"bold"} color={"white"}>{t("subtitle")}</Text>
          </Title>
        </div>
        <BentoGrid />
      </div>
      <FullWidthText className={"!leading-[0.65] !text-background-light"}>
        {t("exitSentence")}
      </FullWidthText>
    </section>
  );
};
