import dynamic from "next/dynamic";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { DescrptionSection } from "@/components/home/sections/descrption-section";
import { HeroSection } from "@/components/home/sections/hero-section";

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
const WorkProcessSection = dynamic(() =>
	import("@/components/home/sections/work-process-section").then((res) => res.WorkProcessSection),
);

const Home = async () => {
	return (
		<>
			<ScrollProgressContainer className={"relative h-[200vh]"}>
				<HeroSection />
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
			<WorkProcessSection />
		</>
	);
};

export default Home;
