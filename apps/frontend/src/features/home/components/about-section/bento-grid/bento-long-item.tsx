'use client';
import { useRef } from "react";

import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";


import { MagneticWrapper } from "@/features/common/components/special/magnetic-wrapper";
import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";
import { buttonVariants } from "@/features/common/components/ui/button";
import { Card, CardContent } from "@/features/common/components/ui/card";
import { APP_ROUTES } from "@/misc/routes";

interface BentoLongItemProps {
  title: string;
  text: string;
}

export const BentoLongItem = ({ title, text }: BentoLongItemProps) => {
  const t = useTranslations("common");

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn", bounce: 0.1, type: "spring", stiffness: 100 }}
      className={"col-span-2 h-full"}>
      <Card
        variant={"dark"}
        padding={"lg"}
        className={"relative rounded-3xl rounded-br-[100px] bg-primary "}
      >
        <CardContent className={"flex flex-col gap-4 p-0 py-6 pr-8"}>
          <Title type={"h3"} weight={"bold"} className={"text-2xl"}>
            {title}
          </Title>
          <Text size={"lg"} weight={"semibold"} color={"secondary"}>
            {text}
          </Text>
          <MagneticWrapper className={"p-0"}>
            <Link
              href={APP_ROUTES.contact}
              className={buttonVariants({ size: "lg", className: "w-fit" })}
            >
              {t("contactUs")}
            </Link>
          </MagneticWrapper>
        </CardContent>
      </Card>
    </motion.div>
  );
};
