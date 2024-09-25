"use client";

import { ReactLenis } from "lenis/react";

export const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.2,
				easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
				touchMultiplier: 2,
			}}
		>
			{children}
		</ReactLenis>
	);
};
