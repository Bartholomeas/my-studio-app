"use client";

import { type ComponentProps, useRef } from "react";

import {
	motion,
	type MotionProps,
	type SpringOptions,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { cn } from "@/lib/utils";

type MagneticWrapperProps = MotionProps & {
	className?: ComponentProps<"div">["className"];
	springOpts?: SpringOptions;
};

export const MagneticWrapper = ({
	children,
	className,
	springOpts = { mass: 3, stiffness: 400, damping: 50 },
	...props
}: MagneticWrapperProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x, springOpts);
	const ySpring = useSpring(y, springOpts);

	const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;

		const { height, width, left, top } = containerRef?.current?.getBoundingClientRect() ?? {
			height: 0,
			width: 0,
			left: 0,
			top: 0,
		};
		const { clientX, clientY } = e;

		const middleX = (clientX - (left + width / 2)) * 0.5;
		const middleY = (clientY - (top + height / 2)) * 0.5;

		x.set(middleX);
		y.set(middleY);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return (
		<motion.div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform }}
			transition={{ type: "spring", stiffness: 150, damping: 15 }}
			className={cn(
				"relative flex h-fit w-fit items-center justify-center p-[24px] duration-500 ease-out",
				className,
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
};
