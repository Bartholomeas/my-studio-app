"use client";

import { motion, type Variants } from "framer-motion";

import { EASE_TRANSITION } from "../../../../../../misc/animations";

const initialPath = `M100 0 L200 0 L200 ${window?.innerHeight} L100 ${window?.innerHeight} Q-100 ${window?.innerHeight / 2} 100 0`;
const targetPath = `M100 0 L200 0 L200 ${window?.innerHeight} L100 ${window?.innerHeight} Q100 ${window?.innerHeight / 2} 100 0`;

const curve: Variants = {
	initial: {
		d: initialPath,
	},
	enter: {
		d: targetPath,
		transition: { duration: 0.8, ease: EASE_TRANSITION },
	},
	exit: {
		d: initialPath,
		transition: { duration: 0.6, ease: EASE_TRANSITION },
	},
};

export const NavCurve = () => (
	<svg className={"absolute left-[-99px] top-0 h-full w-[100px] fill-foreground stroke-none"}>
		<motion.path variants={curve} initial={"initial"} animate={"enter"} exit={"exit"} />
	</svg>
);
