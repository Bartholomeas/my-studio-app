'use client';

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import { Logo } from "@/components/common/special/logo";

import { HeaderButton } from "./header-button";

const Nav = dynamic(() => import("./nav/nav").then(res => res.Nav));

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => { setIsActive(prev => !prev); };

  return (<nav className={"container fixed inset-x-0 top-0 z-50 mx-auto flex items-center justify-between py-2"}>
    <Logo />

    <HeaderButton isActive={isActive} toggleMenu={toggleMenu} />
    <AnimatePresence mode={"wait"} >
      {isActive && <Nav />}
    </AnimatePresence>
  </nav>
  );
};
