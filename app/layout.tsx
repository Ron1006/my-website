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
  title: "Rong Liu — Full-Stack Developer & AI Automation Engineer",
  description: "Full-stack developer, AI automation engineer and UI/UX designer based in Mount Maunganui, New Zealand. Building AI agent workflows with n8n, Claude and Supabase, and production web apps with React and Next.js.",
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
