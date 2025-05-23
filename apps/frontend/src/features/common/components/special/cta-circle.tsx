"use client";

import { type ComponentProps } from "react";

import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";


type ArrowDirection = "left" | "right" | "up" | "down";
const ARROWS: Record<ArrowDirection, LucideIcon> = {
  left: ArrowLeftIcon,
  right: ArrowRightIcon,
  up: ArrowUpIcon,
  down: ArrowDownIcon,
};

interface CtaCircleProps
  extends Pick<ComponentProps<"button">, "onMouseEnter" | "onMouseLeave" | "onClick"> {
  className?: string;
  text?: string;
  arrowDirection?: ArrowDirection;
  arrowClassName?: ComponentProps<"div">["className"];
  children?: React.ReactNode;
}

export const CtaCircle = ({
  className,
  text,
  arrowDirection = "left",
  arrowClassName,
  children,
  ...props
}: CtaCircleProps) => {
  const t = useTranslations("/.heroSection");
  const ArrowIcon = ARROWS[arrowDirection];

  if (!text) text = t("scrollCTA");

  return (
    <motion.button
      className={cn(
        "group relative grid aspect-square size-[120px] place-content-center rounded-full transition-colors duration-700 ease-out md:size-[200px] hover:cursor-none",
        className,
      )}
      {...props}
    >
      {children
        ? <span className={"relative z-10 text-foreground transition-all duration-700 ease-out group-hover:rotate-45"}>{children}</span>
        : <ArrowIcon
          size={40}
          className={cn(
            "relative z-10 text-foreground transition-all duration-700 ease-out group-hover:-rotate-90",
            arrowClassName,
          )}
        />
      }
      <span
        className={
          "duration-600 pointer-events-none absolute inset-0 z-0 aspect-square scale-0 rounded-full bg-primary transition-transform ease-out group-hover:scale-100"
        }
      />
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width={200}
        height={200}
        className={"pointer-events-none absolute z-10"}
      >
        <path
          id={"circlePath"}
          d={"M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"}
          fill={"none"}
        />
        <text>
          <textPath
            href={"#circlePath"}
            fill={"foreground"}
            className={
              "fill-foreground text-lg font-light uppercase transition-opacity duration-700 ease-out group-hover:opacity-100"
            }
            startOffset={"0%"}
            textLength={"300%"}
            spacing={"auto"}
            method={"align"}
            lengthAdjust={"spacing"}
          >
            {text}
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  );
};
