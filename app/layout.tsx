import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jade Sibalde",
  description: "Advocacia & Consultoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppIcon />
        <Analytics />
      </body>
    </html>
  );
}
