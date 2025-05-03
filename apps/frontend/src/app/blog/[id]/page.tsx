
import dynamic from "next/dynamic";

import { ScrollProgressContainer } from "@/features/common/components/animations/wrappers/scroll-progress-container";
import { BlogPostHero } from "@/features/blog/components/post/blog-post.hero";

const BlogPostContent = dynamic(() => import("@/features/blog/components/post/blog-post-content").then((mod) => mod.BlogPostContent), { ssr: false });

export default function BlogPostPage() {
  return <ScrollProgressContainer className={"relative flex min-h-[200vh] w-full flex-col overflow-hidden bg-background"}>
    <BlogPostHero />
    <BlogPostContent />
  </ScrollProgressContainer>;
}
