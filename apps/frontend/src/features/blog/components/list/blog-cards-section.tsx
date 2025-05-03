'use client';

import dynamic from "next/dynamic";

import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { Title } from "@/features/common/components/title";
import { BlogCard, type BlogCardProps } from "@/features/blog/components/list/blog-card";

const BlogFilters = dynamic(() => import("./blog-filters").then(mod => mod.BlogFilters));

const MOCK_BLOG_CARDS: BlogCardProps[] = [
  {
    title: "The power of Product Discovery: Ensuring success before development",
    author: "John Doe",
    date: "March 13, 2025",
    image: "/pic1.webp",
    href: "/blog/product-discovery"
  },
  {
    title: "The power of Product Discovery: Ensuring success before development",
    author: "John Doe",
    date: "March 13, 2025",
    image: "/pic1.webp",
    href: "/blog/product-discovery"
  },
  {
    title: "The power of Product Discovery: Ensuring success before development",
    author: "John Doe",
    date: "March 13, 2025",
    image: "/pic1.webp",
    href: "/blog/product-discovery"
  }
];


export const BlogCardsSection = () => {
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
          {MOCK_BLOG_CARDS.map((card, index) => (
            <BlogCard key={`blogCard-${card.title}-${index}`} {...card} index={index} />
          ))}
        </div>
        <div className={"col-span-12 md:col-span-3"}>
          <BlogFilters />
        </div>
      </div>
    </SectionScaleRotate>
  );
};