import { Carousel, CarouselContent, CarouselItem } from "@/components/common/ui/carousel";

import MePicture from './../../../../../public/team/pic2.jpg';
import { TeamMemberCarouselCard, TeamMemberPlaceholder } from "./team-member-carousel-card";

export const TeamMembersCarousel = () => {
  return (
    <>
      <div className={"absolute inset-y-0 left-0 min-w-[90vw] md:min-w-[80vw]"}>
        <Carousel
          className={"w-full"}
          draggable={false}
          opts={{
            align: 'start',
            containScroll: false,
            loop: true,
          }}
        >
          <CarouselContent
            draggable={false}
            className={"ml-0"}>
            {[
              <TeamMemberCarouselCard
                key={"teamMemberCard-key"}
                isLeft={true}
                name={"Bartosz Stefaniak"}
                role={"Software Engineer"}
                description={"Bartek is a good guy :)"}
                image={MePicture}
              />,
              <TeamMemberPlaceholder key={"placeholder-primary-500"} isLeft={false} className={"bg-primary-500"} />,
              <TeamMemberPlaceholder key={"placeholder-primary-400"} isLeft={true} className={"bg-primary-400"} />,
              <TeamMemberPlaceholder key={"placeholder-primary-300"} isLeft={false} className={"bg-primary-300"} />
            ].map((item) => (
              <CarouselItem key={item.key} className={"basis-full pl-0 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"}>
                {item}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
