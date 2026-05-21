import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tractări Auto Dej | CHC AUTO GARAJE SRL | +40 767 121 351",
  description:
    "Servicii de tractări și transport auto intern și internațional în Dej și județul Cluj. Disponibili 24/7. Sunați acum: +40 767 121 351",
  keywords:
    "tractari dej, tractari cluj, transport auto dej, tractari auto, platforma transport auto, tractari 24/7",
  metadataBase: new URL("https://www.tractaridej.com"),
  alternates: { canonical: "https://www.tractaridej.com" },
  openGraph: {
    title: "Tractări Auto Dej | CHC AUTO GARAJE SRL",
    description: "Servicii de tractări și transport auto intern și internațional. Disponibili 24/7.",
    url: "https://www.tractaridej.com",
    siteName: "CHC AUTO GARAJE SRL",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/START_SITE.jpeg",
        width: 1200,
        height: 630,
        alt: "CHC AUTO GARAJE SRL - Tractări Dej",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
