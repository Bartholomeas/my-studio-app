"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";


import { Button } from "@/features/common/components/ui/button";

import { Logo } from "@/features/common/components/special/logo";
import { MagneticWrapper } from "@/features/common/components/special/magnetic-wrapper";
import { textVariants } from "@/features/common/components/text";
import { APP_ROUTES } from "@/misc/routes";

import { HeaderButton } from "./header-button";
import { NAV_LINKS } from "./nav/nav.constants";

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

      <div className={"flex flex-row items-center gap-2"}>
        {NAV_LINKS.map((link) => (
          <Link
            key={`navLink-${link?.label || "default"}-${link?.href || "/"}`}
            href={link?.href || "/apps/frontend/public"}
            className={textVariants({
              size: "lg",
              weight: "normal",
              className: "text-foreground",
            })}
          >
            {link?.label}
          </Link>
        ))}
      </div>
      <Logo className={"w-20"} />
      <div className={"flex items-center gap-2"}>
        <MagneticWrapper noPadding>
          <Button
            variant={"link"}
            withIcon
            onClick={handleContactClick}
            aria-label={t("contactCta")}
          >
            {t("contactCta")}
          </Button>
        </MagneticWrapper>
        <HeaderButton isActive={isActive} toggleMenu={toggleMenu} />
      </div>
      <AnimatePresence mode={"wait"}>{isActive && <Nav />}</AnimatePresence>
    </nav>
  );
};
