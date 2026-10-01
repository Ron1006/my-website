'use client';

import React from 'react';
import Image from 'next/image';

const results = [
    {
        id: 1,
        stat: "70+",
        label: "ad accounts on automated daily reporting",
        detail: "n8n, Claude and Supabase agent workflows calculate budgets and ad spend across Meta and Google Ads every day, replacing a manual process.",
        source: "Squid Group"
    },
    {
        id: 2,
        stat: "30,000+",
        label: "products compared across 3 NZ supermarkets",
        detail: "Fuzzy matching, Playwright scrapers and a nightly pg_cron pipeline keep prices current with no manual work.",
        source: "Basket NZ"
    },
    {
        id: 3,
        stat: "3 apps",
        label: "connected from contract to invoice",
        detail: "A signed HelloSign contract now triggers contract analysis, a Xero invoice and a ClickUp task automatically.",
        source: "Squid Group"
    },
    {
        id: 4,
        stat: "5+ yrs",
        label: "of UI/UX and web development",
        detail: "Production websites for NZ businesses, taken from Figma design through to a responsive live build.",
        source: "Eye For Detail, Del Tutto"
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
                            Proven Results
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Real numbers from production work for New Zealand businesses, from AI automation to full-stack platforms.
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

                {/* --- 成果数据卡片：依次入场 --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 flex flex-col hover:bg-white/[0.05] transition-colors duration-300 opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]"
                            // 使用 index 动态计算延迟时间：400ms, 600ms, 800ms, 1000ms
                            style={{ animationDelay: `${400 + index * 200}ms` }}
                        >
                            <p className="text-4xl md:text-5xl font-bold text-[#ff8a00] tracking-tight mb-2">
                                {item.stat}
                            </p>
                            <p className="text-white font-medium leading-snug mb-4">
                                {item.label}
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                                {item.detail}
                            </p>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                {item.source}
                            </p>
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