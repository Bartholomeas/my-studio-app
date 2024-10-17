"use client";

import { useRouter } from "next/navigation";

import { type Metadata } from "next";

import { Button } from "@/components/common/ui/button";

import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

export const metadata: Metadata = {
	title: "Nie znaleziono strony - 404 ",
	robots: "noindex",
};

const NotFound = () => {
	const router = useRouter();
	const getBack = () => router.back();

	return (
		<div
			className={
				"flex min-h-screen flex-col items-center justify-center bg-background pb-[100h] text-foreground"
			}
		>
			<Title type={"h1"} weight={"bold"} className={"text-[25vw] leading-none"}>
				404
			</Title>
			<Text className={"text-3xl"}>Oops! Nie mamy takiej strony.</Text>
			<MagneticWrapper>
				<Button onClick={getBack} size={"lg"}>
					Powróć na stronę główną
				</Button>
			</MagneticWrapper>
		</div>
	);
};

export default NotFound;
