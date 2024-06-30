import ThemeProviderContext from "@/context/theme";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Layout from "@/commons/layout";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProviderContext>
          <Layout>{children}</Layout>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
