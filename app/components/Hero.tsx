"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, name: "Eye for Detail", desktopImage: "/hero/hero1.png", mobileImage: "/hero/hero1-mobile.png", rotate: -6 },
  { id: 2, name: "Del Tutto", desktopImage: "/hero/hero2.png", mobileImage: "/hero/hero2-mobile.png", rotate: 4 },
  { id: 3, name: "Equivision", desktopImage: "/hero/hero3.png", mobileImage: "/hero/hero3-mobile.png", rotate: -3 },
  { id: 4, name: "Kwikshadez", desktopImage: "/hero/hero4.png", mobileImage: "/hero/hero4-mobile.png", rotate: 5 },
  { id: 5, name: "Monsters Incoming", desktopImage: "/hero/hero5.png", mobileImage: "/hero/hero5-mobile.png", rotate: -2 },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [segmentHeight, setSegmentHeight] = useState(800); // 默认一个大概的屏幕高度兜底

  useEffect(() => {
    // 客户端渲染后，获取真实的设备屏幕高度
    setSegmentHeight(window.innerHeight);
    const handleResize = () => setSegmentHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 监听内部容器的滚动，而不是整个 window
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

  return (
    // 外层限制为刚好一屏高 (100dvh 完美适配移动端浏览器的地址栏缩放)
    <section className="relative w-full h-[100dvh] bg-[#050505]">

      {/* 隐藏滚动条让体验更像一个 App */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 👇 核心魔法：手机端开启 snap 强制吸附，电脑端 md:snap-none 关闭吸附 */}
      <div
        className="w-full h-full overflow-y-auto snap-y snap-mandatory md:snap-none no-scrollbar scroll-smooth"
        onScroll={handleScroll}
      >
        {/* 内部撑开总高度：5个项目 * 每个1屏幕高 */}
        <div
          className="relative w-full"
          style={{ height: `${projects.length * 100}dvh` }}
        >

          {/* LAYER 2: 粘性容器 (永远贴在屏幕上) */}
          <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center pointer-events-none">

            {/* LAYER 1: 背景光晕 */}
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(33, 71, 98, 0.35) 0%, transparent 70%)` }}
            />

            {/* LAYER 3: 星尘特效 */}
            <div
              className="absolute inset-0 z-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `
                  radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 3px),
                  radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 2px),
                  radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 2px)
                `,
                backgroundSize: '550px 550px, 350px 350px, 250px 250px',
                backgroundPosition: '0 0, 40px 60px, 130px 270px'
              }}
            />

            {/* LAYER 4: 跑马灯背景 */}
            <div className="absolute top-[8%] md:top-[40%] left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0">
              <div className="animate-marquee flex">
                {[1, 2, 3].map((num) => (
                  <h1 key={num} className="text-[10vw] font-bold text-white/80 tracking-tighter pr-20">
                    Crafting Experiences • Digital Solutions • Innovative Design •
                  </h1>
                ))}
              </div>
            </div>

            {/* LAYER 5: 卡片堆叠层 (允许点击) */}
            <div className="relative w-[300px] md:w-[700px] h-[400px] md:h-[420px] z-10 pointer-events-auto">
              {projects.map((project, index) => {
                // 基于真实的屏幕高度计算动画进度
                const startScroll = index * segmentHeight;
                let progress = (scrollY - startScroll) / segmentHeight;
                progress = Math.min(Math.max(progress, 0), 1);
                const translateY = progress * -1000;

                return (
                  <div
                    key={project.id}
                    className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl will-change-transform"
                    style={{
                      zIndex: projects.length - index,
                      transform: `translateY(${translateY}px) rotate(${project.rotate}deg)`,
                      opacity: progress === 1 ? 0 : 1,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <Image
                      src={project.desktopImage}
                      alt={`${project.name} Desktop`}
                      fill
                      priority={index === 0}
                      className="hidden md:block object-cover"
                    />
                    <Image
                      src={project.mobileImage}
                      alt={`${project.name} Mobile`}
                      fill
                      priority={index === 0}
                      className="block md:hidden object-cover"
                    />
                  </div>
                );
              })}
            </div>

            {/* LAYER 6: 项目名称切换 */}
            <div className="relative mt-8 md:mt-12 h-10 w-full flex items-center justify-center z-20">
              {projects.map((p, i) => {
                // 使用 Math.round 让文字在滑动到一半时精确切换
                const isActive = Math.round(scrollY / segmentHeight) === i;
                return (
                  <p
                    key={p.id}
                    className={`absolute text-white text-lg md:text-xl tracking-[0.3em] uppercase font-light transition-all duration-500 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      }`}
                  >
                    {p.name}
                  </p>
                );
              })}
            </div>

            <div className="mt-5 z-20 animate-in fade-in zoom-in duration-700 delay-300 pointer-events-auto">
              <Link href="/portfolio" className="btn-get-in-touch scale-125 origin-center inline-block">
                Portfolio
              </Link>
            </div>

          </div>

          {/* LAYER 7: 隐形吸附锚点 */}
          {/* 这5个透明盒子负责在手机端“拦截”用户的惯性滑动，强制每次只停在整屏位置 */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col pointer-events-none">
            {projects.map((p) => (
              <div key={p.id} className="w-full h-[100dvh] snap-start" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}