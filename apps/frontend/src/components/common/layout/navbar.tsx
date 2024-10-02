'use client';

import { useState } from "react";

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Logo } from "../special/logo";
import { MagneticWrapper } from "../special/magnetic-wrapper";
import { Button } from "../ui/button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 800 ? true : false);
  });

  return (
    <nav className={cn("fixed inset-x-0 top-0 z-50 py-2 w-full transition-all duration-300 ease-out", { "py-6": scrolled })}>
      <div className="container relative mx-auto flex items-center justify-between">
        <NavMenuDesktop className="flex-1 max-md:hidden" />
        <Logo className="md:absolute md:left-1/2 md:-translate-x-1/2" />
        <div className="flex flex-1 justify-end max-md:hidden">
          <Button variant={'link'}>Get in touch</Button>
        </div>
        <NavMenuMobile className="md:hidden" />
      </div>
    </nav>
  );
};

const NavLinks = ({ className }: { className?: string; }) => {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      <li>
        <MagneticWrapper className="p-0">
          <Link href="/">O nas</Link>
        </MagneticWrapper>
      </li>
      <li>
        <MagneticWrapper className="p-0">
          <Link href="/">Kontakt</Link>
        </MagneticWrapper>
      </li>
      <li>
        <MagneticWrapper className="p-0">
          <Link href="/">Kontakt</Link>
        </MagneticWrapper>
      </li>
      <li>
        <MagneticWrapper className="p-0">
          <Link href="/">Kontakt</Link>
        </MagneticWrapper>
      </li>
    </ul>
  );
};


const NavMenuMobile = ({ className }: { className?: string; }) => {
  return (
    <Button
      size={'icon'}
      variant={'ghost'}
      className={cn("p-0 text-foreground", className)}
      data-cursor-type="menu">
      <motion.div>
        <Menu />
      </motion.div>
    </Button>
  );
};

const NavMenuDesktop = ({ className }: { className?: string; }) => <NavLinks className={className} />;