'use client';

import React, { type PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

const AppTemplate = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 100,

      }}
      animate={{
        opacity: 1,
        y: 0,

      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AppTemplate;
