import { type Variants } from "framer-motion";

import { EASE_TRANSITION } from "@/misc/animations";

export const menuSlide: Variants = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: EASE_TRANSITION } },
	exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: EASE_TRANSITION } },
};

export const slide: Variants = {
	initial: { x: 80 },
	enter: (i: number) => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: EASE_TRANSITION,
			delay: 0.05 * i,
		},
	}),
	exit: (i: number) => ({
		x: 80,
		transition: {
			duration: 0.8,
			ease: EASE_TRANSITION,
			delay: 0.05 * i,
		},
	}),
};

export const scale: Variants = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};
