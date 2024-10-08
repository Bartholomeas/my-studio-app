import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Text } from "../text";
import { Title } from "../title";

type LogoProps = {
  className?: ComponentProps<"div">["className"];
};
export const Logo = ({ className }: LogoProps) => {
  return (
    <Title className={cn("self-center text-xl p-0 leading-none font-bold", className)}>NN Studio<Text size={'h1'} as={"span"} color={'primary'}>.</Text></Title>
  );
};
