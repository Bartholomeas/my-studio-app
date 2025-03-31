import { Suspense } from "react";

import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";


import { Button } from "@/components/common/ui/button";

import { CtaCircle } from "@/components/common/special/cta-circle";
import { Title } from "@/components/common/title";


const OpinionsCarousel = dynamic(() => import("./opinions-carousel").then(res => res.OpinionsCarousel));

export const OpinionsSection = async () => {
  const t = await getTranslations('/.opinionsSection');

  return (
    <section
      className={"relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-24"}>
      <div className={"container mx-auto flex h-full flex-1 flex-col justify-center"}>
        <div className={"mb-10 flex flex-col"}>
          <Title
            type={"h2"}
            size={"h1"}
            weight={"bold"}>{t('title')}</Title>
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
            <Suspense fallback={<div>Loading...</div>}>
              <OpinionsCarousel />
            </Suspense>
          </div>
        </div>
      </div>
      <Button variant={'primary'} >
        Podziel się opinią!
      </Button>
    </section>
  );
};
