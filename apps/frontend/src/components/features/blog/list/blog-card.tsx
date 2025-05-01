'use client';

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, type Variants } from 'framer-motion';

import { CursorActionType } from "@/components/common/special/cursor-handler/cursor-handler.types";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const cardVariants: Variants = {
  hidden: {
    opacity: 0, y: 50
  },
  visible: (index: number) => ({
    opacity: 1, y: 0, transition: {
      duration: 0.3, ease: 'easeOut', delay: 0.15 * index
    }
  })
};

export interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  image: string;
  categories?: string[];
  href: string;
  index?: number;
}

export const BlogCard = ({
  title = "The power of Product Discovery: Ensuring success before development",
  author = "John Doe",
  date = "March 13, 2025",
  image = "/placeholder-image.jpg",
  categories = ["STARTUP", "SAAS", "PRODUCT DISCOVERY", "PRODUCT DESIGN"],
  href = "/blog/product-discovery",
  index = 0
}: BlogCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Link href={href}
      data-hover={CursorActionType.CLICK}
    >
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial={"hidden"}
        animate={"visible"}
        custom={index}
        whileHover={{ scale: 1.02 }}
        className={"flex size-full flex-row overflow-hidden md:h-48"}
      >
        <div className={"relative aspect-video h-full min-w-32 overflow-hidden"}>
          <Image
            src={image}
            alt={title}
            width={200}
            height={150}
            loading={"lazy"}
            sizes={"(max-width: 768px) 150px, 200px"}
            className={"size-full object-contain transition-transform duration-500 hover:scale-105"}
          />
        </div>

        <div className={"flex flex-1 flex-col justify-between py-2 pl-4 md:pl-6"}>
          <div className={"flex flex-col gap-2"}>
            <div className={"flex flex-wrap gap-2"}>
              {categories?.map((category, index) => (
                <Text
                  key={index}
                  size={"sm"}
                  weight={"medium"}
                  color={"muted"}
                  className={"text-xs tracking-wider"}
                >
                  {category}{index < categories.length - 1 && " • "}
                </Text>
              ))}
            </div>

            <Title
              type={"h3"}
              size={"h3"}
              weight={"semibold"}
              className={"line-clamp-2 text-lg md:text-xl"}
            >
              {title}
            </Title>
          </div>

          <div className={"mt-auto flex items-center gap-2 pt-2"}>
            <Text size={"md"} weight={"medium"}>
              {author}
            </Text>
            <Text size={"sm"} color={"muted"}>
              Article on {date}
            </Text>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};