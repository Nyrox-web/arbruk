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
  metadataBase: new URL("https://arbruk.pl"),

  title: {
    default: "ARBRUK — Usługi brukarskie | Kostka brukowa, podjazdy i tarasy",
    template: "%s | ARBRUK",
  },

  description:
    "ARBRUK oferuje profesjonalne usługi brukarskie: układanie kostki brukowej, podjazdy, tarasy, chodniki, obrzeża i prace ziemne. Darmowa wycena.",

  keywords: [
    "ARBRUK",
    "usługi brukarskie",
    "firma brukarska",
    "brukarz",
    "kostka brukowa",
    "układanie kostki brukowej",
    "podjazdy z kostki",
    "tarasy z kostki",
    "chodniki z kostki",
    "obrzeża betonowe",
    "palisady",
    "prace ziemne",
    "darmowa wycena brukarska",
  ],

  authors: [{ name: "ARBRUK" }],
  creator: "ARBRUK",
  publisher: "ARBRUK",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://arbruk.pl",
  },

  openGraph: {
    title: "ARBRUK — Profesjonalne usługi brukarskie",
    description:
      "Układanie kostki brukowej, podjazdy, tarasy, chodniki, obrzeża i prace ziemne. Skontaktuj się i otrzymaj darmową wycenę.",
    url: "https://arbruk.pl",
    siteName: "ARBRUK",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ARBRUK — Usługi brukarskie",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ARBRUK — Usługi brukarskie",
    description:
      "Profesjonalne układanie kostki brukowej, podjazdy, tarasy, chodniki i prace ziemne.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}