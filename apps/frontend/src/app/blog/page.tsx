import dynamic from "next/dynamic";

import { type Metadata } from "next";

import { getBlogPosts } from "@/features/blog/api/get-blog-posts";
import { ScrollProgressContainer } from "@/features/common/components/animations/wrappers/scroll-progress-container";

const BlogLandingSection = dynamic(() => import("@/features/blog/components/list/blog-landing-section").then(mod => mod.BlogLandingSection));
const BlogCardsSection = dynamic(() => import("@/features/blog/components/list/blog-cards-section").then(mod => mod.BlogCardsSection));

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

const BlogPage = async () => {
  const [blogPosts, error] = await getBlogPosts();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <ScrollProgressContainer className={"relative flex min-h-[200vh] flex-col bg-background-light-2"}>
      <BlogLandingSection />
      <BlogCardsSection articles={blogPosts?.data ?? []} />
      <div>
        <p>metadata</p>
        <p>total: {blogPosts?.meta?.pagination?.total}</p>
      </div>
    </ScrollProgressContainer>
  );
};

export default BlogPage;
