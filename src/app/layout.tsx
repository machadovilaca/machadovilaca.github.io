import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Menu} from "@/components/menu";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "João Vilaça",
  description: "Software Engineer at Red Hat",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Menu/>
      <div className="m-5">
        {children}
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
