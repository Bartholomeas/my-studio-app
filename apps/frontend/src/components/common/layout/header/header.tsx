'use client';


import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { type ClassValue } from "clsx";
import { AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

const Nav = dynamic(() => import("./nav/nav").then(res => res.Nav));


const burgerPseudoElements = (pseudoelement: 'before' | 'after'): ClassValue => `${pseudoelement}:relative ${pseudoelement}:m-auto ${pseudoelement}:block ${pseudoelement}:h-px ${pseudoelement}:w-2/5 ${pseudoelement}:bg-white ${pseudoelement}:transition-transform
      ${pseudoelement}:duration-300 ${pseudoelement}:content-['']`;

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => { setIsActive(prev => !prev); };

  return (<>
    <div className={"p-md fixed right-4 top-4 z-50"}>
      <div onClick={toggleMenu} className={'flex size-14 cursor-pointer items-center justify-center rounded-full bg-primary'}>
        <div className={cn('w-full',
          burgerPseudoElements('before'),
          burgerPseudoElements('after'),
          'before:top-[5px] after:top-[-5px]',
          { 'before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-[1px]': isActive })}
        ></div>
      </div>
    </div>

    <AnimatePresence mode={"wait"}><Nav /></AnimatePresence>
  </>
  );
};

// export const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setScrolled(latest > 800 ? true : false);
//   });

//   return (
//     <nav className={cn("fixed inset-x-0 top-0 z-50 py-2 w-full transition-all duration-300 ease-out", { "py-6": scrolled })}>
//       <div className="container relative mx-auto flex items-center justify-between">
//         <NavMenuDesktop className="flex-1 max-md:hidden" />
//         <Logo className="md:absolute md:left-1/2 md:-translate-x-1/2" />
//         <div className="flex flex-1 justify-end max-md:hidden">
//           <Button variant={'link'}>Get in touch</Button>
//         </div>
//         <NavMenuMobile className="md:hidden" />
//       </div>
//     </nav>
//   );
// };

// const NavLinks = ({ className }: { className?: string; }) => {
//   return (
//     <ul className={cn("flex items-center gap-2", className)}>
//       <li>
//         <MagneticWrapper className={"p-0"}>
//           <Link href={"/"}>O nas</Link>
//         </MagneticWrapper>
//       </li>
//       <li>
//         <MagneticWrapper className={"p-0"}>
//           <Link href={"/"}>Kontakt</Link>
//         </MagneticWrapper>
//       </li>
//       <li>
//         <MagneticWrapper className={"p-0"}>
//           <Link href={"/"}>Kontakt</Link>
//         </MagneticWrapper>
//       </li>
//       <li>
//         <MagneticWrapper className={"p-0"}>
//           <Link href={"/"}>Kontakt</Link>
//         </MagneticWrapper>
//       </li>
//     </ul>
//   );
// };


// const NavMenuMobile = ({ className }: { className?: string; }) => {
//   return (
//     <Button
//       size={'icon'}
//       variant={'ghost'}
//       className={cn("p-0 text-foreground", className)}
//       data-cursor-type={"menu"}>
//       <motion.div>
//         <Menu />
//       </motion.div>
//     </Button>
//   );
// };

// const NavMenuDesktop = ({ className }: { className?: string; }) => <NavLinks className={className} />;