import Image from "next/image";

import { Card } from "@/components/common/ui/card";

import MePicture from './../../../../../public/team/me.jpg';

interface TeamCardProps {
  isLeft: boolean;
}
export const TeamMemberCarouselCard = ({ isLeft = false }: TeamCardProps) => {
  return <Card
    padding={'none'}
    shape={!isLeft ? 'skewedLeft' : 'skewedRight'}
    className={"relative aspect-square h-full border-background-light"}>
    <Image
      src={MePicture}
      loading={"lazy"}
      placeholder={"blur"}
      alt={"Me"}
      fill
      className={"object-cover"}
    />
  </Card>;
};
