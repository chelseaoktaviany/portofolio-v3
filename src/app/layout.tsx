import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Archivo_Black,
  Pontano_Sans,
  Afacad,
  Gowun_Dodum,
} from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "../components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const pontanaSans = Pontano_Sans({
  variable: "--font-pontano-sans",
  subsets: ["latin"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "chel.dev",
  description: "chelseaoktaviany's personal portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}
          ${archivoBlack.variable} ${pontanaSans.variable} ${afacad.variable}
          ${gowunDodum.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-sans w-full min-h-screen">
            <main
              className="bg-radial from-[#e8e8e8] to-[#f4f4f5] to-100%
                dark:from-[#151515] dark:to-[#050505] dark:to-100% flex flex-col
                row-start-2 items-center md:items-center sm:items-start"
            >
              <Header />
              {children}
              {/* <Footer /> */}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
