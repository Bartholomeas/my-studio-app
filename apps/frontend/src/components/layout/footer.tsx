import Link from "next/link";

import { getTranslations } from "next-intl/server";

import { COMPANY_NAME } from "@/misc/constants";
import { SOCIALS_LINKS } from "@/misc/routes";

import { Logo } from "../common/special/logo";
import { Text } from "../common/text";
import { Title } from "../common/title";

export const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer
      className={"relative h-[650px]"}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={"relative bottom-0 top-[-100vh] h-[calc(100vh+650px)] w-full bg-primary"}>
        <div
          className={
            "container sticky top-[calc(100vh-650px)] flex h-[650px] flex-col justify-end pb-4"
          }
        >
          <div className={"flex flex-wrap gap-8 pt-8"}>
            <div className={"flex flex-col gap-4"}>
              <Logo />
              <Text>{t('slogan')}</Text>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title>{t('fastLinks.heading')}</Title>
              <Link href={"/services"}>
                <Text>{t('fastLinks.blog')}</Text>
              </Link>
              <Link href={"/about"}>
                <Text>{t('fastLinks.caseStudies')}</Text>
              </Link>
              <Link href={"/contact"}>
                <Text>{t('fastLinks.contact')}</Text>
              </Link>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title>{t('restrictions.heading')}</Title>
              <Link href={"/cookie-policy"}>
                <Text>{t('restrictions.restriction')}</Text>
              </Link>
              <Link href={"/privacy-policy"}>
                <Text>{t('restrictions.privacyPolicy')}</Text>
              </Link>
              <Link href={"/terms-of-service"}>
                <Text>{t('restrictions.cookiePolicy')}</Text>
              </Link>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title>{t('socials.heading')}</Title>
              <Link href={SOCIALS_LINKS.facebook.href}>
                <Text>{SOCIALS_LINKS.facebook.label}</Text>
              </Link>
              <Link href={SOCIALS_LINKS.instagram.href}>
                <Text>{SOCIALS_LINKS.instagram.label}</Text>
              </Link>
              <Link href={SOCIALS_LINKS.linkedin.href}>
                <Text>{SOCIALS_LINKS.linkedin.label}</Text>
              </Link>
            </div>
          </div>
          <div className={"border-t border-black pt-4"}>
            <Text>&copy; {new Date().getFullYear()} {COMPANY_NAME} {t('copyrightDisclaimer')}</Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
