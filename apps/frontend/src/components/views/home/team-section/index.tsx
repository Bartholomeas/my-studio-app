import dynamic from "next/dynamic";


import { getTranslations } from "next-intl/server";

import { CtaCircle } from "@/components/common/special/cta-circle";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const TeamMembersCarousel = dynamic(() => import("./team-members-carousel").then(res => res.TeamMembersCarousel));

export const TeamSection = async () => {
  const t = await getTranslations('/.teamSection');

  return (
    <section className={"relative flex min-h-screen items-center justify-center overflow-hidden"}>
      <div className={"container mx-auto px-4"}>
        <div className={"mb-6 flex flex-col"}>
          <Title
            type={'h2'}
            size={'h1'}
            weight={'bold'}>{t('title')}</Title>
          <Text
            size={'sm'}
            color={'primary'}
            weight={'semibold'}
          >{t('subtitle')}</Text>
        </div>
        <div className={"flex size-full min-h-[400px] flex-col items-center justify-center gap-2 md:grid md:grid-cols-4 md:place-content-center md:items-center"}>
          <CtaCircle
            arrowDirection={"right"}
            arrowClassName={"group-hover:-rotate-45 col-span-1"}
            text={t('ctaCircle')}
          />
          <div className={"relative col-span-3 min-h-[400px]"}>
            <TeamMembersCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
