'use client';


import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { type ClassValue } from "clsx";
import { AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

const Nav = dynamic(() => import("./nav/nav").then(res => res.Nav));


const burgerPseudoElements = (pseudoelement: 'before' | 'after'): ClassValue => `${pseudoelement}:relative ${pseudoelement}:m-auto ${pseudoelement}:block ${pseudoelement}:h-px ${pseudoelement}:w-2/5 ${pseudoelement}:bg-white ${pseudoelement}:transition-transform
      ${pseudoelement}:duration-300 ${pseudoelement}:content-[''] ${pseudoelement}:rounded-full`;

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => { setIsActive(prev => !prev); };

  return (<>
    <div className={"p-md fixed right-4 top-4 z-50"}>
      <div onClick={toggleMenu} className={'m-[20px] flex size-14 cursor-pointer items-center justify-center rounded-full bg-primary'}>
        <div className={cn('w-full',
          burgerPseudoElements('before'),
          burgerPseudoElements('after'),
          'before:top-[5px] after:top-[-5px]',
          { 'before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-[1px]': isActive })}
        ></div>
      </div>
    </div>
    <AnimatePresence mode={"wait"}>
      <Nav />
    </AnimatePresence>
  </>
  );
};
