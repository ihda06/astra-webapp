import ThemeProviderContext from "@/context/theme";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/commons/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astra Webapp",
  description: "By Ihda Anwari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProviderContext>
          <Layout>{children}</Layout>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
