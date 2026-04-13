'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 博客文章数据
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
    }
];

export default function Insights() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // 使用 IntersectionObserver 监听区块是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            {
                threshold: 0.2, // 露出 20% 时触发动画
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 统一定义动画 class
    const animationClass = `opacity-0 translate-y-8 ${isVisible ? 'animate-[fadeUp_1s_ease-out_forwards]' : ''}`;

    return (
        <section id="insights" ref={sectionRef} className="w-full py-24 bg-[#050505] flex justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

                {/* --- Header Section --- */}
                <div className="text-center mb-16">
                    <h4
                        className={`text-accent font-bold tracking-widest uppercase mb-4 text-sm ${animationClass}`}
                        style={{ animationDelay: '150ms' }}
                    >
                        Insights
                    </h4>
                    <h2
                        className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${animationClass}`}
                        style={{ animationDelay: '300ms' }}
                    >
                        Thoughts on Design & Code
                    </h2>
                    {/* 使用 font-serif 和 italic 来模拟优雅的连笔字效 */}
                    <p
                        className={`text-xl md:text-2xl text-accent/80 font-serif italic tracking-wide ${animationClass}`}
                        style={{ animationDelay: '450ms' }}
                    >
                        Building Better Digital Experiences
                    </p>
                </div>

                {/* --- Blog Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
                    {posts.map((post, index) => (
                        <Link
                            href={`#blog-${post.id}`}
                            key={post.id}
                            // 加上入场动画的 class
                            className={`group flex flex-col bg-[#111111] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-white/15 hover:shadow-2xl hover:shadow-#3356AF/5 ${animationClass}`}
                            // 卡片依次入场: 600ms, 800ms, 1000ms
                            style={{ animationDelay: `${600 + index * 200}ms` }}
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

                {/* --- Footer Section --- */}
                <div className="max-w-3xl text-center flex flex-col items-center">
                    <p
                        className={`text-gray-400 text-sm md:text-base leading-relaxed mb-10 ${animationClass}`}
                        style={{ animationDelay: '1200ms' }}
                    >
                        I bridge the gap between aesthetics and functionality. From pixel-perfect layouts to robust Next.js and Unity builds, I treat every project as a digital masterpiece.
                    </p>

                    <div className={`${animationClass}`} style={{ animationDelay: '1350ms' }}>
                        <Link
                            href="#all-insights"
                            className="btn-get-in-touch inline-flex items-center justify-center px-8 py-3 scale-125 text-white text-sm font-medium transition-all duration-300"
                        >
                            Explore All Insights
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}