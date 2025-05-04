'use client';

import dynamic from "next/dynamic";

import { BlogCard } from "@/features/blog/components/list/blog-card";
import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { Title } from "@/features/common/components/title";

import { type BlogPost } from "../../api/blog.types";

const BlogFilters = dynamic(() => import("./blog-filters").then(mod => mod.BlogFilters));

interface BlogCardsSectionProps {
  articles: BlogPost[];
}
export const BlogCardsSection = ({ articles }: BlogCardsSectionProps) => {
  return (
    <SectionScaleRotate
      id={"blog-cards"}
      scaleOpts={{ inputRange: [0, 1], outputRange: [0.9, 1] }}
      rotateOpts={{ inputRange: [0, 1], outputRange: [3, 0] }}
      className={"relative flex min-h-screen w-full flex-col justify-center gap-4 border-t-4 border-background-light-4 bg-background py-24 shadow-lg"}
    >
      <div className={"container grid grid-cols-12 gap-4"}>

        <div className={"col-span-12 flex flex-col gap-4 md:col-span-9"}>
          <Title type={'h2'}>Artykuły</Title>
          <div className="flex flex-col gap-16">
            {articles.map((article, index) => (
              <BlogCard
                key={`blogCard-${article.documentId}-${index}`}
                {...article}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className={"col-span-12 md:col-span-3"}>
          <BlogFilters />
        </div>
      </div>
    </SectionScaleRotate>
  );
};