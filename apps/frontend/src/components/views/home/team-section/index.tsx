import Image from "next/image";

import { getTranslations } from "next-intl/server";


import { Card } from "@/components/common/ui/card";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

export const TeamSection = async () => {
  const t = await getTranslations('/.teamSection');

  return <section className={"relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background-light to-white py-24"}>
    <div className={"container mx-auto grid h-full grid-cols-1 place-content-center items-center gap-8 md:grid-cols-5"}>
      <div className={"flex flex-col gap-2 md:col-span-2"}>
        <Title
          type={"h2"}
          size={"h1"}
          weight={"bold"}>{t('title')}</Title>
        <Text
          size={"lg"}
          color={"light"}
          weight={"semibold"}
        >{t('subtitle')}</Text>
      </div>
      <Card className={"col-span-3 flex items-center justify-center rounded-lg bg-background-dark"} >
        <TeamMember />
      </Card>
    </div>


  </section>;
};


const TeamMember = () => {
  return <div className={"flex flex-col items-center"}>
    <div className={"relative aspect-square size-48 overflow-hidden rounded-full"}>
      <Image src={"/team/me.jpg"} alt={"Zdjęcie przedstawiające jakiegoś kartofla"} width={250} height={250} className={"object-cover"} />
    </div>
    <Text size={"lg"} weight={"semibold"} color={'primary'}>
      Bartosz Stefaniak
    </Text>
    <Text size={"sm"} weight={"normal"} color={'light'}>
      CEO
    </Text>
  </div>;
};