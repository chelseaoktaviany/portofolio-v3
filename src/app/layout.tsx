import type { Metadata } from "next";
import { Archivo_Black, Pontano_Sans, Afacad } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const pontanoSans = Pontano_Sans({
  variable: "--font-pontano-sans",
  subsets: ["latin"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
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
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={` ${archivoBlack.variable} ${pontanoSans.variable}
          ${afacad.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-sans w-full min-h-screen">
            <main
              className="flex flex-col row-start-2 items-center md:items-center
                sm:items-start"
            >
              <Navbar />
              {children}
              {/* <Footer /> */}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
