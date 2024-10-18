import { type ComponentProps, type ReactNode } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { Card } from "@/components/common/ui/card";

import { type TeamMember } from "./team-section.types";

interface TeamCardProps extends TeamMember {
  isLeft: boolean;
  className?: ComponentProps<"div">["className"];
}

export const TeamMemberCarouselCard = ({ isLeft = false, image, className, ...props }: TeamCardProps) => {
  console.log(props);

  return (
    <Card
      padding={'none'}
      shape={!isLeft ? 'skewedLeft' : 'skewedRight'}
      className={cn("relative aspect-square w-full border-background-light", className)}
    >
      <Image
        src={image}
        loading={"lazy"}
        placeholder={"blur"}
        alt={"Team member"}
        fill
        className={"object-cover"}
      />
    </Card>
  );
};


interface TeamMemberPlaceholderProps extends Pick<TeamCardProps, 'isLeft' | 'className'> {
  children?: ReactNode;
}

export const TeamMemberPlaceholder = ({ className, isLeft, children }: TeamMemberPlaceholderProps) => {
  return (
    <Card
      // padding={'none'}
      shape={!isLeft ? 'skewedLeft' : 'skewedRight'}
      className={cn("relative flex items-center justify-center aspect-square w-full border-background-light", className)}
    >
      {children}
    </Card>
  );
};
