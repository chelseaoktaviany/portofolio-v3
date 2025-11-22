import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import "../../globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "admin page - login",
  description: "auth page",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={"antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full min-h-screen">
            <main
              className="flex flex-col row-start-2 items-center md:items-center
                sm:items-start"
            >
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
