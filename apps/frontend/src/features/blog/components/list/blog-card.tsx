'use client';

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import { motion, type Variants } from 'framer-motion';

import { CursorActionType } from "@/features/common/components/special/cursor-handler/cursor-handler.types";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { CMS_URL } from "@/misc/constants";

import { type BlogPost } from "../../api/blog.types";
import { BLOG_POST_URL } from "../../utils/blog.constants";

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

export interface BlogCardProps extends BlogPost {
  index: number;
}

export const BlogCard = ({
  documentId,
  slug,
  cover,
  title,
  description,
  author,
  categories,
  createdAt,
  index = 0
}: BlogCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Link
      href={`${BLOG_POST_URL}/${slug}`}
      data-hover={CursorActionType.CLICK}
      className={"flex size-full flex-row overflow-hidden rounded-lg hover:cursor-none md:h-48"}
    >
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial={"hidden"}
        animate={"visible"}
        custom={index}
        whileHover={{ translateX: 10 }}
        className={"flex size-full flex-row overflow-hidden rounded-lg bg-background md:h-48"}
      >
        <div className={"relative aspect-video h-full min-w-32 overflow-hidden"}>
          <Image
            src={`${CMS_URL}${cover.url}`}
            alt={title}
            width={250}
            height={200}
            loading={"lazy"}
            sizes={"(max-width: 768px) 150px, 250px"}
            className={"size-full object-cover transition-transform duration-500 hover:scale-105"}
          />
        </div>

        <div className={"flex flex-1 flex-col justify-between py-2 pl-4 md:pl-6"}>
          <div className={"flex flex-col gap-2"}>
            <div className={"flex flex-wrap gap-2"}>
              {categories?.map((category, index) => (
                <Text
                  key={`category-${category.slug}-${documentId}`}
                  size={"sm"}
                  weight={"medium"}
                  color={"muted"}
                  className={"text-xs tracking-wider"}
                >
                  {category?.name}{index < categories.length - 1 && " • "}
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
            <Text size={"sm"} color={"muted"} className={"line-clamp-4"}>
              {description}
            </Text>
          </div>

          <div className={"mt-auto flex items-end gap-2 pt-2"}>
            <Text size={"md"} weight={"medium"}>
              {author?.name}
            </Text>
            <Text size={"sm"} color={"muted"}>
              Stworzono {dayjs(createdAt).format("DD.MM.YYYY")}
            </Text>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};