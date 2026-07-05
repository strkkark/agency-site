import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AGENCY_NAME } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${AGENCY_NAME} — Software, Mobile Apps & AI Solutions`,
  description:
    "We build world-class software, mobile apps, AI solutions, and digital products for startups and enterprises.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${AGENCY_NAME} — Software, Mobile Apps & AI Solutions`,
    description:
      "We build world-class software, mobile apps, AI solutions, and digital products for startups and enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-ink-900 font-body text-ink-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
