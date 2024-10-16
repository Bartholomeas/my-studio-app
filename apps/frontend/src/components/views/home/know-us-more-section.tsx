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
      <div className={"container flex h-full flex-col items-center justify-center gap-8 py-24 md:flex-row md:gap-4"}>
        <div className={"flex h-full flex-col justify-center md:flex-[3_1_0%]"}>
          <Title
            type={"h2"}
            color={'white'}
            weight={'bold'}
            className={"mb-6 text-5xl md:text-[64px]"}>
            Innowacyjne rozwiązania cyfrowe
          </Title>
          <Text
            color={'white'}
            size={'lg'}
            className={"md:max-w-[80%]"}
          >
            Jesteśmy polskim software house'em specjalizującym się w tworzeniu
            niestandardowych aplikacji internetowych i mobilnych oraz projektowaniu UI/UX.
          </Text>
        </div>
        <div
          className={"grid size-full grid-cols-1 md:aspect-square md:flex-[2_1_0%] md:grid-cols-2"}>
          <Card
            variant={'dark'}
            className={"flex flex-col items-center justify-center bg-primary md:aspect-square"}>
            <Logo className={"text-3xl"} />
          </Card>
          <span className={"hidden aspect-square md:block"} />
          <span className={"hidden aspect-square md:block"} />
          <Card
            variant={'dark'}
            className={"flex flex-col items-center justify-center p-6 md:aspect-square"}>
            <Title
              color={'white'}
              weight={'bold'}
              className={"mb-3 text-center text-2xl"}>
              Czyli pełen profesjonalizm
            </Title>
          </Card>
        </div>
      </div>
    </SectionScaleRotate>
  );
};
