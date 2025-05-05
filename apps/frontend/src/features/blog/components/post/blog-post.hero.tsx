'use client';

import Image from "next/image";

import dayjs from "dayjs";
import { motion } from "framer-motion";

import { MotionText, MotionTitle } from "@/features/common/components/animations/motion-wrapper-components";
import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { Text } from "@/features/common/components/text";
import { type Media } from "@/features/common/types/strapi.types";
import { CMS_URL } from "@/misc/constants";

import { type BlogPostAuthor } from "../../api/blog.types";
interface BlogPostHeroProps {
  title: string | undefined;
  description?: string | undefined;
  author: BlogPostAuthor | undefined;
  createdAt: string | undefined;
  readingTime: number | undefined;
  cover: Media | undefined;
}



export const BlogPostHero = ({
  author,
  title,
  description = '',
  cover,
  readingTime,
  createdAt,
}: BlogPostHeroProps) => {
  return (
    <SectionScaleRotate
      className={"relative flex h-screen flex-col overflow-hidden pt-24"}
    >
      <div className={`container relative w-full`}>
        <Image
          src={`${CMS_URL}${cover?.formats?.large?.url ?? ''}`}
          alt={cover?.alternativeText ?? `Image of cover ${cover?.name ?? ' of this post'}`}
          sizes={"80vw"}
          width={1920}
          height={1080}
          priority
          className={"rounded-lg object-cover"}
        />
      </div>

      <div className={"container flex w-full flex-col bg-background py-2 md:py-10"}>
        <div
          className={"mb-4 flex flex-col gap-2"}
        >
          <MotionTitle
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            type={"h1"}
            size={"h1"}
            className={"mb-4"}>
            {title}
          </MotionTitle>
          <MotionText
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
          >
            {description}
          </MotionText>
        </div>
        <span className={"my-4 h-px w-full bg-border"} />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
          className={"flex w-full flex-row justify-between"}>
          <div className={"flex items-center gap-3"}>
            <div className={"relative size-16 overflow-hidden rounded-full"}>
              <Image
                src={`${CMS_URL}${author?.avatar?.formats?.thumbnail?.url ?? ''}`}
                alt={author?.avatar?.alternativeText ?? `Image of author ${author?.name ?? ' of this post'}`}
                width={64}
                height={64}
                loading={"lazy"}
                className={"object-cover"}
              />
            </div>
            <div>
              <Text weight={"semibold"}>{author?.name}</Text>
              <Text size={"sm"} color={"muted"}>{author?.role ?? '-'}</Text>
            </div>
          </div>
          <Text color={"muted"} className={"mb-2"}>{dayjs(createdAt).format("DD MMMM YYYY")} • {readingTime} minut czytania</Text>
        </motion.div>

      </div>
    </SectionScaleRotate>
  );
};
