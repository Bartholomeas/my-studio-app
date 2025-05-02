import dynamic from "next/dynamic";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";

const BlogLandingSection = dynamic(() => import("@/components/features/blog/list/blog-landing-section").then(mod => mod.BlogLandingSection));
const BlogCardsSection = dynamic(() => import("@/components/features/blog/list/blog-cards-section").then(mod => mod.BlogCardsSection));

const BlogPage = async () => {
  return (
    <ScrollProgressContainer className={"relative flex min-h-[200vh] flex-col bg-background-light-2"}>
      <BlogLandingSection />
      <BlogCardsSection />
    </ScrollProgressContainer>
  );
};

export default BlogPage;
