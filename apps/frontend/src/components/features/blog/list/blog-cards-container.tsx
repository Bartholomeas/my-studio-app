'use client';

import { BlogCard, type BlogCardProps } from "@/components/features/blog/list/blog-card";

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


export const BlogCardsContainer = () => {
  return (
    <div className={"flex min-h-[50vh] w-full flex-col gap-4"}>
      {MOCK_BLOG_CARDS.map((card, index) => (
        <BlogCard key={`blogCard-${card.title}-${index}`} {...card} index={index} />
      ))}
    </div>
  );
};