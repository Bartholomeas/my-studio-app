import { type ReactNode } from "react";

import dynamic from "next/dynamic";
import { Manrope, Sora } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { MousePositionProvider } from "@/components/common/special/cursor-handler/use-mouse-position-context";
import { Header } from "@/components/layout/header/header";
import { LenisWrapper } from "@/lib/lenis/lenis";

import type { Metadata } from "next";

import "./globals.css";

const CursorHandler = dynamic(() =>
  import("@/components/common/special/cursor-handler").then((res) => res.CursorHandler),
);
const Footer = dynamic(() => import("@/components/layout/footer").then((res) => res.Footer));

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const serif = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nic Nudnego Studio",
  description: "Nic Nudnego Studio",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <LenisWrapper>
        <body className={`${sans.className} ${serif.className} antialiased`}>
          <MousePositionProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              <main className={"relative"}>{children}</main>
              <Footer />
              <CursorHandler />
            </NextIntlClientProvider>
          </MousePositionProvider>
        </body>
      </LenisWrapper>
    </html>
  );
};

export default RootLayout;
