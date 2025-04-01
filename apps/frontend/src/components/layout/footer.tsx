import Link from "next/link";

import { getTranslations } from "next-intl/server";

import { COMPANY_NAME } from "@/misc/constants";
import { SOCIALS_LINKS } from "@/misc/routes";

import { Logo } from "../common/special/logo";
import { MagneticWrapper } from "../common/special/magnetic-wrapper";
import { Text } from "../common/text";
import { Title } from "../common/title";

export const Footer = async () => {
  const t = await getTranslations("footer");

  return (
    <footer
      className={"relative h-[650px]"}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={"relative bottom-0 top-[-100vh] h-[calc(100vh+650px)] w-full bg-background-dark"}>
        <div
          className={
            "container sticky top-[calc(100vh-650px)] flex h-[650px] flex-col justify-end pb-4"
          }
        >
          <div className={"flex items-center gap-4"}>
            <Logo />
            <Text weight={"bold"} size={"lg"} className={"text-primary-600"}>
              {t("slogan")}
            </Text>
          </div>
          <div className={"flex flex-wrap gap-8 pt-8"}>
            <div className={"flex flex-col gap-2"}>
              <Title className={"text-primary-600"} weight={"bold"}>
                {t("fastLinks.heading")}
              </Title>
              <MagneticWrapper className={"p-0"}>
                <Link href={"/services"}>
                  <Text color={'white'}>{t("fastLinks.blog")}</Text>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className={"p-0"}>
                <Link href={"/about"}>
                  <Text color={'white'}>{t("fastLinks.caseStudies")}</Text>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className={"p-0"}>
                <Link href={"/contact"}>
                  <Text color={'white'}>{t("fastLinks.contact")}</Text>
                </Link>
              </MagneticWrapper>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title className={"text-primary-600"} weight={"bold"}>
                {t("restrictions.heading")}
              </Title>
              <MagneticWrapper className={"p-0"}>
                <Link href={"/cookie-policy"}>
                  <Text color={'white'}>{t("restrictions.restriction")}</Text>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className={"p-0"}>
                <Link href={"/privacy-policy"}>
                  <Text color={'white'}>{t("restrictions.privacyPolicy")}</Text>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className={"p-0"}>
                <Link href={"/terms-of-service"}>
                  <Text color={'white'}>{t("restrictions.cookiePolicy")}</Text>
                </Link>
              </MagneticWrapper>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title className={"text-primary-600"} weight={"bold"}>
                {t("socials.heading")}
              </Title>
              <MagneticWrapper className={"p-0"}>
                <Link href={SOCIALS_LINKS.facebook.href}>
                  <Text color={'white'}>{SOCIALS_LINKS.facebook.label}</Text>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className={"p-0"}>
                <Link href={SOCIALS_LINKS.instagram.href}>
                  <Text color={'white'}>{SOCIALS_LINKS.instagram.label}</Text>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className={"p-0"}>
                <Link href={SOCIALS_LINKS.linkedin.href}>
                  <Text color={'white'}>{SOCIALS_LINKS.linkedin.label}</Text>
                </Link>
              </MagneticWrapper>
            </div>
          </div>
          <span className={"my-4 h-px w-full rounded-full bg-background-light"} />

          <Text color={'white'}>
            &copy; {new Date().getFullYear()} {COMPANY_NAME} {t("copyrightDisclaimer")}
          </Text>
        </div>
      </div>
    </footer>
  );
};
