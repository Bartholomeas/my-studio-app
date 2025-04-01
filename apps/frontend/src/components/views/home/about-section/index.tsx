import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";

import { FullWidthText } from "@/components/common/full-width-text";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const BentoGrid = dynamic(() => import("./bento-grid").then((res) => res.BentoGrid));

export const AboutSection = async () => {
  const t = await getTranslations("/.aboutSection");

  return (
    <section className={"relative min-h-screen overflow-hidden bg-background-dark"}>
      <div className={"container flex h-full flex-col gap-6 py-24"}>
        <div className={"mb-6 flex flex-col gap-0"}>
          <Title type={"h2"} size={"h1"} color={"white"} weight={"semibold"}>
            {t("title")}
          </Title>
          <Text color={"light"} size={"lg"}>
            {t("subtitle")}
          </Text>
        </div>
        <BentoGrid />
      </div>
      <FullWidthText className={"!leading-[0.65] !text-background-light"}>Wstaw tu jakiś tekst</FullWidthText>
    </section>
  );
};
