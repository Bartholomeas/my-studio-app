
import dynamic from "next/dynamic";


import { getBlogPost } from "@/features/blog/api/get-blog-post";
import { getBlogPostsSlugs } from "@/features/blog/api/get-blog-posts-slugs";
import { BlogPostHero } from "@/features/blog/components/post/blog-post.hero";
import { PostReadingProgressBar } from "@/features/blog/components/post/post-reading-progress-bar";
import { ScrollProgressContainer } from "@/features/common/components/animations/wrappers/scroll-progress-container";
import { Locale } from "@/features/common/types/strapi.types";
import { CMS_URL, COMPANY_NAME } from "@/misc/constants";

const BlogPostContent = dynamic(() => import("@/features/blog/components/post/blog-post-content").then((mod) => mod.BlogPostContent), { ssr: false });

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string; }>; }) => {
  const { slug } = await params;
  const [blogPost] = await getBlogPost({ slug });
  const post = blogPost?.data;

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  const metaTags: Record<string, string> = {};
  post.seo?.metaTag?.forEach(tag => {
    metaTags[tag.name] = tag.content;
  });

  const coverUrl = post.cover?.url ? `${CMS_URL}${post.cover.url}` : undefined;
  return {
    title: `${post.seo?.metaTitle || post.title} | ${COMPANY_NAME}`,
    description: post.seo?.metaDescription || post.description,
    authors: [{ name: metaTags.author || post.author?.name }],
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      images: coverUrl ? [
        {
          url: coverUrl,
          width: post.cover.width,
          height: post.cover.height,
          alt: post.cover.alternativeText || post.title,
        }
      ] : undefined,
      type: 'article',
      publishedTime: post.publishedAt || post.createdAt,
      authors: [metaTags.author || post.author?.name],
      tags: post.categories?.map(cat => cat.name) || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      images: coverUrl ? [coverUrl] : undefined,
      creator: metaTags.author || post.author?.name,
    },
  };
};

export const generateStaticParams = async () => {
  const [blogPostsSlugs] = await getBlogPostsSlugs({ locale: Locale.PL });

  return blogPostsSlugs?.data?.map((post) => ({
    slug: post.slug,
  })) || [];
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; }>; }) {
  const { slug } = await params;

  const [blogPost] = await getBlogPost({ slug });

  return <>
    <PostReadingProgressBar />
    <ScrollProgressContainer className={"relative flex min-h-[200vh] w-full flex-col overflow-hidden bg-background"}>
      <BlogPostHero
        author={blogPost?.data?.author}
        title={blogPost?.data?.title}
        description={blogPost?.data?.description}
        cover={blogPost?.data?.cover}
        createdAt={blogPost?.data?.createdAt} readingTime={5} />
      <BlogPostContent content={blogPost?.data?.blocks ?? []} />
    </ScrollProgressContainer>
  </>;
}
