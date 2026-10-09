import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DooNext",
  description: "Next-generation software solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}