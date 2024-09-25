import { AboutSection } from "@/components/home/sections/about-section";
import { LandingSection } from "@/components/home/sections/landing-section";
import { HomeMainWrapper } from "@/components/home/wrappers/home-main-wrapper";

const Home = () => {

  return (
    <HomeMainWrapper className="relative">
      <div className="relative h-[200vh]">
        <LandingSection />
        <AboutSection />
      </div>
      <div className="h-screen bg-white" />
    </HomeMainWrapper>
  );
};

export default Home;
