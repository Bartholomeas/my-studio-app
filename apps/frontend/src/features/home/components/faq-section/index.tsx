import { getTranslations } from "next-intl/server";


import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/features/common/components/ui/accordion";

const FAQ_QUESTION = [
	{
		id: 1,
		question: "Jak długo trwa realizacja projektu?",
		answer:
			"Realizacja projektu trwa od 2 do 4 tygodni, w zależności od jego złożoności i wymagań.",
	},
	{
		id: 2,
		question: "Ile kosztuje realizacja projektu?",
		answer: "Koszt realizacji projektu jest indywidualny i zależy od jego złożoności i wymagań.",
	},
	{
		id: 3,
		question: "Co gdy zmienia się wymagania klienta?",
		answer:
			"W przypadku zmiany wymagań klienta, możemy dokonać dodatkowych prac za dodatkową opłatą.",
	},
	{
		id: 4,
		question: "Mam istniejący projekt, który chcę zmienić. Czy możecie pomóc?",
		answer:
			"Tak, możemy pomóc Ci zmienić istniejący projekt. W tym celu musisz się skontaktować z nami.",
	},
];

export const FaqSection = async () => {
	const t = await getTranslations("/.faqSection");

	return (
		<section
			className={
				"relative mb-4 flex flex-col items-center justify-center rounded-b-3xl bg-background py-16 after:absolute after:-top-16 after:h-16 after:w-full after:rounded-t-3xl after:bg-background after:content-[''] md:mx-8"
			}
		>
			<div className={"container mx-auto grid h-full grid-cols-5 gap-8 md:grid-cols-5"}>
				<div className={"col-span-5 flex flex-col gap-2 md:col-span-2"}>
					<Title type={"h2"} size={"h1"} weight={"bold"}>
						{t("title")}
					</Title>
					<Text size={"lg"} color={"light"} weight={"semibold"}>
						{t("subtitle")}
					</Text>
				</div>

				<Accordion type={"single"} collapsible className={"col-span-5 md:col-span-3"}>
					{FAQ_QUESTION.map((item, index) => (
						<FaqItem key={item.id} {...item} index={index} />
					))}
				</Accordion>
			</div>
		</section>
	);
};

const FaqItem = ({
	question,
	answer,
	index,
}: {
	question: string;
	answer: string;
	index: number;
}) => {
	return (
		<AccordionItem value={`question-${index}`}>
			<AccordionTrigger className={"[&>svg]:size-6"}>
				<Title type={"h3"} size={"h4"} weight={"medium"}>
					{question}
				</Title>
			</AccordionTrigger>
			<AccordionContent>
				<Text size={"lg"} color={"muted"}>
					{answer}
				</Text>
			</AccordionContent>
		</AccordionItem>
	);
};
