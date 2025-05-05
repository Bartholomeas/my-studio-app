import { getTranslations } from "next-intl/server";


import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { Logo } from "@/features/common/components/special/logo";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { Card } from "@/features/common/components/ui/card";

export const KnowUsMoreSection = async () => {
  const t = await getTranslations("/.knowUsMoreSection");

  return (
    <SectionScaleRotate
      id={"know-us-more"}
      scaleOpts={{ inputRange: [0, 1], outputRange: [0.8, 1] }}
      rotateOpts={{ inputRange: [0, 1], outputRange: [5, 0] }}
      className={"relative flex min-h-screen items-center justify-center bg-background-dark"}
    >
      <div
        className={
          "container flex h-full flex-col items-center justify-center gap-4 pt-24 md:flex-row md:gap-4"
        }
      >
        <div className={"flex h-full flex-col justify-center md:flex-[3_1_0%]"}>
          <Title
            type={"h2"}
            color={"white"}
            weight={"semibold"}
            className={"mb-6 text-4xl md:text-[64px] md:leading-none"}
          >
            {t.rich("title", {
              makesDifference: (chunks) => <span className={"text-primary"}>{chunks}</span>,
            })}
          </Title>
          <Text color={"light"} size={"h4"} weight={"medium"} className={"md:max-w-[80%]"}>
            {t.rich("subtitle", {
              highlight: (chunks) => (
                <span className={"font-semibold text-foreground-white"}>{chunks}</span>
              ),
            })}
          </Text>
        </div>
        <div
          className={"grid size-full grid-cols-1 md:aspect-square md:flex-[2_1_0%] md:grid-cols-2"}
        >
          <Card
            variant={"dark"}
            className={"flex flex-col items-center justify-center bg-primary md:aspect-square"}
          >
            <Logo className={"w-2/3"} />
          </Card>
          <span
            className={"mb-2 ml-2 hidden aspect-square rounded-lg rounded-bl-full bg-primary-400 md:block"}
          />
          <span className={"hidden aspect-square md:block"} />
          <Card
            variant={"darkGradient"}
            className={"flex flex-col items-center justify-center p-4 md:aspect-square"}
          >
            <Title
              type={"h3"}
              color={"white"}
              weight={"bold"}
              className={"md:text-md text-center lg:text-xl xl:text-2xl"}
            >
              {t("boxSentence")}
            </Title>
          </Card>
        </div>
      </div>
    </SectionScaleRotate>
  );
};
