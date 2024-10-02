import { type Variants } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

export const menuSlide: Variants = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: EASE } },
	exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: EASE } },
};

export const slide: Variants = {
	initial: { x: 80 },
	enter: (i: number) => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: EASE,
			delay: 0.05 * i,
		},
	}),
	exit: (i: number) => ({
		x: 80,
		transition: {
			duration: 0.8,
			ease: EASE,
			delay: 0.05 * i,
		},
	}),
};

export const scale: Variants = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};
