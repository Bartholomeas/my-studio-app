"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";
import { type AppLinkRoutes } from "@/misc/routes";

import { scale, slide } from "../header.animations";

type LinkData = {
  href: string;
  label: AppLinkRoutes;
  index: number;
};

type NavLinkProps = {
  linkData: LinkData;
  setSelectedIndicator: (href: string) => void;
  isActive?: boolean;
};
export const NavLink = ({
  linkData: { href, label, index },
  setSelectedIndicator,
  isActive = false,
}: NavLinkProps) => {
  const t = useTranslations('nav');

  const setIndicator = () => {
    setSelectedIndicator(href);
  };

  return (
    <MagneticWrapper springOpts={{ mass: 1, damping: 50, stiffness: 200 }} className={"p-0"}>
      <motion.div
        className={"relative flex items-center"}
        onMouseEnter={setIndicator}
        custom={index}
        variants={slide}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
      >
        <motion.span
          className={"absolute -left-8 size-4 rounded-full bg-background"}
          variants={scale}
          animate={isActive ? "open" : "closed"}
        />
        <Link className={"text-[48px] text-background"} href={href}>
          {t(label)}
        </Link>
      </motion.div>
    </MagneticWrapper>
  );
};
