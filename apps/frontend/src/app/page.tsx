import dynamic from "next/dynamic";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { MagneticWrapper } from "@/components/common/special/magnetic-wrapper";
import { Title } from "@/components/common/title";
import { Button } from "@/components/common/ui/button";
import { LandingSection } from "@/components/home/sections/landing-section";

const AboutSection = dynamic(() =>
  import("@/components/home/sections/about-section").then((res) => res.AboutSection),
);
const ProjectsTrailerSection = dynamic(() =>
  import("@/components/home/sections/projects-trailer-section").then(
    (res) => res.ProjectsTrailerSection,
  ),
);
const ImageSentenceSection = dynamic(() =>
  import("@/components/home/sections/image-sentence-section").then(
    (res) => res.ImageSentenceSection,
  ),
);
const HomeSentenceSection = dynamic(() =>
  import("@/components/home/sections/home-sentence-section").then((res) => res.HomeSentenceSection),
);

const Home = () => {
  return (
    <main>
      <ScrollProgressContainer className={"relative h-[200vh]"}>
        <LandingSection />
        <AboutSection />
      </ScrollProgressContainer>
      <HomeSentenceSection />
      {/*<div className="h-screen z-[999] bg-white flex items-center justify-center" >*/}
      {/*  <Title type={'h2'} className="text-center text-[6vw]">*/}
      {/*    Niech Twoja przygoda zacznie się tutaj!*/}
      {/*  </Title>*/}
      {/*</div>*/}
      <ProjectsTrailerSection />
      <div className={"flex h-screen items-center justify-center bg-[#f4f4f4]"}>
        <Title type={"h2"} className={"text-center text-[6vw]"}>
          Fajne góry c'nie
          <MagneticWrapper>
            <Button>Kliknij mnie</Button>
          </MagneticWrapper>
          <Button>Kliknij mnie</Button>
          <section className={"grid place-content-center py-24"}></section>
        </Title>
      </div>
      <ScrollProgressContainer
        scrollOpts={{ offset: ["start start", "end start"] }}
        className={"h-screen overflow-hidden"}
      >
        <ImageSentenceSection />
      </ScrollProgressContainer>
    </main>
  );
};

export default Home;
