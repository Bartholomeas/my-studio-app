"use client";

import { type ComponentProps } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { slideUp } from "@/misc/animations";

import { Text } from "../text";

type RevealingTextProps = {
	text: string;
	isInView: boolean;
	className?: ComponentProps<"section">["className"];
};
export const RevealingText = ({ text = "", isInView = false, className }: RevealingTextProps) => {
	return (
		<Text className={"m-0"}>
			{text.split(" ").map((word, index) => (
				<Text
					as={"span"}
					size={"h1"}
					key={`revealinText-${word}-${index}`}
					className={cn("relative mr-[5px] inline-flex overflow-hidden", className)}
				>
					<motion.span
						key={`revealinTextSpan-${word}-${index}`}
						variants={slideUp}
						custom={index}
						animate={isInView ? "open" : "closed"}
					>
						{word}
					</motion.span>
				</Text>
			))}
		</Text>
	);
};
