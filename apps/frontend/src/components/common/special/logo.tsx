import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Title } from "../title";

type LogoProps = {
  className?: ComponentProps<"div">["className"];
};
export const Logo = ({ className }: LogoProps) => {
  return (
    <Title className={cn("self-center text-2xl font-bold", className)}>Nic Nudnego Studio</Title>
  );
};
