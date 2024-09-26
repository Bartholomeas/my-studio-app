import dynamic from "next/dynamic";

import { Title } from "@/components/common/title";
import { LandingSection } from "@/components/home/sections/landing-section";
import { ScrollProgressContainer } from "@/components/home/wrappers/scroll-progress-container";

const AboutSection = dynamic(() => import("@/components/home/sections/about-section").then(res => res.AboutSection));
const ProjectsTrailerSection = dynamic(() => import("@/components/home/sections/projects-trailer-section").then(res => res.ProjectsTrailerSection));
const ImageSentenceSection = dynamic(() => import("@/components/home/sections/image-sentence-section").then(res => res.ImageSentenceSection));

const Home = () => {
  return <main>
    <ScrollProgressContainer className="relative h-[200vh]">
      <LandingSection />
      <AboutSection />
    </ScrollProgressContainer>
    <div className="h-screen z-[999] bg-white flex items-center justify-center" >
      <Title type={'h2'} className="text-center text-[6vw]">
        Niech Twoja przygoda zacznie się tutaj!
      </Title>
    </div>
    <ProjectsTrailerSection />
    <div className="h-screen bg-[#f4f4f4] flex items-center justify-center" />
    <ScrollProgressContainer scrollOpts={{ offset: ['start start', 'end start'] }} className="overflow-hidden h-[100vh]">
      <ImageSentenceSection />
    </ScrollProgressContainer>
    <div className="h-screen bg-[#f4f4f4] flex items-center justify-center">
      <Title type={'h2'} className="text-center text-[6vw]">
        Fajne góry c'nie
      </Title>
    </div>
  </main>;
};

export default Home;
