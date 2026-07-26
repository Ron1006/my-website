import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rong Liu — Portfolio",
  description: "UI/UX designer and full-stack developer based in New Zealand. Building premium web applications, e-commerce solutions, and interactive games.",
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
      {/* Added global dark background and white text here */}
      <body className="min-h-full flex flex-col text-white">
        {/* --- NAVIGATION BAR --- */}
        <Navbar />
        {/* --- END NAVIGATION BAR --- */}

        {/* This is where your page content gets injected */}
        {children}

        {/* --- FOOTER --- */}
        <Footer />
      </body>
    </html>
  );
}
