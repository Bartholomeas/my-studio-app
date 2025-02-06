import {Carousel, CarouselContent, CarouselItem} from "@/components/common/ui/carousel";

import {CursorActionType} from "@/components/common/special/cursor-handler/cursor-handler.types";

import MePicture from './../../../../../public/team/pic2.jpg';
import {OpinionsCarouselCard} from "./opinions-carousel-card";
import {OpinionAuthorProps} from "@/components/views/home/opinions-section/opinion-author";

const MOCK_AUTHOR: OpinionAuthorProps = {
    image: MePicture.src,
    authorName: "Carl Johnson",
    role: "CEO",
    company: "Company"

}

export const OpinionsCarousel = () => {
    return (
        <>
            <div className={"absolute inset-y-0 left-0 min-w-[90vw] md:min-w-[80vw]"}>
                <Carousel
                    data-hover={CursorActionType.DRAG}
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
                        className={"ml-0"}
                    >
                        {[
                            <OpinionsCarouselCard
                                key={"teamMemberCard-key"}
                                author={MOCK_AUTHOR}
                                name={"Bartosz Stefaniak"}
                                role={"Software Engineer"}
                                description={"Lol :)"}
                                image={MePicture}
                            />, <OpinionsCarouselCard
                                key={"teamMemberCard-key2"}
                                author={MOCK_AUTHOR}
                                name={"Bartosz Stefaniak"}
                                role={"Software Engineer"}
                                description={"Lol :)"}
                                image={MePicture}
                            />, <OpinionsCarouselCard
                                key={"teamMemberCard-key3"}
                                author={MOCK_AUTHOR}
                                name={"Bartosz Stefaniak"}
                                role={"Software Engineer"}
                                description={"Lol :)"}
                                image={MePicture}
                            />
                            // <TeamMemberPlaceholder key={"placeholder-primary-500"} isLeft={false}
                            //                        className={"bg-primary-500"}>
                            //     <Logo className={"w-2/3"}/>
                            // </TeamMemberPlaceholder>,
                            // <TeamMemberPlaceholder key={"placeholder-primary-400"} isLeft={true}
                            //                        className={"bg-primary-400"}>
                            //     <Text
                            //         weight={'bold'}
                            //         size={'h3'}
                            //         color={'background'}
                            //         align={'center'}
                            //     >
                            //         Załoga specjalistów, która tworzy nasze studio.
                            //     </Text>
                            // </TeamMemberPlaceholder>,
                            // <TeamMemberPlaceholder key={"placeholder-primary-300"} isLeft={false}
                            //                        className={"bg-primary-300"}>
                            //     <Text
                            //         className={"text-[90px]"}
                            //     >
                            //         🖖
                            //     </Text>
                            // </TeamMemberPlaceholder>
                        ].map((item) => (
                            <CarouselItem key={item.key} className={"basis-full pl-4 sm:basis-1/2"}>
                                {item}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
};
