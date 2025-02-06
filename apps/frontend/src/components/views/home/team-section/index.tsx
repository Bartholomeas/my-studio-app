import { getTranslations } from "next-intl/server";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

export const TeamSection = async () => {
  const t = await getTranslations('/.teamSection');

  return <section className={"relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background-light to-white py-24"}>
    <Title
      type={"h2"}
      size={"h1"}
      weight={"bold"}>{t('title')}</Title>
    <Text
      size={"lg"}
      color={"primary"}
      weight={"semibold"}
    >{t('subtitle')}</Text>
  </section>;
};
