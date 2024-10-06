import { type ComponentProps } from "react";

import { motion } from 'framer-motion';
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CtaCircleProps extends Pick<ComponentProps<'button'>, 'onMouseEnter' | 'onMouseLeave'> {
  className?: string;
}

export const CtaCircle = ({ className, ...props }: CtaCircleProps) => {
  return <motion.button
    className={cn('group absolute right-0 bottom-0 grid aspect-square size-[140px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full transition-colors duration-700 ease-out md:size-[220px]', className)}
    {...props}
  >
    <ArrowRightIcon
      size={40}
      className={'relative z-10 text-foreground transition-all duration-700 ease-out group-hover:rotate-90'} />
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
          textLength={"314%"}
          lengthAdjust={"spacingAndGlyphs"}
        >
          Scrolluj w dół, aby dowiedzieć się więcej • Scrolluj w dół, aby dowiedzieć się więcej •
        </textPath>
      </text>
    </motion.svg>
  </motion.button>;
};