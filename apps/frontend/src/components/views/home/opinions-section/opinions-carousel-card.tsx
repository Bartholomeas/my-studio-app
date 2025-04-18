import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { Card } from "@/components/common/ui/card";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { OpinionAuthor, type OpinionAuthorProps } from "@/components/views/home/opinions-section/opinion-author";

import { type TeamMember } from "./opinions-section.types";

interface OpinionCardProps extends TeamMember {
  className?: ComponentProps<"div">["className"];
  author: OpinionAuthorProps;
}

export const OpinionsCarouselCard = ({ author, className, }: OpinionCardProps) => {
  return (
    <Card
      variant={"default"}
      padding={'lg'}
      className={cn("relative h-full w-full flex flex-col justify-center background border-none pointer-events-none select-none", className)}
    >
      <div className={"flex flex-col gap-2"}>
        <Title type={"h3"} size={'h4'}>
          Carl Johnson
        </Title>
        <Text size={"h5"} weight={'medium'} color={'muted'}
          className={"text-justify leading-loose"}>
          KurdeStudio succesfully delivered the project, meeting all the requirements. The team conducted
          regular meetings to review progress and plan next steps. Despite the time difference, they were also
          able to adjust to our time zone.
        </Text>
        <OpinionAuthor {...author} />
      </div>
    </Card>
  );
};



