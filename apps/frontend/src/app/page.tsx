import dynamic from "next/dynamic";

import { HeroSection } from "src/components/views/home/hero-section";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { DescrptionSection } from "@/components/views/home/descrption-section";

const AboutSection = dynamic(() =>
	import("src/components/views/home/about-section").then((res) => res.AboutSection),
);
const ProjectsTrailerSection = dynamic(() =>
	import("@/components/views/home/projects-trailer-section").then(
		(res) => res.ProjectsTrailerSection,
	),
);
const ImageSentenceSection = dynamic(() =>
	import("@/components/views/home/image-sentence-section").then(
		(res) => res.ImageSentenceSection,
	),
);
const HomeSentenceSection = dynamic(() =>
	import("@/components/views/home/home-sentence-section").then((res) => res.HomeSentenceSection),
);
const WorkProcessSection = dynamic(() =>
	import("@/components/views/home/work-process-section").then((res) => res.WorkProcessSection),
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
