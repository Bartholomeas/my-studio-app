'use client';

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

const Nav = dynamic(() => import("./nav/nav").then(res => res.Nav));

const beforeClasses = 'before:absolute before:left-1/2 before:-translate-x-1/2 before:block before:h-[2px] before:w-2/5 before:bg-black before:transition-all before:duration-300 before:content-[""] before:rounded-full before:z-[150]';

const afterClasses = 'after:absolute after:left-1/2 after:-translate-x-1/2 after:block after:h-[2px] after:w-2/5 after:bg-black after:transition-all after:duration-300 after:content-[""] after:rounded-full after:z-[150]';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => { setIsActive(prev => !prev); };

  return (<>
    <Button
      onClick={toggleMenu}
      variant={"ghost"}
      className={"fixed right-2 top-2 z-50 size-12 rounded-full bg-primary p-0"}
      aria-label={isActive ? "Close menu" : "Open menu"}
      aria-expanded={isActive}
      aria-controls={"navigation-menu"}
    >
      <motion.div

        className={'flex size-full cursor-pointer items-center justify-center'}
        whileTap={{ scale: 0.9 }}
        role={"presentation"}
      >
        <span
          className={cn(
            'w-full h-full relative before:top-[calc(50%-3px)] after:top-[calc(50%+3px)]',
            beforeClasses,
            afterClasses,
            { 'before:rotate-45 before:top-1/2 after:-rotate-45 after:top-1/2': isActive }
          )}
          aria-hidden={"true"}
        ></span>
      </motion.div>
    </Button>
    <AnimatePresence mode={"wait"} >
      {isActive && <Nav />}
    </AnimatePresence>
  </>
  );
};
