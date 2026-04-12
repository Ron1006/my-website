"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Eye for Detail",
    desktopImage: "/hero/hero1.png",
    mobileImage: "/hero/hero1-mobile.png", // 记得在 public/hero 下放一张竖版图片
    rotate: -6
  },
  {
    id: 2,
    name: "Del Tutto",
    desktopImage: "/hero/hero2.png",
    mobileImage: "/hero/hero2-mobile.png",
    rotate: 4
  },
  {
    id: 3,
    name: "Equivision",
    desktopImage: "/hero/hero3.png",
    mobileImage: "/hero/hero3-mobile.png",
    rotate: -3
  },
  {
    id: 4,
    name: "Kwikshadez",
    desktopImage: "/hero/hero4.png",
    mobileImage: "/hero/hero4-mobile.png",
    rotate: 5
  },
  {
    id: 5,
    name: "Monsters Incoming",
    desktopImage: "/hero/hero5.png",
    mobileImage: "/hero/hero5-mobile.png",
    rotate: -2
  },
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
    <section className="relative w-full h-[300vh] bg-[#050505]" ref={containerRef}>

      {/* LAYER 1: The Blue Spherical Glow (Lowest Layer) */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(33, 71, 98, 0.35) 0%, transparent 70%)`
        }}
      />

      {/* LAYER 2: The Sticky Container (Holds everything else) */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* LAYER 3: Stardust (Transparent background so we see the Glow through it) */}
        <div
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            // REMOVED: backgroundColor: '#050505' (This was blocking the glow)
            backgroundImage: `
              radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 3px),
              radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 2px),
              radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 2px)
            `,
            backgroundSize: '550px 550px, 350px 350px, 250px 250px',
            backgroundPosition: '0 0, 40px 60px, 130px 270px'
          }}
        />

        {/* LAYER 4: Scrolling Background Title (Fixed opacity typo) */}
        <div className="absolute top-[8%] md:top-[40%] left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0">
          <div className="animate-marquee flex">
            {[1, 2, 3].map((num) => (
              <h1
                key={num}
                className="text-[10vw] font-bold text-white/80 tracking-tighter pr-20 "
              >
                Crafting Experiences • Digital Solutions • Innovative Design •
              </h1>
            ))}
          </div>
        </div>

        {/* LAYER 5: Image Stack (Z-10) */}
        <div className="relative w-[300px] md:w-[700px] h-[400px] md:h-[420px] z-10">
          {projects.map((project, index) => {
            const segmentHeight = 500;
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
                {/* 👇 2. 电脑端图片 (大于md时显示，否则隐藏) */}
                <Image
                  src={project.desktopImage}
                  alt={`${project.name} Desktop`}
                  fill
                  priority={index === 0} // 给第一张图加 priority 优化 LCP 加载速度
                  className="hidden md:block object-cover"
                />

                {/* 👇 3. 手机端图片 (默认显示，大于md时隐藏) */}
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

        {/* LAYER 6: Project Name */}
        <div className="relative mt-8 md:mt-12 h-10 w-full flex items-center justify-center z-20">
          {projects.map((p, i) => {
            // 判断当前滚动到了哪一张图片
            const isActive = scrollY >= i * 500 && scrollY < (i + 1) * 500;
            return (
              <p
                key={p.id}
                className={`absolute text-white text-lg md:text-xl tracking-[0.3em] uppercase font-light transition-all duration-500 ease-out ${isActive
                  ? "opacity-100 translate-y-0" // 激活时：显示且归位
                  : "opacity-0 translate-y-6"   // 未激活时：隐藏且往下偏移
                  }`}
              >
                {p.name}
              </p>
            );
          })}
        </div>

        <div className="mt-5 z-20 animate-in fade-in zoom-in duration-700 delay-300">
          <Link href="/portfolio" className="btn-get-in-touch scale-125 origin-center inline-block">
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
