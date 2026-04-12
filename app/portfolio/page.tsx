

import React from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client'; // Import the client we just created

// Define the GROQ query to fetch the data
const PROJECTS_QUERY = `*[_type == "project"] | order(sortOrder asc) {
  _id,
  title,
  "slug": slug.current,
  category,
  "coverImage": coverImage.asset->url
}`;

export default async function Portfolio() {
    // 👈 Asynchronously fetch projects from the database
    const projects = await client.fetch(PROJECTS_QUERY);

    // ✅ 替换为这两行：利用 index 奇偶数交叉分配
    const leftColProjects = projects.filter((_: any, index: number) => index % 2 === 0);
    const rightColProjects = projects.filter((_: any, index: number) => index % 2 !== 0);

    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-48 px-6 flex justify-center">
            <div className="max-w-5xl w-full">

                {/* Page Title */}
                <div className="text-center mb-16 md:mb-24 mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-[fadeUp_1s_ease-out_forwards] opacity-0 translate-y-8">
                        Portfolio
                    </h1>
                </div>

                {/* Core Layout (Flexbox Columns) */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">

                    {/* Left Column */}
                    <div className="flex flex-col gap-10 md:gap-16 flex-1">
                        {leftColProjects.map((project: any, index: number) => (
                            <Link
                                href={`/portfolio/${project.slug}`}
                                key={project._id}
                                className="group flex flex-col w-full opacity-0 translate-y-12 animate-[fadeUp_1s_ease-out_forwards]"
                                style={{ animationDelay: `${200 + index * 150}ms` }}
                            >
                                <div className="w-full rounded-2xl overflow-hidden mb-5 bg-[#111]">
                                    <img
                                        src={project.coverImage || '/hero/hero1-mobile.png'}
                                        alt={project.title}
                                        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
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

                    {/* Right Column */}
                    <div className="flex flex-col gap-10 md:gap-16 flex-1 md:mt-24">
                        {rightColProjects.map((project: any, index: number) => (
                            <Link
                                href={`/portfolio/${project.slug}`}
                                key={project._id}
                                className="group flex flex-col w-full opacity-0 translate-y-12 animate-[fadeUp_1s_ease-out_forwards]"
                                style={{ animationDelay: `${400 + index * 150}ms` }}
                            >
                                <div className="w-full rounded-2xl overflow-hidden mb-5 bg-[#111]">
                                    <img
                                        src={project.coverImage || '/hero/hero2-mobile.png'}
                                        alt={project.title}
                                        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
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