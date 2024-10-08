'use client';

import { type ComponentProps, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import { motion } from "framer-motion";

import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";
import { useMousePositionContext } from "@/components/common/special/cursor-handler/use-mouse-position-context";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { HeroBottomBox } from "./hero-bottom-box";

const textClassNames: ComponentProps<'div'>['className'] = 'text-3xl md:text-6xl';

export const HeroSection = () => {
  const { smoothMouse, isHovering, setIsHovering } = useMousePositionContext();
  const baseTextRef = useRef<HTMLDivElement | null>(null);

  const [textHeight, setTextHeight] = useState<number | null>(null);

  const calculateTextHeight = useCallback(() => {
    if (baseTextRef?.current) {
      setTextHeight(baseTextRef.current.getBoundingClientRect().height);
    }
  }, []);

  useLayoutEffect(() => {
    calculateTextHeight();
    window.addEventListener('resize', calculateTextHeight);

    return () => {
      window.removeEventListener('resize', calculateTextHeight);
    };
  }, [calculateTextHeight]);

  const size = useMemo(() => isHovering ? 400 : 0, [isHovering]);

  const onMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, [setIsHovering]);

  const onMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, [setIsHovering]);

  return (
    <SectionScaleRotate
      className={cn("sticky overflow-hidden top-0 flex h-screen flex-col items-start justify-center bg-background pb-[10vh]", textClassNames)}>
      <motion.div
        className={"hover-mask-circle flex size-full cursor-default items-center justify-center bg-primary-200 text-foreground"}
        animate={{
          WebkitMaskPosition: `${smoothMouse.x.get() - (size / 2)}px ${smoothMouse.y.get() - (size / 2)}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <Text
          className={cn("px-[4%] py-[36px]", textClassNames)}
          style={{ height: textHeight ?? 'auto' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Kod, kawa i ołówek — z tego robimy cuda! Wyniesiemy Twoją wizję na nowy poziom. 😎
        </Text>
      </motion.div>

      <div
        className={cn("flex flex-col size-full cursor-default items-star justify-center text-foreground-muted", textClassNames)}>
        <Text
          ref={baseTextRef}
          className={cn("px-[4%] py-[36px]", textClassNames)}
        >
          Dopasowane rozwiązania dla Twoich cyfrowych potrzeb.
          <span className={"text-foreground-light"}> Gotowy na coś wyjątkowego?</span>
        </Text>
      </div>

      <HeroBottomBox />
    </SectionScaleRotate>
  );
};
