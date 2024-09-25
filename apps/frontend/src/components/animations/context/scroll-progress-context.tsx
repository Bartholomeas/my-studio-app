"use client";

import { createContext, useContext } from "react";

import { type MotionValue } from "framer-motion";

type ScrollProgressContextProps = {
	scrollYProgress: MotionValue<number>;
};

const ScrollProgressContext = createContext<ScrollProgressContextProps | undefined>(undefined);

const useScrollProgressContext = () => {
	const context = useContext(ScrollProgressContext);
	if (!context) {
		throw new Error("useScrollProgressContext must be used within a HomepageMainWrapper");
	}
	return context;
};

export { ScrollProgressContext, useScrollProgressContext };
