'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InsightDetail() {
    // 在实际开发中，这里通常会通过 params.id 从数据库或 API 获取文章数据
    // 这里我们先写死你截图里的数据用于展示
    const post = {
        title: "What is Technical SEO? Best Practices and a Checklist",
        category: "Keyword Research",
        date: "March 4, 2024",
        image: "/images/Insight1.png", // 替换为你实际的火箭图片路径
    };

    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">

            {/* --- Meta & Title Section --- */}
            <header className="max-w-4xl mx-auto px-6 text-center mb-16">
                {/* Meta tags */}
                <div className="flex justify-center items-center gap-4 text-sm text-gray-400 mb-8">
                    <span className="px-4 py-1.5 border border-white/20 rounded-full bg-white/5">
                        {post.category}
                    </span>
                    <span>{post.date}</span>
                </div>

                {/* H1 Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    {post.title}
                </h1>
            </header>

            {/* --- Hero Image Section --- */}
            <div className="max-w-5xl mx-auto px-6 mb-16">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                </Link>

                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-[#111] shadow-[0_0_40px_rgba(51,86,175,0.1)]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority // 优先加载首图
                    />
                </div>
            </div>

            {/* --- Article Content Section --- */}
            <article className="max-w-3xl mx-auto px-6">

                {/* Section 1 */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    Keyword Research & Video Topic Selection
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    In early 2025, Alex, a small YouTube creator, struggled to grow his channel. He was passionate about tech reviews but barely gained views. Frustrated, he decided to crack the YouTube SEO code, starting with keyword research and topic selection. Instead of guessing topics, Alex used tools like TubeBuddy, VidIQ, and Google Trends to find low-competition, high-search-volume keywords. He discovered that "Best Budget AI Laptops 2025" had high search interest but fewer competitors.
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-white">
                    Optimizing Your Video for SEO
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                    Your service page should provide clear and comprehensive details about your offerings. Go beyond basic descriptions and highlight:
                </p>

                {/* Bullet List */}
                <ul className="list-disc list-outside ml-6 text-gray-400 space-y-3 text-lg marker:text-gray-600">
                    <li>
                        <strong className="text-white">Title:</strong> Use target keywords + compelling hooks.
                    </li>
                    <li>
                        <strong className="text-white">Description:</strong> 250+ words with LSI keywords, timestamps & links.
                    </li>
                    <li>
                        <strong className="text-white">Tags:</strong> Add relevant tags to boost discoverability.
                    </li>
                    <li>
                        <strong className="text-white">Captions & Subtitles:</strong> Improve SEO & accessibility.
                    </li>
                    <li>
                        <strong className="text-white">Thumbnails:</strong> High-contrast, emotional, readable text for better CTR.
                    </li>
                </ul>

            </article>
        </main>
    );
}