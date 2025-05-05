'use client';

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { SectionScaleRotate } from "@/features/common/components/animations/section-scale-rotate";
import { type ContentBlock } from "@/features/common/types/strapi.types";

const getContentComponent = (content: ContentBlock) => {
  switch (content.__component) {
    case 'shared.rich-text':
      return <BlocksRenderer content={content.body} />;
    default:
      console.log('DEFAULT::', { content });
      return null;
  }
};
interface BlogPostContentProps {
  content: ContentBlock[];
}

export const BlogPostContent = ({ content }: BlogPostContentProps) => {


  return <SectionScaleRotate
    id={"blog-post-content"}
    scaleOpts={{ inputRange: [0, 0.1], outputRange: [0.9, 1] }}
    rotateOpts={{ inputRange: [0, 0.1], outputRange: [3, 0] }}
    className={"relative flex min-h-screen w-full flex-col justify-center gap-4 bg-background-light-4 py-24"}
  >

    <div className={"container prose mx-auto lg:prose-xl"}>
      {content.map(getContentComponent)}
    </div>

  </SectionScaleRotate>;
};
