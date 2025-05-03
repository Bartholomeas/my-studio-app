'use client';

import { type ComponentProps, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { CtaCircle } from "@/features/common/components/special/cta-circle";
import { CursorActionType } from "@/features/common/components/special/cursor-handler/cursor-handler.types";
import { useMousePositionContext } from "@/features/common/components/special/cursor-handler/use-mouse-position-context";
import { MagneticWrapper } from "@/features/common/components/special/magnetic-wrapper";
import { Text } from "@/features/common/components/text";
import { Title, titleVariants } from "@/features/common/components/title";

import ReadingGif from "../../../../../public/reading-cat.gif";

const textClassNames: ComponentProps<"div">["className"] = "text-3xl md:text-6xl";

export const BlogLandingSection = () => {
  const t = useTranslations("/blog");

  const { smoothMouse, isHovering } = useMousePositionContext();
  const baseTextRef = useRef<HTMLDivElement | null>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);

  const calculateTextHeight = useCallback(() => {
    if (baseTextRef?.current) {
      setTextHeight(baseTextRef.current.getBoundingClientRect().height);
    }
  }, []);

  useLayoutEffect(() => {
    calculateTextHeight();
    window.addEventListener("resize", calculateTextHeight);

    return () => {
      window.removeEventListener("resize", calculateTextHeight);
    };
  }, [calculateTextHeight]);
  const size = useMemo(() => (isHovering ? 600 : 0), [isHovering]);

  return (
    // <div className={"relative flex size-full min-h-screen py-24"}>
    <SectionScaleRotate
      className={cn(
        "sticky top-0 flex h-[100dvh] flex-col items-start justify-center overflow-hidden bg-background pb-[10dvh]",
        // 'relative size-full min-h-screen py-24 flex'
      )}
    >

      <motion.div
        className={
          "hover-mask-circle flex size-full items-center justify-start bg-primary-200 py-48 text-foreground"
        }
        animate={{
          WebkitMaskPosition: `${smoothMouse.x.get() - size / 2}px ${smoothMouse.y.get() - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <Text
          data-hover={CursorActionType.HIDE}
          className={cn(
            "max-w-[900px] px-[4%] py-[36px] xl:text-[80px]",
            titleVariants({
              type: "h1",
              size: "h1",
              weight: "normal",
              className: textClassNames,
            }),
            textClassNames,
          )}
          style={{ height: textHeight ?? "auto" }}
        >
          {t("headingTextMasked")}
        </Text>
      </motion.div>

      <div
        className={cn(
          "flex size-full justify-start text-foreground-muted py-48",
          textClassNames,
        )}
      >
        <Title
          data-hover={CursorActionType.HIDE}
          ref={baseTextRef}
          weight={"normal"}
          type={"h1"}
          size={"h1"}
          className={cn("max-w-[900px] px-[4%] py-[36px] xl:text-[80px]", textClassNames)}
        >
          {t("headingText")}
        </Title>
      </div>

      <MagneticWrapper
        className={"absolute bottom-16 right-16 flex items-center justify-center p-0"}
      >
        <CtaCircle>
          <Image
            src={ReadingGif}
            alt={"Reading cat"}
            width={250}
            height={250}
            loading={"lazy"}
            className={"z-50 size-[150px] rounded-full object-cover"}
          />
        </CtaCircle>
      </MagneticWrapper>
      {/* </div> */}
    </SectionScaleRotate >

  );
};
