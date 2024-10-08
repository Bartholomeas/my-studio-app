import React from "react";

import { cn } from "@/lib/utils";

import { Title } from "../common/title";

export interface TimelineBoxProps {
	title: string;
	content: React.ReactNode;
	icon?: React.ReactElement;
}

export const TimelineBox = ({ title, content, icon: Icon }: TimelineBoxProps) => {
	return (
		<div className={"flex min-h-[400px] justify-start pt-10 md:gap-10 md:pt-32"}>
			<div
				className={
					"sticky top-40 z-20 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
				}
			>
				<div
					className={cn(
						"absolute z-10 flex size-14 items-center justify-center rounded-full bg-background dark:bg-black md:left-3",
						Icon ? "left-1.5 size-12" : "left-3 size-10",
					)}
				>
					{React.isValidElement(Icon) ? (
						React.cloneElement(Icon as React.ReactElement, {
							className: cn("text-primary-600 flex size-12 items-center justify-center"),
						})
					) : (
						<div
							className={
								"flex size-4 items-center justify-center rounded-full border border-neutral-300 bg-neutral-200"
							}
						></div>
					)}
				</div>
				<Title type={"h3"} className={"hidden font-bold md:block md:pl-20"}>
					{title}
				</Title>
			</div>
			<div className={"relative w-full pl-20 pr-4 md:pl-4"}>
				<Title type={"h3"} className={"mb-4 block text-left text-2xl font-bold md:hidden"}>
					{title}
				</Title>
				{content}{" "}
			</div>
		</div>
	);
};
