import Image from "next/image";

import { SectionScaleRotate } from "@/components/animations/section-scale-rotate";

import Pic1 from "./../../../../public/pic1.webp";

export const LandingSection = () => {
	return (
		<SectionScaleRotate className="sticky top-0 flex h-screen flex-col items-center justify-center bg-[#ff991c] pb-[10vh] text-[3.5vw] text-white">
			<p>Scroll perspective</p>
			<div className="flex gap-4">
				<p>Section</p>
				<div className="relative w-[12.5vw]">
					<Image src={Pic1} alt="BackgroundImage" fill placeholder="blur" />
				</div>
				<p>transition</p>
			</div>
		</SectionScaleRotate>
	);
};
