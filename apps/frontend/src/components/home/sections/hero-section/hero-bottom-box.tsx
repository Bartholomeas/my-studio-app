
import { CtaCircle } from "@/components/common/special/cta-circle";
import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";
import { Button } from "@/components/common/ui/button";

export const HeroBottomBox = () => {
  return (
    <>
      <Button variant={'primary'} className={"absolute bottom-16 left-16 w-fit"}>Skontaktuj się już teraz</Button>
      <MagneticWrapper className={"absolute bottom-16 right-16 flex items-center justify-center p-0"}>
        <CtaCircle />
      </MagneticWrapper>
    </>
  );
};
