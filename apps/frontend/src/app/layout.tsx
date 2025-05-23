import { Suspense, type ReactNode } from "react";

import dynamic from "next/dynamic";
import { Manrope, Sora } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { LenisWrapper } from "@/lib/lenis/lenis";

import { Header } from "@/features/common/components/layout/header/header";
import { MousePositionProvider } from "@/features/common/components/special/cursor-handler/use-mouse-position-context";

import type { Metadata } from "next";

import "./globals.css";

const CursorHandler = dynamic(() =>
  import("@/features/common/components/special/cursor-handler").then((res) => res.CursorHandler),
);
const Footer = dynamic(() => import("@/features/common/components/layout/footer").then((res) => res.Footer));

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
  title: "Kurde Studio",
  description: "Kurde Studio",
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
              <main className={"relative"}>
                <Suspense fallback={<div>Loading...</div>}>
                  {children}
                </Suspense>
              </main>
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
