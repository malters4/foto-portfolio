import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ImageGuard from "@/components/ImageGuard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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
  title: "Elena Malta — Photography",
  description: "Photography portfolio of Elena Malta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-mono text-[13px] text-neutral-900 lowercase">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ImageGuard />
      </body>
    </html>
  );
}
