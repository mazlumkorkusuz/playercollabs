import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const body = Onest({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Player Collabs — Where Players Meet Opportunity.",
  description: "Player Collabs helps game studios collaborate with content creators across every platform.",
  icons: { icon: "/images/logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
