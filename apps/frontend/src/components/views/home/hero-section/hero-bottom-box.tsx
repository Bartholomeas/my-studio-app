"use client";

import dynamic from "next/dynamic";

import { useTranslations } from "next-intl";

import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";

const CtaCircle = dynamic(() =>
  import("@/components/common/special/cta-circle").then((res) => res.CtaCircle),
);

export const HeroBottomBox = () => {
  const t = useTranslations("/.heroSection");

  return (
    <>
      {/* <Button
        withIcon
      >
        Skontaktuj się już teraz
      </Button> */}
      <MagneticWrapper
        className={"absolute bottom-16 right-16 flex items-center justify-center p-0"}
      >
        <CtaCircle text={t("scrollCTA")} />
      </MagneticWrapper>
    </>
  );
};
