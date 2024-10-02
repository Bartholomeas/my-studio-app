'use client';

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

const Nav = dynamic(() => import("./nav/nav").then(res => res.Nav));

const burgerPseudoElements = (pseudoelement: 'before' | 'after'): ClassValue => `${pseudoelement}:absolute ${pseudoelement}:left-1/2 ${pseudoelement}:-translate-x-1/2 ${pseudoelement}:block ${pseudoelement}:h-[2px] ${pseudoelement}:w-2/5 ${pseudoelement}:bg-black ${pseudoelement}:transition-all ${pseudoelement}:duration-300 ${pseudoelement}:content-[""] ${pseudoelement}:rounded-full ${pseudoelement}:z-[150]`;

const beforeClasses = burgerPseudoElements('before');
const afterClasses = burgerPseudoElements('after');

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => { setIsActive(prev => !prev); };

  return (<>
    <Button
      variant={"ghost"}
      className={"fixed right-2 top-2 z-50 size-12 rounded-full p-0"}
      aria-label={isActive ? "Close menu" : "Open menu"}
      aria-expanded={isActive}
      aria-controls={"navigation-menu"}
    >
      <motion.div
        onClick={toggleMenu}
        className={'flex size-full cursor-pointer items-center justify-center rounded-full bg-primary'}
        whileTap={{ scale: 0.95 }}
        role={"presentation"}
      >
        <span
          className={cn(
            'w-full h-full relative',
            beforeClasses,
            afterClasses,
            'before:top-[calc(50%-5px)] after:top-[calc(50%+5px)]',
            { 'before:rotate-45 before:top-1/2 after:-rotate-45 after:top-1/2': isActive }
          )}
          aria-hidden={"true"}
        ></span>
      </motion.div>
    </Button>
    <AnimatePresence mode={"wait"}>
      {isActive && <Nav />}
    </AnimatePresence>
  </>
  );
};
