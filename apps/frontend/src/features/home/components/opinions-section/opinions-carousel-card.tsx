import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Card } from "@/features/common/components/ui/card";

import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import {
  OpinionAuthor,
  type OpinionAuthorProps,
} from "@/features/home/components/opinions-section/opinion-author";

import { type TeamMember } from "./opinions-section.types";

interface OpinionCardProps extends TeamMember {
  className?: ComponentProps<"div">["className"];
  author: OpinionAuthorProps;
}

export const OpinionsCarouselCard = ({ author, className }: OpinionCardProps) => {
  return (
    <Card
      variant={"default"}
      padding={"lg"}
      className={cn(
        "pointer-events-none relative flex h-full w-full select-none flex-col justify-center border-none bg-white",
        className,
      )}
    >
      <div className={"flex flex-col gap-2"}>
        <Title type={"h3"} size={"h4"}>
          Carl Johnson
        </Title>
        <Text
          size={"h5"}
          weight={"medium"}
          color={"muted"}
          className={"text-justify leading-loose"}
        >
          KurdeStudio succesfully delivered the project, meeting all the requirements. The team
          conducted regular meetings to review progress and plan next steps. Despite the time
          difference, they were also able to adjust to our time zone.
        </Text>
        <OpinionAuthor {...author} />
      </div>
    </Card>
  );
};
