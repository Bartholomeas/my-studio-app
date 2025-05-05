"use client";

import { type ComponentProps } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { COMPANY_NAME } from "@/misc/constants";

import LogoSvg from "../../../../../public/logo.svg";
import { textVariants } from "../text";

const logoContent = (
	<Image src={LogoSvg} alt={`${COMPANY_NAME} logo`} className={"w-full object-contain"} />
);

type LogoProps = {
	className?: ComponentProps<"div">["className"];
	href?: string;
};

export const Logo = ({ className, href = "/" }: LogoProps) => {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	const logoClasses = textVariants({
		className: cn("self-center leading-none", className),
		weight: "bold",
		size: "lg",
	});

	if (isHomePage)
		return (
			<div
				onClick={() => {
					window?.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}}
				className={cn(logoClasses, "cursor-pointer")}
			>
				{logoContent}
			</div>
		);

	return (
		<Link href={href} className={logoClasses}>
			{logoContent}
		</Link>
	);
};
