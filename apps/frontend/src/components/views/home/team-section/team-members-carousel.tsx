import { Carousel, CarouselContent, CarouselItem } from "@/components/common/ui/carousel";

import { TeamMemberCarouselCard } from "./team-member-carousel-card";

export const TeamMembersCarousel = () => {
  return (
    <div className={"absolute left-0 w-screen max-w-[100vw] overflow-hidden"}>
      <div className={"relative left-[calc(50%-50vw)] w-screen"}>
        <Carousel
          className={"w-full"}
          opts={{ align: 'start', containScroll: false }}
        >
          <CarouselContent
            className={"w-full "}>
            {new Array(5).fill(null).map((_, index) => (
              <CarouselItem
                key={`teamMemberCard-${index}`}
                className={`${index === 0 ? 'pl-4' : 'pl-0'} sm:basis-1/2 lg:basis-1/3 xl:basis-1/4`}
              >
                <TeamMemberCarouselCard
                  isLeft={index % 2 === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

