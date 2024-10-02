import { type ReactNode } from "react";

import { Poppins, Yrsa } from "next/font/google";

import { Footer } from "@/components/common/layout/footer";
import { Header } from "@/components/common/layout/header/header";
import { CursorHandler } from "@/components/common/special/cursor-handler";
import { LenisWrapper } from "@/lib/lenis/lenis";

import type { Metadata } from "next";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const yrsa = Yrsa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nic Nudnego Studio",
  description: "Nic Nudnego Studio",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang={"pl"}>
      <LenisWrapper>
        <body className={`${poppins.className} ${yrsa.className} antialiased`}>
          <Header />
          {children}
          <Footer />
          <CursorHandler />
        </body>
      </LenisWrapper>
    </html>
  );
};

export default RootLayout;
