import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";

import { CtaCircle } from "@/components/common/special/cta-circle";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const TeamMembersCarousel = dynamic(() => import("./team-members-carousel").then(res => res.TeamMembersCarousel));

export const TeamSection = async () => {
  const t = await getTranslations('/.teamSection');

  return (
    <section className={"relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background-light to-white py-24"}>
      <div className={"container mx-auto flex h-full flex-1 flex-col justify-center"}>
        <div className={"mb-10 flex flex-col"}>
          <Title
            type={"h2"}
            size={"h1"}
            weight={"bold"}>{t('title')}</Title>
          <Text
            size={"sm"}
            color={"primary"}
            weight={"semibold"}
          >{t('subtitle')}</Text>
        </div>
        <div className={"grid grid-cols-1 place-content-center items-center gap-8 md:grid-cols-4"}>
          <div className={"mb-8 flex items-center justify-center md:col-span-1 md:mb-0"}>
            <CtaCircle
              arrowDirection={"right"}
              arrowClassName={"group-hover:-rotate-45"}
              text={t('ctaCircle')}
            />
          </div>
          <div className={"relative min-h-[300px] w-full md:col-span-3"}>
            <TeamMembersCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
