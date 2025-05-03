import {
	BrainIcon,
	CheckIcon,
	CodeIcon,
	HandshakeIcon,
	PencilIcon,
	RocketIcon,
	SearchIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { Timeline } from "src/features/common/components/timeline";
import { type TimelineBoxProps } from "@/features/common/components/timeline/timeline-box";

const t = await getTranslations("/.workProcess");

const data: TimelineBoxProps[] = [
	{
		title: t("initWork.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("initWork.text")}</Text>
			</div>
		),
		icon: <HandshakeIcon />,
	},
	{
		title: t("functionalities.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("functionalities.text1")}</Text>
				<Text size={"h5"}>{t("functionalities.text2")}</Text>
			</div>
		),
		icon: <BrainIcon />,
	},
	{
		title: t("inspirations.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("inspirations.text1")}</Text>
				<Text size={"h5"}>{t("inspirations.text2")}</Text>
			</div>
		),
		icon: <SearchIcon />,
	},
	{
		title: t("acceptance.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("acceptance.text1")}</Text>
				<Text size={"h5"}>{t("acceptance.text2")}</Text>
			</div>
		),
		icon: <PencilIcon />,
	},
	{
		title: t("buildingInProgress.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("buildingInProgress.text1")}</Text>
				<Text size={"h5"}>{t("buildingInProgress.text2")}</Text>
			</div>
		),
		icon: <CodeIcon />,
	},
	{
		title: t("testingProcess.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("testingProcess.text1")}</Text>
				<Text size={"h5"}>{t("testingProcess.text2")}</Text>
			</div>
		),
		icon: <CheckIcon />,
	},
	{
		title: t("finalVersion.heading"),
		content: (
			<div className={"flex flex-col gap-4"}>
				<Text size={"h5"}>{t("finalVersion.text1")}</Text>
				<Text size={"h5"}>{t("finalVersion.text2")}</Text>
			</div>
		),
		icon: <RocketIcon />,
	},
];

export const WorkProcessSection = () => {
	return (
		<section className={"min-h-screen bg-background py-24"}>
			<div className={"container"}>
				<Title type={"h2"}>{t("heading")}</Title>
				<Timeline data={data} />
			</div>
		</section>
	);
};
