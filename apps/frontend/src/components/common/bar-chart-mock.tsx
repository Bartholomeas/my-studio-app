'use client';

import clsx from "clsx";
import { motion } from 'framer-motion';

import { Text } from "./text";

const mockData = [
  { value: 23, label: 'A' },
  { value: 29, label: 'B' },
  { value: 38, label: 'C' },
  { value: 45, label: 'D' },
  { value: 40, label: 'E' },
  { value: 35, label: 'F' },
  { value: 45, label: 'G' },
  { value: 55, label: 'H' },
  { value: 90, label: 'MY' },
];

export const BarChartMock = () => {
  return (
    <div className={"flex size-full min-h-40 content-end items-end justify-between gap-2 self-end px-4"}>
      {mockData.map((item, index) => {
        const isPrimary = index === mockData.length - 1;
        return <div key={`barChartMock-${index}`} className={"flex h-full flex-col items-center justify-end"}>
          <motion.div
            className={
              clsx("h-full w-[clamp(10px,1rem,3rem)] origin-bottom rounded-full", {
                "bg-foreground-muted": !isPrimary,
                "bg-primary": isPrimary
              })}
            initial={{ height: 0 }}
            animate={{
              height: `${item.value}%`,
              scaleY: [1, 1 * item.value / 100, 1]
            }}
            transition={{
              height: {
                duration: 1.8,
                ease: "easeOut",
                delay: index * 0.2
              },
              scaleY: {
                repeat: Infinity,
                duration: 8 + index * 0.2,
                ease: "easeInOut",
                delay: index * 0.3
              }
            }}
          />
          <Text
            as={"span"}
            className={clsx("mt-2 text-xs text-foreground-muted", {
              "text-primary": isPrimary
            })}>{item.label}</Text>
        </div>;
      })}
    </div>
  );
};
