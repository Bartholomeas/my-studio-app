'use client';


import { useRef } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/common/ui/button";
import { Card } from "@/components/common/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/ui/form";
import { Input } from "@/components/common/ui/input";
import { Textarea } from "@/components/common/ui/textarea";

import { CursorActionType } from "@/components/common/special/cursor-handler/cursor-handler.types";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

const contactFormSchema = z.object({
  email: z.string().email(),
  title: z.string(),
  name: z.string(),
  message: z.string().max(1000),
});

export const ContactForm = () => {
  const t = useTranslations("/.contactSection");
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const contactFormRef = useRef<HTMLDivElement>(null);
  const isContactFormInView = useInView(contactFormRef, {
    once: true,
    amount: 0.8,
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return (
    <motion.div
      ref={contactFormRef}
      initial={{ opacity: 0, y: 250 }}
      animate={isContactFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 250 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        duration: 1.6

      }}
      className={"col-span-12 flex h-full flex-col md:col-span-8"}>
      <Card variant={'primary'} className={"size-full"}>
        <div className={"flex flex-col gap-2 px-6 py-4"}>

          <Title type={"h2"} size={"h1"} weight={"bold"} >
            {t("title.base")}
            <br />
            <Text as={"span"} size={"h1"} weight={"bold"} >{t("title.highlighted")}</Text>
          </Title>
          <Text size={"lg"}  >{t("form.description")}</Text>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-col gap-4 p-8"}>
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"font-bold"}>{t("form.emailLabel")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"name"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"font-bold"}>{t("form.nameLabel")}</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"title"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"font-bold"}>{t("form.titleLabel")}</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"message"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"font-bold"}>{t("form.messageLabel")}</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              data-hover={CursorActionType.SEND}
              data-hover-size={100}
              size={'lg'}
              className={"mt-4 w-full self-end bg-foreground !text-background"}
              type={"submit"}>{t("form.sendMessageButton")}</Button>
          </form>
        </Form>
      </Card>
    </motion.div>
  );
};