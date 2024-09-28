"use client";

import React, { useCallback, useEffect } from "react";

import { motion, type SpringOptions, useMotionValue, useSpring } from "framer-motion";

const smoothMouseConfig: SpringOptions = {
	damping: 20,
	stiffness: 300,
	mass: 0.5,
};

export const CursorHandler = () => {
	const cursorSize = 15;

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothMouse = {
		x: useSpring(mouse.x, smoothMouseConfig),
		y: useSpring(mouse.y, smoothMouseConfig),
	};

	const manageMouseMove = useCallback(
		(e: globalThis.MouseEvent) => {
			const { clientX, clientY } = e;
			mouse.x.set(clientX - cursorSize / 2);
			mouse.y.set(clientY - cursorSize / 2);
		},
		[mouse.x, mouse.y],
	);

	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
		console.log("Hisziki");
		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
		};
	}, [manageMouseMove]);

	return (
		<motion.span
			className="pointer-events-none fixed h-[15px] w-[15px] rounded-full bg-black"
			style={{ left: smoothMouse.x, top: smoothMouse.y }}
		></motion.span>
	);
};
