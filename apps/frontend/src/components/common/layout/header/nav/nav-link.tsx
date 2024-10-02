'use client';

import Link from "next/link";

import { motion } from 'framer-motion';

import { scale, slide } from "../header.animations";

type LinkData = {
  href: string,
  label: string,
  index: number;
};

type NavLinkProps = {
  linkData: LinkData,
  setSelectedIndicator: (href: string) => void;
  isActive?: boolean;
};
export const NavLink = ({ linkData: { href, label, index }, setSelectedIndicator, isActive = false }: NavLinkProps) => {
  const setIndicator = () => {
    setSelectedIndicator(href);
  };

  return (
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
        animate={isActive ? 'open' : 'closed'} />
      <Link
        className={"text-[48px] text-background"}
        href={href}
      >
        {label}
      </Link>
    </motion.div >
  );
};
