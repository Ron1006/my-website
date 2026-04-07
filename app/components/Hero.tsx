"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, name: "Del Tutto", image: "/hero/hero1.jpg", rotate: -6 },
  { id: 2, name: "Quantum Leap", image: "/hero/hero2.jpg", rotate: 4 },
  { id: 3, name: "Neon Nights", image: "/hero/hero3.jpg", rotate: -3 },
  { id: 4, name: "Solar Symphony", image: "/hero/hero4.jpg", rotate: 5 },
  { id: 5, name: "Echo Chamber", image: "/hero/hero5.jpg", rotate: -2 },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full h-[300vh] bg-[#050505]"
      ref={containerRef}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* 背景标题 */}
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold text-white/5 whitespace-nowrap z-0">
          CRAFTING EXPERIENCES
        </h1>

        {/* 图片堆叠区域 */}
        <div className="relative w-[300px] md:w-[700px] h-[200px] md:h-[420px] z-10 ">
          {projects.map((project, index) => {
            // --- 核心逻辑：分段计算 ---
            // 假设每张图片在滚动 400px 后完成滑动
            const segmentHeight = 500;
            const startScroll = index * segmentHeight;
            const endScroll = (index + 1) * segmentHeight;

            // 计算当前图片在自己片段内的进度 (0 到 1)
            let progress = (scrollY - startScroll) / segmentHeight;
            progress = Math.min(Math.max(progress, 0), 1); // 限制在 0-1 之间

            // 只有当进度大于 0 时，才开始向上滑动
            // 滑动距离为负值，-1000px 确保它完全飞出屏幕
            const translateY = progress * -1000;

            return (
              <div
                key={project.id}
                className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl will-change-transform"
                style={{
                  zIndex: projects.length - index,
                  transform: `translateY(${translateY}px) rotate(${project.rotate}deg)`,
                  // 当图片完全滑出后，隐藏它以优化性能
                  opacity: progress === 1 ? 0 : 1,
                  transition: "transform 0.1s ease-out", // 增加一点平滑感
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* 当前项目名称显示 */}
        <div className="mt-20 h-10 flex items-center justify-center">
          {/* 逻辑：根据滚动距离显示对应的项目名称 */}
          {projects.map((p, i) => {
            const isActive = scrollY >= i * 500 && scrollY < (i + 1) * 500;
            return (
              isActive && (
                <p
                  key={p.id}
                  className="text-white tracking-[0.3em] uppercase font-light animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  {p.name}
                </p>
              )
            );
          })}
        </div>

        <div className="mt-5 animate-in fade-in zoom-in duration-700 delay-300">
          <Link href="#contact" className="btn-get-in-touch">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
