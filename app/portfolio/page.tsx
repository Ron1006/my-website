'use client';

import React from 'react';
import Link from 'next/link';

// --- 你的真实作品集数据 ---
const projects = [
    { id: 1, title: "Eye for detail", category: "UI/UX Design and Development, Webflow", image: "/hero/hero1-mobile.png", link: "#" },
    { id: 2, title: "Del Tutto", category: "UI/UX Design and Development, Webflow", image: "/hero/hero2-mobile.png", link: "#" },
    { id: 3, title: "Equivision", category: "UI/UX Design and Development, Wix", image: "/hero/hero3-mobile.png", link: "#" },
    { id: 4, title: "Kwikshadez", category: "UI/UX Design and Development, Wordpress", image: "/hero/hero4-mobile.png", link: "#" },
    { id: 5, title: "Monsters Incoming", category: "Game Development, Unity", image: "/hero/hero5-mobile.png", link: "#" },
    { id: 6, title: "EZY-FIT", category: "UI/UX Design and Development, Shopify", image: "/hero/hero6-mobile.png", link: "#" },
    { id: 7, title: "Huawei Auto - AITO", category: "Branding, UI/UX Design", image: "/hero/hero7-mobile.png", link: "#" },
    { id: 8, title: "Royal Caribbean", category: "UI/UX Design", image: "/hero/hero8-mobile.png", link: "#" },
];

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-48 px-6 flex justify-center">

            {/* max-w-5xl 限制宽度，实现整体居中和控制图片大小 */}
            <div className="max-w-5xl w-full">

                {/* --- 页面标题 --- */}
                <div className="text-center mb-16 md:mb-24 mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Portfolio
                    </h1>
                </div>

                {/* --- 核心布局区 (原生 Flexbox 分列法) --- */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">

                    {/* 👇 左侧列 (取数组的前 4 个项目) */}
                    <div className="flex flex-col gap-10 md:gap-16 flex-1">
                        {projects.slice(0, 4).map((project) => (
                            <Link href={project.link} key={project.id} className="group flex flex-col w-full">
                                {/* 图片容器 */}
                                <div className="w-full rounded-2xl overflow-hidden mb-5 bg-[#111]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                                {/* 文本信息 */}
                                <div className="flex flex-col items-start text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-[#ff8a00] transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 text-base md:text-lg tracking-wide">
                                        {project.category}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* 👇 右侧列 (取数组的后 4 个项目) */}
                    {/* md:mt-24 是灵魂！让右列在电脑端往下坠，形成高级瀑布流 */}
                    <div className="flex flex-col gap-10 md:gap-16 flex-1 md:mt-24">
                        {projects.slice(4, 8).map((project) => (
                            <Link href={project.link} key={project.id} className="group flex flex-col w-full">
                                {/* 图片容器 */}
                                <div className="w-full rounded-2xl overflow-hidden mb-5 bg-[#111]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                                {/* 文本信息 */}
                                <div className="flex flex-col items-start text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-[#ff8a00] transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 text-base md:text-lg tracking-wide">
                                        {project.category}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}