"use client";

import { useState } from "react";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Text } from "@/components/common/text";

import { menuSlide } from "../header.animations";
import { NavCurve } from "./nav-curve";
import { NavFooter } from "./nav-footer";
import { NAV_LINKS } from "./nav.constants";

const NavLink = dynamic(() => import("./nav-link").then((res) => res.NavLink));

export const Nav = () => {
	const pathname = usePathname();
	const t = useTranslations("nav");
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	const selectIndicator = () => {
		setSelectedIndicator(pathname);
	};

	return (
		<motion.nav
			variants={menuSlide}
			initial={"initial"}
			animate={"enter"}
			exit={"exit"}
			className={
				"fixed inset-y-0 right-0 z-50 h-screen bg-foreground text-background max-sm:w-full"
			}
		>
			<div className={"flex h-full flex-col justify-between p-[48px]"}>
				<div onMouseLeave={selectIndicator} className={"mt-24 flex flex-col gap-4 text-xl"}>
					<div className={"text-md mb-4 border-b-2 border-white"}>
						<Text color={"background"}>{t("title")}</Text>
					</div>
					{NAV_LINKS.map((link, index) => (
						<NavLink
							isActive={selectedIndicator === link?.href}
							setSelectedIndicator={setSelectedIndicator}
							key={`navigationLink-${link?.label || "default"}-${link?.href || "/"}`}
							linkData={{
								...link,
								href: link?.href || "/",
								label: link?.label || "home",
								index,
							}}
						/>
					))}
				</div>
				<NavFooter />
			</div>
			<NavCurve />
		</motion.nav>
	);
};
