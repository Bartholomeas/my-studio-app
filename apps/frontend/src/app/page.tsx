import { Suspense } from "react";

import dynamic from "next/dynamic";

import { HeroSection } from "src/features/home/components/hero-section";

import { ScrollProgressContainer } from "@/features/common/components/animations/wrappers/scroll-progress-container";
import { DescriptionSection } from "@/features/home/components/description-section";


const KnowUsMoreSection = dynamic(() =>
  import("@/features/home/components/know-us-more-section").then((res) => res.KnowUsMoreSection),
);

const AboutSection = dynamic(() =>
  import("src/features/home/components/about-section").then((res) => res.AboutSection),
);

const TeamSection = dynamic(() =>
  import("src/features/home/components/team-section").then((res) => res.TeamSection),
);

const OpinionsSection = dynamic(() =>
  import("src/features/home/components/opinions-section").then((res) => res.OpinionsSection),
);

const ProjectsTrailerSection = dynamic(() =>
  import("@/features/home/components/projects-trailer-section").then(
    (res) => res.ProjectsTrailerSection,
  ),
);

const ImageSentenceSection = dynamic(() =>
  import("@/features/home/components/image-sentence-section").then((res) => res.ImageSentenceSection),
);

const WorkProcessSection = dynamic(() =>
  import("@/features/home/components/work-process-section").then((res) => res.WorkProcessSection),
);

const FaqSection = dynamic(() =>
  import("src/features/home/components/faq-section").then((res) => res.FaqSection),
);

const ContactSection = dynamic(() => import("src/features/home/components/contact-section").then((res) => res.ContactSection));

const Home = async () => {
  return (
    <>
      <ScrollProgressContainer className={"relative min-h-[200vh]"}>
        <HeroSection />
        <KnowUsMoreSection />
      </ScrollProgressContainer>
      <ScrollProgressContainer
        scrollOpts={{ offset: ["start start", "end start"] }}
        className={"min-h-screen overflow-hidden"}
      >
        <AboutSection />
      </ScrollProgressContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OpinionsSection />
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
      <ContactSection />
    </>
  );
};

export default Home;
