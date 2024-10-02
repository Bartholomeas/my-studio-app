import dynamic from "next/dynamic";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { DescrptionSection } from "@/components/home/sections/descrption-section";
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
    <>

      <ScrollProgressContainer className={"relative h-[200vh]"}>
        <LandingSection />
        <AboutSection />
      </ScrollProgressContainer>
      <HomeSentenceSection />
      <ProjectsTrailerSection />
      <DescrptionSection />
      <ScrollProgressContainer
        scrollOpts={{ offset: ["start start", "end start"] }}
        className={"h-screen overflow-hidden"}
      >
        <ImageSentenceSection />
      </ScrollProgressContainer>
    </>
  );
};

export default Home;
