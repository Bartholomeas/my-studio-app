"use client";

import {
  type ComponentProps,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";
import { CursorActionType } from "@/components/common/special/cursor-handler/cursor-handler.types";
import { useMousePositionContext } from "@/components/common/special/cursor-handler/use-mouse-position-context";
import { Text } from "@/components/common/text";
import { Title, titleVariants } from "@/components/common/title";

import { HeroBottomBox } from "./hero-bottom-box";

const textClassNames: ComponentProps<"div">["className"] = "text-3xl md:text-6xl";

export const HeroSection = () => {
  const { smoothMouse, isHovering } = useMousePositionContext();

  const baseTextRef = useRef<HTMLDivElement | null>(null);

  const [textHeight, setTextHeight] = useState<number | null>(null);

  const t = useTranslations("/.heroSection");

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

  const size = useMemo(() => (isHovering ? 400 : 0), [isHovering]);

  return (
    <SectionScaleRotate
      className={cn(
        "sticky top-0 flex h-[100dvh] flex-col items-start justify-center overflow-hidden bg-background pb-[10dvh]",
        textClassNames,
      )}
    >
      <motion.div
        className={
          "hover-mask-circle flex size-full items-center justify-start bg-primary-200 text-foreground"
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
          "flex size-full items-center justify-start text-foreground-muted",
          textClassNames,
        )}
      >
        <Title
          data-hover={CursorActionType.HIDE}
          ref={baseTextRef}
          weight={"normal"}
          type={"h1"}
          className={cn("max-w-[900px] px-[4%] py-[36px] xl:text-[80px]", textClassNames)}
        >
          {t("headingText")}
          <span className={"text-foreground-light"}> {t("headingSubtext")}</span>
        </Title>
      </div>

      <HeroBottomBox />
    </SectionScaleRotate>
  );
};
