import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const BentoGrid = dynamic(() => import("./bento-grid").then((res) => res.BentoGrid));

export const AboutSection = async () => {
  const t = await getTranslations('/.aboutSection');

  return (
    <section
      className={"relative min-h-screen bg-background-dark"}
    >
      <div className={"container flex h-full flex-col gap-3 py-24"}>
        <div className={"flex flex-col gap-2"}>
          <Title
            type={'h2'}
            color={'white'}
            weight={'semibold'}
          >
            {t('title')}
          </Title>
          <Text
            color={'white'}
          >
            {t('subtitle')}
          </Text>
        </div>
        <BentoGrid />
      </div>
    </section>
  );
};
