import { Suspense } from "react";

import dynamic from "next/dynamic";

import { HeroSection } from "src/components/features/home/hero-section";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { DescriptionSection } from "@/components/features/home/description-section";


const KnowUsMoreSection = dynamic(() =>
  import("@/components/features/home/know-us-more-section").then((res) => res.KnowUsMoreSection),
);

const AboutSection = dynamic(() =>
  import("src/components/features/home/about-section").then((res) => res.AboutSection),
);

const TeamSection = dynamic(() =>
  import("@/components/features/home/team-section").then((res) => res.TeamSection),
);

const OpinionsSection = dynamic(() =>
  import("@/components/features/home/opinions-section").then((res) => res.OpinionsSection),
);

const ProjectsTrailerSection = dynamic(() =>
  import("@/components/features/home/projects-trailer-section").then(
    (res) => res.ProjectsTrailerSection,
  ),
);

const ImageSentenceSection = dynamic(() =>
  import("@/components/features/home/image-sentence-section").then((res) => res.ImageSentenceSection),
);

const WorkProcessSection = dynamic(() =>
  import("@/components/features/home/work-process-section").then((res) => res.WorkProcessSection),
);

const FaqSection = dynamic(() =>
  import("@/components/features/home/faq-section").then((res) => res.FaqSection),
);

const ContactSection = dynamic(() => import("@/components/features/home/contact-section").then((res) => res.ContactSection));

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
