import { type ReactNode } from "react";

import { Title } from "../common/title";

interface TimelineBoxProps {
  title: string,
  content: ReactNode;
}

export const TimelineBox = ({ title, content }: TimelineBoxProps) => {
  return (
    <div
      className={"flex justify-start pt-10 md:gap-10 md:pt-40"}
    >
      <div className={"sticky top-40 z-20 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"}>
        <div className={"absolute left-3 z-10 flex size-10 items-center justify-center rounded-full bg-background dark:bg-black md:left-3"}>
          <div className={"size-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800"} />
        </div>
        <Title
          type={"h3"}
          className={"hidden text-xl font-bold md:block md:pl-20"}
        >
          {title}
        </Title>
      </div>
      <div className={"relative w-full pl-20 pr-4 md:pl-4"}>
        <Title
          type={"h3"}
          className={"mb-4 block text-left text-2xl font-bold md:hidden"}>
          {title}
        </Title>
        {content}{" "}
      </div>
    </div>
  );
};
