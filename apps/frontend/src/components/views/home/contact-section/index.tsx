'use client';

import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, PhoneCall, UserRoundSearch } from "lucide-react";
import { useTranslations } from "next-intl";

import { Text } from "@/components/common/text";

import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  const t = useTranslations("/.contactSection");

  const sectionRef = useRef<HTMLDivElement>(null);

  const contactItem1Ref = useRef<HTMLDivElement>(null);
  const contactItem2Ref = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const isContactItem1InView = useInView(contactItem1Ref, { once: false, amount: 0.8 });
  const isContactItem2InView = useInView(contactItem2Ref, { once: false, amount: 0.8 });
  const isSocialInView = useInView(socialRef, { once: false, amount: 0.8 });

  return (
    <section
      ref={sectionRef}
      className={
        "relative mb-4 flex max-h-[1080px] min-h-[70vh] flex-col items-center justify-center rounded-b-3xl bg-background py-16 "
      }
    >
      <div className={"container mx-auto grid h-full grid-cols-12 items-start gap-8"}>
        <div className={"relative col-span-12 size-full md:col-span-4"}>
          <div className={"flex flex-col gap-6"}>

            <motion.div
              ref={contactItem1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isContactItem1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.1
              }}
              className={"flex gap-2"}
            >
              <Mail className={"size-6 text-foreground"} />
              <div className={"flex flex-col"}>
                <Text size={'lg'} weight={'bold'}>{t("boxes.box1.title")}</Text>
                <Text >{t("boxes.box1.text")}</Text>
                <a href={"mailto:kontakt@kurderstudio.pl"} className={"text-foreground"}>kontakt@kurderstudio.pl</a>
              </div>
            </motion.div>

            <motion.div
              ref={contactItem2Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isContactItem2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 15,
                delay: 0.2
              }}
              className={"flex gap-2"}
            >
              <PhoneCall className={"size-6 text-foreground"} />
              <div className={"flex flex-col"}>
                <Text size={'lg'} weight={'bold'}>{t("boxes.box2.title")}</Text>
                <Text >{t("boxes.box2.text")}</Text>
                <a href={"tel:+48123456789"} className={"text-foreground"}>+48 123 456 789</a>
              </div>
            </motion.div>

            <motion.div
              ref={socialRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isSocialInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.3
              }}
              className={"flex gap-2"}
            >
              <UserRoundSearch className={"size-6 text-foreground"} />
              <div className={"flex flex-col"}>
                <Text size={'lg'} weight={'bold'}>{t("boxes.box3.title")}</Text>
                <Text >{t("boxes.box3.text")}</Text>
                <div className={"mt-2 flex flex-row gap-2"}>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={isSocialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 10,
                      mass: 1,
                      delay: 0.4
                    }}
                    href={"https://www.linkedin.com/company/kurderstudio"}
                    target={"_blank"}
                    aria-label={"Linkedin"}
                    className={"flex items-center gap-2"}
                  >
                    <Linkedin className={"size-6 text-foreground"} />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={isSocialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 550,
                      damping: 8,
                      mass: 1.2,
                      delay: 0.5
                    }}
                    href={"https://www.facebook.com/kurderstudio"}
                    target={"_blank"}
                    aria-label={"Facebook"}
                    className={"flex items-center gap-2"}
                  >
                    <Facebook className={"size-6 text-foreground"} />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={isSocialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 6,
                      mass: 1.4,
                      delay: 0.6
                    }}
                    href={"https://www.instagram.com/kurderstudio"}
                    target={"_blank"}
                    aria-label={"Instagram"}
                    className={"flex items-center gap-2"}
                  >
                    <Instagram className={"size-6 text-foreground"} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
