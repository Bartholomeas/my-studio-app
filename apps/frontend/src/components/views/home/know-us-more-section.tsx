import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";
import { Logo } from "@/components/common/special/logo";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Card } from "@/components/common/ui/card";

export const KnowUsMoreSection = () => {

  return (
    <SectionScaleRotate
      scaleOpts={{ inputRange: [0, 1], outputRange: [0.8, 1] }}
      rotateOpts={{ inputRange: [0, 1], outputRange: [5, 0] }}
      className={"relative flex min-h-screen items-center justify-center bg-background-dark"}
    >
      <div className={"container flex h-full flex-col items-center justify-center gap-4 pt-24 md:flex-row md:gap-4"}>
        <div className={"flex h-full flex-col justify-center md:flex-[3_1_0%]"}>
          <Title
            type={"h2"}
            color={'white'}
            weight={'semibold'}
            className={"mb-6 text-4xl md:text-[64px] md:leading-none"}>
            Tworzymy aplikacje, które <span className={"text-primary"}>robią różnicę</span> – od kodu po design.
          </Title>
          <Text
            color={'light'}
            size={'h4'}
            weight={'medium'}
            className={"md:max-w-[80%]"}
          >
            Jesteśmy zespołem, który przekłada <span className={"font-semibold text-foreground-white"}>Twoją wizję</span> na działające, innowacyjne rozwiązania, <span className={"font-semibold text-foreground-white"}>dostosowane do przyszłości.</span>
          </Text>
        </div>
        <div
          className={"grid size-full grid-cols-1 md:aspect-square md:flex-[2_1_0%] md:grid-cols-2"}>
          <Card
            variant={'dark'}
            className={"flex flex-col items-center justify-center bg-primary md:aspect-square"}>
            <Logo className={"text-lg md:text-xl xl:text-3xl"} />
          </Card>
          <span className={"hidden aspect-square md:block"} />
          <span className={"hidden aspect-square md:block"} />
          <Card
            variant={'dark'}
            className={"flex flex-col items-center justify-center p-4 md:aspect-square"}>
            <Title
              type={'h3'}
              color={'white'}
              weight={'bold'}
              className={"text-md w-full text-center md:text-lg lg:text-xl xl:text-3xl"}>
              Czyli pełen profesjonalizm
            </Title>
          </Card>
        </div>
      </div>
    </SectionScaleRotate>
  );
};
