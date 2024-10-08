import { type ComponentProps } from "react";

import { motion } from 'framer-motion';
import { ArrowLeftIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CtaCircleProps extends Pick<ComponentProps<'button'>, 'onMouseEnter' | 'onMouseLeave'> {
  className?: string;
  text?: string;
}

export const CtaCircle = ({ className, text = "Scrolluj w dół, aby dowiedzieć się więcej", ...props }: CtaCircleProps) => {
  return <motion.button
    className={cn('group grid aspect-square size-[120px] place-content-center rounded-full transition-colors duration-700 ease-out md:size-[200px]', className)}
    {...props}
  >
    <ArrowLeftIcon
      size={40}
      className={'relative z-10 text-foreground transition-all duration-700 ease-out group-hover:-rotate-90'} />
    <span
      className={'duration-600 pointer-events-none absolute inset-0 z-0 aspect-square scale-0 rounded-full bg-primary transition-transform ease-out group-hover:scale-100'} />
    <motion.svg
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear'
      }}
      style={{
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%'
      }}
      width={200}
      height={200}
      className={'pointer-events-none absolute z-10'}
    >
      <path
        id={"circlePath"}
        d={"M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"}
        fill={"none"}
      />
      <text>
        <textPath
          href={'#circlePath'}
          fill={"black"}
          className={'fill-black text-lg font-light uppercase transition-opacity duration-700 ease-out group-hover:opacity-100'}
          startOffset={"0%"}
          textLength={"300%"}
          spacing={"auto"}
          method={"stretch"}
          lengthAdjust={"spacingAndGlyphs"}
        >
          {text}
        </textPath>
      </text>
    </motion.svg>
  </motion.button>;
};