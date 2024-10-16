const WindowMockup = dynamic(() =>
	import("@/components/common/special/window-mockup").then((mod) => mod.WindowMockup),
);
import dynamic from "next/dynamic";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Card, CardContent } from "@/components/common/ui/card";

interface BentoHighItemProps {
	title: string;
	text: string;
}

export const BentoHighItem = ({ title, text }: BentoHighItemProps) => {
	return (
		<div className={"col-span-1 h-full min-h-[600px] lg:col-span-4"}>
			<Card variant={"darkGradient"} padding={"lg"}>
				<CardContent className={"p-0"}>
					<Title color={"white"} type={"h3"} className={"mb-2 text-2xl"}>
						{title}
					</Title>
					<Text color={"light"} className={"mb-8"}>
						{text}
					</Text>
					<WindowMockup />
				</CardContent>
			</Card>
		</div>
	);
};
