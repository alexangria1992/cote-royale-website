import type { Metadata } from "next";
import { Raleway, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${gambarino.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
