import Image from "next/image";

import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";

import Pic2 from "./../../../../public/pic2.jpg";

export const AboutSection = () => {
	return (
		<SectionScaleRotate
			scaleOpts={{ inputRange: [0, 1], outputRange: [0.8, 1] }}
			rotateOpts={{ inputRange: [0, 1], outputRange: [5, 0] }}
			className="relative h-screen shadow-[-10px_-10px_15px_-5px_rgba(128,128,128,0.08),10px_-10px_15px_-5px_rgba(128,128,128,0.08)]"
		>
			<Image src={Pic2} alt="BackgroundImage" className="object-cover" fill placeholder="blur" />
		</SectionScaleRotate>
	);
};
