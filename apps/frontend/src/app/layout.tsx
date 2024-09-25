import React, { type ReactNode } from "react";

import { Poppins } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { LenisWrapper } from "@/lib/lenis/lenis";

import type { Metadata } from "next";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sans',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="pl">
      <LenisWrapper>
        <body className={`${poppins.className} antialiased`}>{children}
          <Footer />
        </body>

      </LenisWrapper>
    </html>
  );
};

export default RootLayout;
