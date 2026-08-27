import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const title = "Lancer · Software studio";
const description =
  "Lancer builds websites, products, and the internal tools behind them. Fixed scope, fixed price, and you own everything at the end.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "software studio",
    "web development",
    "website redesign",
    "MVP development",
    "internal tools",
    "automation",
    "dashboards",
  ],
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
