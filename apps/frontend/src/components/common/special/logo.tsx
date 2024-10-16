"use client";

import { type ComponentProps } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/misc/constants";

import { textVariants } from "../text";

const logoContent = (
  <div className={"flex items-center gap-1"}>
    {COMPANY_NAME}
    <span className={"size-1.5 rounded-full bg-primary-700"} />
  </div>
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
