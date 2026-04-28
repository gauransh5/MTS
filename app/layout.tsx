import type { Metadata } from "next";
import { Albert_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Murphy Tech Studio — Web & Business Software",
  description:
    "Software studio building web apps, quoting tools, and custom business software for small businesses and service providers worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
