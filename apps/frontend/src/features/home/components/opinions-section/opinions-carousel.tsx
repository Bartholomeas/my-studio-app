import { CursorActionType } from "@/features/common/components/special/cursor-handler/cursor-handler.types";
import { Carousel, CarouselContent, CarouselItem } from "@/features/common/components/ui/carousel";
import { type OpinionAuthorProps } from "@/features/home/components/opinions-section/opinion-author";

import { OpinionsCarouselCard } from "./opinions-carousel-card";
import MePicture from "../../../../../public/team/pic2.jpg";

const MOCK_AUTHOR: OpinionAuthorProps = {
  image: MePicture.src,
  authorName: "Carl Johnson",
  role: "CEO",
  company: "Company",
};

export const OpinionsCarousel = () => {
  return (
    <>
      <div className={"inset-y-0 left-0 min-w-[90vw] py-8 md:min-w-[80vw]"}>
        <Carousel
          data-hover={CursorActionType.DRAG}
          className={"w-full"}
          draggable={false}
          opts={{
            align: "start",
            containScroll: false,

            loop: true,
          }}
        >
          <CarouselContent draggable={false} className={"ml-0"}>
            {[
              <OpinionsCarouselCard
                key={"teamMemberCard-key"}
                author={MOCK_AUTHOR}
                name={"Bartosz Stefaniak"}
                role={"Software Engineer"}
                description={"Lol :)"}
                image={MePicture}
              />,
              <OpinionsCarouselCard
                key={"teamMemberCard-key2"}
                author={MOCK_AUTHOR}
                name={"Bartosz Stefaniak"}
                role={"Software Engineer"}
                description={"Lol :)"}
                image={MePicture}
              />,
              <OpinionsCarouselCard
                key={"teamMemberCard-key3"}
                author={MOCK_AUTHOR}
                name={"Bartosz Stefaniak"}
                role={"Software Engineer"}
                description={"Lol :)"}
                image={MePicture}
              />,
            ].map((item) => (
              <CarouselItem key={item.key} className={"basis-full pl-4 sm:basis-1/2 lg:basis-1/2"}>
                {item}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
