import { AboutSection } from "@/components/home/sections/about-section";
import { LandingSection } from "@/components/home/sections/landing-section";
import { ProjectsTrailerSection } from "@/components/home/sections/projects-trailer-section";
import { HomeMainWrapper } from "@/components/home/wrappers/home-main-wrapper";

const Home = () => {

  return (
    <main>
      <HomeMainWrapper className="relative h-[200vh]">
        <LandingSection />
        <AboutSection />
      </HomeMainWrapper>
      <div className="h-screen z-[999] bg-white" />
      <ProjectsTrailerSection />
    </main>
  );
};

export default Home;
