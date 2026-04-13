'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 移除了自带的 delay 字符串，统一在下面用 style 控制，方便毫秒级调整
const icons = [
    { id: 1, src: '/icons/about_icon1.svg', alt: 'UI/UX Design' },
    { id: 2, src: '/icons/about_icon2.svg', alt: 'Code' },
    { id: 3, src: '/icons/about_icon3.svg', alt: 'E-commerce' },
    { id: 4, src: '/icons/about_icon4.svg', alt: 'CMS/System' },
    { id: 5, src: '/icons/about_icon5.svg', alt: 'Gamepad' }
];

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 使用 IntersectionObserver 监听组件是否进入视口
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // 一旦触发就停止监听，确保动画只播放一次
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            {
                threshold: 0.3, // 当区块露出 30% 时触发动画
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 提取一个通用的动画 class 生成器
    // 默认保持 opacity-0 和 translate-y-8，当 isVisible 为 true 时才加上动画类
    const animationClass = `opacity-0 translate-y-8 ${isVisible ? 'animate-[fadeUp_1s_ease-out_forwards]' : ''}`;

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full py-32 bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden"
        >

            {/* 背景光晕装饰 */}
            <div className="absolute top-0 center w-[500px] h-[500px] bg-[#284B65]/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center z-10">

                {/* Title */}
                <h4
                    className={`text-accent font-bold tracking-widest uppercase mb-6 ${animationClass}`}
                    style={{ animationDelay: '150ms' }}
                >
                    About Me
                </h4>

                {/* Main Headline */}
                <h2
                    className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-16 ${animationClass}`}
                    style={{ animationDelay: '300ms' }}
                >
                    With over 5 years of UI/UX design experience, I engineer premium web applications and interactive games that look exactly as good as they perform.
                </h2>

                {/* --- ICONS ROW WITH SCROLL ANIMATION --- */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
                    {icons.map((icon, index) => (
                        <div
                            key={icon.id}
                            className={`
                                w-20 h-20 md:w-20 md:h-20 rounded-2xl bg-white/[0.05] border border-white/10 
                                flex items-center justify-center text-white/70 shadow-lg
                                ${animationClass}
                            `}
                            // 图标依次入场: 450ms, 600ms, 750ms...
                            style={{ animationDelay: `${450 + index * 150}ms` }}
                        >
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                width={32}
                                height={32}
                                className="w-8 h-8 md:w-10 md:h-10 opacity-70"
                            />
                        </div>
                    ))}
                </div>

                {/* Subtext */}
                <p
                    className={`max-w-2xl mx-auto text-gray-400 text-lg md:text-base leading-relaxed mb-12 ${animationClass}`}
                    style={{ animationDelay: '1200ms' }}
                >
                    I bridge the gap between aesthetics and functionality. From pixel-perfect layouts to robust Next.js and Unity builds, I treat every project as a digital masterpiece.
                </p>

                {/* Button */}
                <div
                    className={`${animationClass}`}
                    style={{ animationDelay: '1350ms' }}
                >
                    <Link
                        href="#contact"
                        className="inline-block px-8 py-3 btn-get-in-touch text-white text-sm font-medium transition-all duration-300 scale-125"
                    >
                        Let's Collaborate
                    </Link>
                </div>

            </div>
        </section>
    );
}