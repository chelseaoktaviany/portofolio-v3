import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import "../../globals.css";

export const metadata: Metadata = {
  title: "chel.dev - admin page",
  description: "CMS for portofolio",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={"antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-sans w-full min-h-screen">
            <main
              className="flex flex-col row-start-2 items-center md:items-center
                sm:items-center"
            >
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
