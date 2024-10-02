'use client';

import { useState } from "react";

import { usePathname } from "next/navigation";

import { motion } from 'framer-motion';

import { menuSlide } from "../header.animations";
import { NavCurve } from "./nav-curve";
import { NavFooter } from "./nav-footer";
import { NavLink } from "./nav-link";
import { NAV_LINKS } from "./nav.constants";

export const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const selectIndicator = () => { setSelectedIndicator(pathname); };

  return (
    <motion.nav
      variants={menuSlide}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      className={"fixed inset-y-0 right-0 z-20 h-screen bg-foreground text-background"}>
      <div className={"flex h-full flex-col justify-between p-[64px]"}>
        <div onMouseLeave={selectIndicator} className={"mt-24 flex flex-col gap-10 text-xl"}>
          <div className={"text-md mb-4 border-b-2 border-white"}>
            <p>NAIGAVTION</p>
          </div>
          {NAV_LINKS.map((link, index) => <NavLink
            isActive={selectedIndicator === link.href}
            setSelectedIndicator={setSelectedIndicator}
            key={`navigationLink-${link.label}-${link.href}`}
            linkData={{ ...link, index }}
          />
          )}
        </div>
        <NavFooter />
      </div>
      <NavCurve />
    </motion.nav>
  );
};
