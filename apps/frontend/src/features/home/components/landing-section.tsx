import Image from "next/image";
import Link from "next/link";

import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { Text } from "@/features/common/components/text";
import { APP_ROUTES } from "@/misc/routes";

import Pic1 from "../../../../public/pic1.webp";

export const LandingSection = () => {
	return (
		<SectionScaleRotate
			className={
				"sticky top-0 flex h-screen flex-col items-center justify-center bg-[#f7f7f7] pb-[10vh] text-[3.5vw] text-white"
			}
		>
			<Link href={APP_ROUTES.contact.href}>{APP_ROUTES.contact.label}</Link>
			<Text>Scroll perspective</Text>
			<div className={"flex gap-4"}>
				<Text>Section</Text>
				<div className={"relative w-[12.5vw]"}>
					<Image src={Pic1} alt={"BackgroundImage"} fill placeholder={"blur"} />
				</div>
				<Text>transition</Text>
			</div>
		</SectionScaleRotate>
	);
};
