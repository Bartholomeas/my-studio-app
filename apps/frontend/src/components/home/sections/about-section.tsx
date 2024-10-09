
import { SectionScaleRotate } from "@/components/common/animations/section-scale-rotate";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";


export const AboutSection = () => {
  return (
    <SectionScaleRotate
      scaleOpts={{ inputRange: [0, 1], outputRange: [0.8, 1] }}
      rotateOpts={{ inputRange: [0, 1], outputRange: [5, 0] }}
      className={"relative h-screen bg-foreground "}
    >
      {/* <div className={"container relative flex h-full flex-col gap-2  py-24 md:flex-row"}> */}
      <div className={"cols-4 container relative grid gap-3 py-24"}>
        <div className={"col-span-1"}>

          <Title color={'background'} className={"sticky top-4"}>O nas</Title>
        </div>
        <div className={"col-span-3"}>
          <Text color={'background'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis eveniet voluptatem amet reprehenderit nemo. Nulla expedita nobis ipsam libero quia fugit. Officiis fugit voluptate porro enim non, magnam facilis.</Text>
        </div>

      </div>
      {/* <Image
				src={Pic2}
				alt={"BackgroundImage"}
				className={"object-cover"}
				fill
				placeholder={"blur"}
			/> */}
    </SectionScaleRotate>
  );
};
