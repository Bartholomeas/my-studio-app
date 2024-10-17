import Link from "next/link";

import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/common/ui/button";
import { Card, CardContent } from "@/components/common/ui/card";

import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { APP_ROUTES } from "@/misc/routes";

interface BentoLongItemProps {
	title: string;
	text: string;
}

export const BentoLongItem = async ({ title, text }: BentoLongItemProps) => {
	const t = await getTranslations("common");

	return (
		<div className={"col-span-2 h-full"}>
			<Card
				variant={"dark"}
				padding={"lg"}
				className={"relative rounded-br-[100px] bg-primary lg:rounded-br-full"}
			>
				<CardContent className={"flex flex-col gap-2 p-0 py-6 pr-8"}>
					<Title type={"h3"} weight={"semibold"} className={"text-2xl"}>
						{title}
					</Title>
					<Text size={"lg"} weight={"semibold"}>
						{text}
					</Text>
					<MagneticWrapper className={"p-0"}>
						<Link
							href={APP_ROUTES.contact}
							className={buttonVariants({ size: "lg", className: "w-fit" })}
						>
							{t("contactUs")}
						</Link>
					</MagneticWrapper>
				</CardContent>
			</Card>
		</div>
	);
};
