'use client';

import { motion } from 'framer-motion';

export const DrawingPath = () => {
  return (
    <div className={"relative size-full"}>
      <motion.svg
        preserveAspectRatio={"none"}
        className={"mx-auto size-full"}
        viewBox={"0 0 660 473.5"}
        xmlns={"http://www.w3.org/2000/svg"}
        fill={"none"}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 1.5
          }}
          strokeWidth={8}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          d={"M1 449.5C44.6667 420.167 244 97 244 97C244 97 -75.1084 -48 43.5002 172C167.5 402 277 455 307.5 459C331.9 462.2 303.667 155.333 286.5 1.5C536.5 42.5 660 273.5 380 473.5"}
          className={"stroke-primary-400"}
          fill={"none"}
          vectorEffect={"non-scaling-stroke"}
        />
      </motion.svg>
    </div>
  );
};
