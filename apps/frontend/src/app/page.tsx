import { AboutSection } from "@/components/home/sections/about-section";
import { LandingSection } from "@/components/home/sections/landing-section";
import { HomeMainWrapper } from "@/components/home/wrappers/home-main-wrapper";

const Home = () => {

  return (
    <main>
      <HomeMainWrapper className="relative">
        <div className="relative h-[200vh]">
          <LandingSection />
          <AboutSection />
        </div>
      </HomeMainWrapper>
      <div className="h-screen bg-white" />
    </main>
  );
};

export default Home;
