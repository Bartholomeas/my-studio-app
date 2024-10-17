import { Carousel, CarouselContent, CarouselItem } from "@/components/common/ui/carousel";

import MePicture from './../../../../../public/team/me.jpg';
import { TeamMemberCarouselCard, TeamMemberPlaceholder } from "./team-member-carousel-card";
import { type TeamMember, type TeamMemberPlaceholder as TeamMemberPlaceholderType } from "./team-section.types";


const TEAM_MEMBERS: (TeamMember | TeamMemberPlaceholderType)[] = [{
  name: "Bartosz Stefaniak",
  role: "Software Engineer",
  description: "Bartosz is a software engineer with over 10 years of experience in the industry. He is a full stack developer and a blockchain enthusiast.",
  image: MePicture
},
{
  backgroundColor: "bg-primary-600"
},
{
  backgroundColor: "bg-primary-500"
},
{
  backgroundColor: "bg-primary-400"
}
];

export const TeamMembersCarousel = () => {
  return (
    <div className={"absolute left-0 w-screen max-w-[100vw] overflow-hidden"}>
      <div className={"relative left-[calc(50%-50vw)] w-screen"}>
        <Carousel
          className={"w-full"}
          opts={{
            align: 'start',
            containScroll: false,
            loop: true,
          }}
        >
          <CarouselContent
            className={"ml-0 w-full"}>
            {TEAM_MEMBERS.map((member, index) => (
              <CarouselItem
                key={`teamMemberCard-${index}`}
                className={`p-0 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4`}
              >{
                  'name' in member ? (
                    <TeamMemberCarouselCard
                      isLeft={index % 2 === 0}
                      {...member}
                    />
                  ) : (
                    <TeamMemberPlaceholder
                      isLeft={index % 2 === 0}
                      className={member.backgroundColor}
                    />
                  )
                }
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

