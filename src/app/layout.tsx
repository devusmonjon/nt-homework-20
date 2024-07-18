// "use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar, Breadcrumb } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "MyStore",
  description: "MyStore - online internet store from Usmonjon Hasanov",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  keywords: [
    "Onlayn do'kon",
    "MyStore",
    "[product category]ni onlayn sotib olish",
    "[product category] sotib olish",
    "[Product name] onlayn do'koni",
    "Eng yaxshi [product category] chegirmalari",
    "Qulay narxlar bilan [product category]",
    "[Brand name] [product category]",
    "Onlayn do'kon [shahar/mintaqa]",
    "[product category] [shahar/mintaqa]da sotib olish",
    "[Shahar/mintaqa] [product category] do'koni",
    "[product category] uchun chegirmalar",
    "[product category] mahsulotlari sifati",
    "[Product category]da sotuvda",
    "[product category]ni qayerdan onlayn sotib olish mumkin",
    "Eng yaxshi [product category] do'koni",
    "[product category]ni bepul yetkazib berish bilan sotib olish",
    "MyStore [product category]",
    "MyStore izohlari",
    "MyStore onlayn savdo",
    "[product category] tendensiyalari",
    "[product category]ning eng so'nggi kelishlari",
    "[product category]ning mashhur ko'rinishlari",
    "Yoz [product category] chegirmasi",
    "Qish [product category] chegirmalari",
    "Bayram [product category] maxsuslari",
    "Eng yaxshi [product category] uchun [maqsadni aniqlash]",
    "[Product category]ning [muammoga echish] sifati",
    "[Mahsulot kategoriyasi] bilan [muayyan natijani yaxshilash]",
    "[product category] vs [rakip mahsulot]",
    "[product category] narxlari bilan solishtirish",
    "[product category] variantlari",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MyStore",
    description: "MyStore - online internet store from Usmonjon Hasanov",
    url: "https://my-store.vercel.app/",
    siteName: "MyStore",
    images: ["https://my-store.vercel.app/favicon.ico"],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "MyStore",
    card: "summary_large_image",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <Breadcrumb />
        {children}
        </body>
    </html>
  );
}
