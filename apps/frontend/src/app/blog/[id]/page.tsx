
import dynamic from "next/dynamic";

import { ScrollProgressContainer } from "@/components/common/animations/wrappers/scroll-progress-container";
import { BlogPostHero } from "@/components/features/blog/post/blog-post.hero";

const BlogPostContent = dynamic(() => import("@/components/features/blog/post/blog-post-content").then((mod) => mod.BlogPostContent), { ssr: false });

export default function BlogPostPage() {
  return <ScrollProgressContainer className={"relative flex min-h-[200vh] w-full flex-col overflow-hidden bg-background"}>
    <BlogPostHero />
    <BlogPostContent />
  </ScrollProgressContainer>;
}
