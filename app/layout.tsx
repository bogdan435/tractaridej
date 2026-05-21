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
  title: "Tractări Auto Dej | Platforma Auto 24/7 | CHC AUTO GARAJE SRL",
  description:
    "Tractări auto și transport pe platforma în Dej, Cluj, Bistrița, Sălaj, Maramureș. Transport auto intern și internațional. Disponibili NON-STOP 24/7. Sunați: +40 767 121 351",
  keywords:
    "tractari auto dej, tractari cluj, platforma auto dej, asistenta rutiera dej, tractari non-stop dej, transport auto platforma, tractari gherla, tractari beclean, tractari bistrita, transport auto international, tractari 24/7",
  metadataBase: new URL("https://www.tractaridej.com"),
  alternates: { canonical: "https://www.tractaridej.com" },
  openGraph: {
    title: "Tractări Auto Dej | CHC AUTO GARAJE SRL | NON-STOP 24/7",
    description: "Tractări și transport auto intern și internațional în Dej și județele vecine. Disponibili NON-STOP 24/7.",
    url: "https://www.tractaridej.com",
    siteName: "CHC AUTO GARAJE SRL",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/START_SITE.jpeg",
        width: 1200,
        height: 630,
        alt: "Tractări Auto Dej - CHC AUTO GARAJE SRL",
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
