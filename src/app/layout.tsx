import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const title = "Lancer · Software studio";
const description =
  "Lancer builds websites, products, and the internal tools behind them. Fixed scope, fixed price, and you own everything at the end.";

export const viewport: Viewport = {
  themeColor: "#faf3ee",
  colorScheme: "light",
};

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
        className={`${geistSans.variable} ${archivo.variable} font-sans text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
