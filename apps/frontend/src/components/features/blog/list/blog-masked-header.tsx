'use client';

import { type ComponentProps, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { CursorActionType } from "@/components/common/special/cursor-handler/cursor-handler.types";
import { useMousePositionContext } from "@/components/common/special/cursor-handler/use-mouse-position-context";
import { Text } from "@/components/common/text";
import { Title, titleVariants } from "@/components/common/title";

import ReadingGif from "../../../../../public/reading-cat.gif";

const textClassNames: ComponentProps<"div">["className"] = "text-3xl md:text-6xl";

export const BlogMaskedHeader = () => {
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
    <div className={"relative flex size-full lg:max-h-[50vh]"}>
      <div className={"container absolute inset-0 flex h-full items-center justify-end"}>
        <Image
          src={ReadingGif}
          alt={"Reading cat"}
          width={250}
          height={250}
          loading={"lazy"}
          className={"h-[150px] w-[250px] rounded-full object-cover"}
        />
      </div>
      <motion.div
        className={
          "hover-mask-circle flex size-full justify-start bg-primary-200 py-48 text-foreground"
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
    </div>

  );
};
