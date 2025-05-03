"use client";

import dynamic from "next/dynamic";

import { useTranslations } from "next-intl";

import { MagneticWrapper } from "@/features/common/components/special/magnetic-wrapper";

const CtaCircle = dynamic(() =>
  import("@/features/common/components/special/cta-circle").then((res) => res.CtaCircle),
);

export const HeroBottomBox = () => {
  const t = useTranslations("/.heroSection");

  return (
    <>
      <MagneticWrapper
        className={"absolute bottom-16 right-16 flex items-center justify-center p-0"}
      >
        <CtaCircle text={t("scrollCTA")} />
      </MagneticWrapper>
    </>
  );
};
