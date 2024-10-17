import { Carousel, CarouselContent, CarouselItem } from "@/components/common/ui/carousel";

import MePicture from './../../../../../public/team/pic2.jpg';
import { TeamMemberCarouselCard, TeamMemberPlaceholder } from "./team-member-carousel-card";

export const TeamMembersCarousel = () => {
  return (
    <div className={"absolute left-0 top-0 size-full min-w-[80vw]"}>
      <Carousel
        className={"w-full"}
        opts={{
          align: 'start',
          containScroll: false,
        }}
      >
        <CarouselContent className={"ml-0"}>
          {[
            <TeamMemberCarouselCard
              key={"member-1"}
              isLeft={true}
              name={"Bartosz Stefaniak"}
              role={"Software Engineer"}
              description={"Bartek is a good guy :)"}
              image={MePicture}
            />,
            <TeamMemberPlaceholder key={"placeholder-1"} isLeft={false} className={"bg-primary-500"} />,
            <TeamMemberPlaceholder key={"placeholder-2"} isLeft={true} className={"bg-primary-400"} />,
            <TeamMemberPlaceholder key={"placeholder-3"} isLeft={false} className={"bg-primary-300"} />
          ].map((item, index) => (
            <CarouselItem key={index} className={"basis-full pl-0 sm:basis-1/2 lg:basis-1/3"}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
