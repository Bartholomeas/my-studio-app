
import { CtaCircle } from "@/components/common/special/cta-circle";
import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";

export const HeroBottomBox = () => {
  return (
    <MagneticWrapper className={"absolute bottom-8 right-8 flex items-center justify-center p-0"}>
      <CtaCircle />
    </MagneticWrapper>
  );
};
