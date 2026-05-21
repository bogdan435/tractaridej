import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Tractări Auto Dej | Platformă Auto 24/7 | CHC AUTO GARAGE SRL",
  description:
    "Tractări auto și transport pe platformă în Dej, Cluj, Bistrița, Sălaj și Maramureș. Transport auto intern și internațional. Disponibili NON-STOP 24/7. Sună: +40 767 121 351",
  keywords:
    "tractari auto dej, tractari cluj, platforma auto dej, asistenta rutiera dej, tractari non-stop dej, transport auto platforma, tractari gherla, tractari beclean, tractari bistrita, transport auto international, tractari 24/7, tractari auto non stop, pret platforma auto, pret tractari auto, platforma auto non stop, tractati auto, pret tractare auto, remorcari auto, asistenta auto, tractari autostrada, tractari moto, tractare masini, platforma auto ieftina, auto tractari, tractare autostrada, tractari auto autostrada a3",
  metadataBase: new URL("https://tractaridej.com"),
  alternates: { canonical: "https://tractaridej.com" },
  applicationName: "CHC AUTO GARAGE SRL",
  openGraph: {
    title: "Tractări Auto Dej | Platformă Auto 24/7 | CHC AUTO GARAGE SRL",
    description:
      "Tractări și transport auto intern și internațional în Dej și județele vecine. Disponibili NON-STOP 24/7.",
    url: "https://tractaridej.com",
    siteName: "CHC AUTO GARAGE SRL",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/START_SITE.jpeg",
        width: 1200,
        height: 630,
        alt: "Tractări Auto Dej - CHC AUTO GARAGE SRL",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Tractări Auto Dej | CHC AUTO GARAGE SRL | NON-STOP 24/7",
    description:
      "Tractări și transport auto intern și internațional în Dej. Disponibili NON-STOP 24/7. +40 767 121 351",
    images: ["/START_SITE.jpeg"],
  },
  verification: {
    google: "jsw6IV0fHBkQnpivIwU9ncp40In1iga6szRTdy8gTQA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GYWPFP36S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GYWPFP36S');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
