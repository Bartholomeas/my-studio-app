import { Suspense } from "react";

import dynamic from "next/dynamic";

import { HeroSection } from "src/components/views/home/hero-section";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { DescriptionSection } from "@/components/views/home/description-section";


const KnowUsMoreSection = dynamic(() =>
  import("@/components/views/home/know-us-more-section").then((res) => res.KnowUsMoreSection),
);

const AboutSection = dynamic(() =>
  import("src/components/views/home/about-section").then((res) => res.AboutSection),
);

const TeamSection = dynamic(() =>
  import("@/components/views/home/team-section").then((res) => res.TeamSection),
);

const OpinionsSection = dynamic(() =>
  import("@/components/views/home/opinions-section").then((res) => res.OpinionsSection),
);

const ProjectsTrailerSection = dynamic(() =>
  import("@/components/views/home/projects-trailer-section").then(
    (res) => res.ProjectsTrailerSection,
  ),
);

const ImageSentenceSection = dynamic(() =>
  import("@/components/views/home/image-sentence-section").then((res) => res.ImageSentenceSection),
);

const HomeSentenceSection = dynamic(() =>
  import("@/components/views/home/home-sentence-section").then((res) => res.HomeSentenceSection),
);

const WorkProcessSection = dynamic(() =>
  import("@/components/views/home/work-process-section").then((res) => res.WorkProcessSection),
);

const FaqSection = dynamic(() => import("@/components/views/home/faq-section").then((res) => res.FaqSection));


const Home = async () => {
  return (
    <>
      <ScrollProgressContainer className={"relative min-h-[200vh]"}>
        <HeroSection />
        <KnowUsMoreSection />
      </ScrollProgressContainer>
      <AboutSection />
      <Suspense fallback={<div>Loading...</div>}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OpinionsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeSentenceSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsTrailerSection />
      </Suspense>
      <DescriptionSection />
      <Suspense fallback={<div>Loading...</div>}>
        <FaqSection />
      </Suspense>
      <ScrollProgressContainer
        scrollOpts={{ offset: ["start start", "end start"] }}
        className={"h-screen overflow-hidden"}
      >
        <ImageSentenceSection />

      </ScrollProgressContainer>
      <WorkProcessSection />

    </>
  );
};

export default Home;
