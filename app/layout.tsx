import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jadesibalde.com"),
  title: "Jade Sibalde",
  description:
    "Jade Sibalde — advocacia e consultoria jurídica nacional e internacional, com atuação no Brasil e em Portugal.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
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
