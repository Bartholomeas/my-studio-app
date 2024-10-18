"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@/components/common/ui/button";

import { Logo } from "@/components/common/special/logo";
import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";
import { APP_ROUTES } from "@/misc/routes";

import { HeaderButton } from "./header-button";

const Nav = dynamic(() => import("./nav/nav").then((res) => res.Nav));

export const Header = () => {
  const t = useTranslations("nav");

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const router = useRouter();

  const handleContactClick = () => {
    router.push(APP_ROUTES.contact.href);
  };

  return (
    <nav
      className={
        "container fixed inset-x-0 top-0 z-50 mx-auto flex items-center justify-between py-2"
      }
    >
      <Logo className={"w-20"} />

      <div className={"flex items-center gap-2"}>
        <MagneticWrapper noPadding>
          <Button
            variant={'link'}
            withIcon
            onClick={handleContactClick}
            aria-label={t('contactCta')}
          >
            {t('contactCta')}
          </Button>
        </MagneticWrapper>
        <HeaderButton isActive={isActive} toggleMenu={toggleMenu} />
      </div>
      <AnimatePresence mode={"wait"}>{isActive && <Nav />}</AnimatePresence>
    </nav>
  );
};
