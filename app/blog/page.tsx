'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Blog post data
const posts = [
  {
    id: 1,
    title: "Why Next.js and Tailwind are the Ultimate Duo for Modern UI",
    category: "Web Development",
    date: "06 April 2026",
    image: "/images/Insight3.png",
  },
  {
    id: 2,
    title: "Maximizing Conversion Rates with Seamless Shopify Interfaces",
    category: "E-commerce",
    date: "06 April 2026",
    image: "/images/Insight2.png",
  },
  {
    id: 3,
    title: "When to Choose a CMS like Webflow over a Custom Code Build",
    category: "Technology",
    date: "06 April 2026",
    image: "/images/Insight1.png",
  },
  {
    id: 4,
    title: "Mastering Framer Motion for React Applications",
    category: "Web Development",
    date: "08 April 2026",
    image: "/images/Insight3.png",
  },
  {
    id: 5,
    title: "The Future of 3D Interactions in the Browser",
    category: "Technology",
    date: "10 April 2026",
    image: "/images/Insight2.png",
  },
  {
    id: 6,
    title: "Building Scalable Design Systems from Scratch",
    category: "UI/UX Design",
    date: "12 April 2026",
    image: "/images/Insight1.png",
  },
  {
    id: 7,
    title: "When to Choose a CMS like Webflow over a Custom Code Build",
    category: "Technology",
    date: "06 April 2026",
    image: "/images/Insight1.png",
  },
  {
    id: 8,
    title: "Mastering Framer Motion for React Applications",
    category: "Web Development",
    date: "08 April 2026",
    image: "/images/Insight3.png",
  },
  {
    id: 9,
    title: "The Future of 3D Interactions in the Browser",
    category: "Technology",
    date: "10 April 2026",
    image: "/images/Insight2.png",
  },
  {
    id: 10,
    title: "Building Scalable Design Systems from Scratch",
    category: "UI/UX Design",
    date: "12 April 2026",
    image: "/images/Insight1.png",
  }
];

export default function Blog() {
  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Change this if you want more/less rows per page

  // Calculate the total number of pages needed
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Slice the posts array to only get the posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section id="insights" className="w-full py-24 bg-[#050505] flex justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Insights
          </h2>
          <p className="text-xl md:text-2xl text-accent/80 font-serif italic tracking-wide">
            Building Better Digital Experiences
          </p>
        </div>

        {/* --- Blog Cards Grid --- */}
        {/* Notice we are mapping over 'currentPosts' instead of 'posts' now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {currentPosts.map((post) => (
            <Link
              href={`#blog-${post.id}`}
              key={post.id}
              className="group flex flex-col bg-[#111111] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-white/15 hover:shadow-2xl hover:shadow-[#3356AF]/5"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#1a1a1a]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta Info (Category & Date) */}
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 text-xs font-medium text-gray-300 border border-white/10 rounded-md">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 font-light tracking-wide">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white leading-snug group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => {
                    setCurrentPage(pageNumber);
                    // Optional: Scroll back to top of the grid when page changes
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 text-sm md:text-base
                    ${currentPage === pageNumber
                      ? 'border border-white/20 text-white' // Active state (Circular border)
                      : 'text-gray-500 hover:text-white hover:bg-white/5' // Inactive state
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}