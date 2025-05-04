
import dynamic from "next/dynamic";

import { getBlogPost } from "@/features/blog/api/get-blog-post";
import { BlogPostHero } from "@/features/blog/components/post/blog-post.hero";
import { ScrollProgressContainer } from "@/features/common/components/animations/wrappers/scroll-progress-container";

const BlogPostContent = dynamic(() => import("@/features/blog/components/post/blog-post-content").then((mod) => mod.BlogPostContent), { ssr: false });

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; }>; }) {
  const { slug } = await params;

  const [blogPost] = await getBlogPost({ slug });

  return <ScrollProgressContainer className={"relative flex min-h-[200vh] w-full flex-col overflow-hidden bg-background"}>
    <BlogPostHero />
    <BlogPostContent content={blogPost?.data?.blocks ?? []} />
  </ScrollProgressContainer>;
}
