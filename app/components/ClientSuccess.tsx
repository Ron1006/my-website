'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        text: "The new website completely transformed our online presence. His decade of UI design experience really shows—the site is not only beautiful but incredibly intuitive for our users.",
        author: "@James L",
        avatar: "/images/client1.png"
    },
    {
        id: 2,
        text: "Working together was a breeze. He took our complex requirements and built a blazing-fast, custom Next.js website that exceeded all expectations. Highly recommended!",
        author: "@Lisa K",
        avatar: "/images/client2.png"
    },
    {
        id: 3,
        text: "Professional, responsive, and detail-oriented. He managed the entire project from the initial mockup to the final launch flawlessly. The best developer I've worked with.",
        author: "@Kobe B",
        avatar: "/images/client3.png"
    }
];

export default function ClientSuccess() {
    return (
        <section className="w-full py-24 bg-[#050505] relative overflow-hidden">
            {/* 背景光晕装饰 */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#284B65]/60 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

                {/* --- 头部区域：标题与火箭 --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">

                    {/* 左侧文字：最先入场 */}
                    <div
                        className="max-w-xl opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]"
                        style={{ animationDelay: '150ms' }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Client Success Stories
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Discover how custom web solutions and thoughtful UI design have helped businesses grow and stand out.
                        </p>
                    </div>

                    {/* 右侧 3D 火箭：稍晚入场 */}
                    <div
                        className="hidden md:block relative opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]"
                        style={{ animationDelay: '300ms' }}
                    >
                        {/* 保持原有的漂浮动画 */}
                        <div className="animate-[bounce_4s_ease-in-out_infinite]">
                            <Image
                                src="/images/rocket.png"
                                alt="Rocket 3D icon"
                                width={160}
                                height={160}
                                className="drop-shadow-[0_20px_30px_rgba(255,138,0,0.15)]"
                            />
                        </div>
                    </div>
                </div>

                {/* --- 评价卡片网格区域：依次入场 --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 注意这里在 map 里加了 index 参数 */}
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            // 加上入场动画的 class
                            className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 flex gap-5 hover:bg-white/[0.05] transition-colors duration-300 opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]"
                            // 使用 index 动态计算延迟时间：400ms, 600ms, 800ms
                            style={{ animationDelay: `${400 + index * 200}ms` }}
                        >
                            {/* 头像 */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 relative">
                                    <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                                </div>
                            </div>

                            {/* 评价内容与作者 */}
                            <div className="flex flex-col justify-between">
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    {item.text}
                                </p>
                                <p className="text-sm font-medium text-[#ff8a00]">
                                    {item.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- 底部装饰线：最后入场 --- */}
                <div
                    className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 opacity-0 translate-y-4 animate-[fadeUp_1s_ease-out_forwards]"
                    style={{ animationDelay: '1000ms' }}
                />

            </div>
        </section>
    );
}