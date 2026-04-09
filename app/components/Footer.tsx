"use client";

import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* TOP SECTION: Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold mb-4 text-white">Automated Weekly Insights</h2>
            <p className="text-gray-400 leading-relaxed">
              Join my automated weekly newsletter where I share UI design tips, Next.js development insights, and behind-the-scenes looks at my latest projects.
            </p>
          </div>

          <form className="flex flex-col gap-4 w-full md:w-80" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors"
            />
            <button
              type="submit"
              className="btn-get-in-touch w-full  px-6 py-3 text-sm text-white hover:border-gray-500 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* MIDDLE SECTION: Links and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Brand & Location */}
          <div className="flex flex-col gap-4">
            <Image
              src="/r-logo.png"
              alt="R Logo"
              width={48}
              height={48}
              className="mb-2"
            />
            <p className="text-sm text-gray-400">Mount Maunganui, NZ — Working Worldwide</p>
            <a href="mailto:Ronpark.liu01@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
              Ronpark.liu01@gmail.com
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium mb-2">Pages</h3>
              <Link href="/#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium mb-2">Social</h3>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-600">
          <p>© 2026 Rong Liu All Rights Reserved.</p>
          <p>Designed & Built with Next.js and Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
