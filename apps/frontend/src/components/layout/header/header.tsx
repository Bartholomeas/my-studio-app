'use client';

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import { HeaderButton } from "./header-button";

const Nav = dynamic(() => import("./nav/nav").then(res => res.Nav));

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => { setIsActive(prev => !prev); };

  return (<>
    <HeaderButton isActive={isActive} toggleMenu={toggleMenu} />
    <AnimatePresence mode={"wait"} >
      {isActive && <Nav />}
    </AnimatePresence>
  </>
  );
};
