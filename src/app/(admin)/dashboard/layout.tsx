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
          <div>
            <nav>navbar</nav>
            <aside>sidebar</aside>
            {children}
            <footer>footer</footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
