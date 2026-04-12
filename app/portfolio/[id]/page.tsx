import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

// The GROQ query to fetch ONE specific project by its slug
const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  title,
  category,
  link,
  description,
  location,
  year,
  services,
  "images": images[].asset->url
}`;

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    // 1. Await the params in Next.js 15
    const { id } = await params;

    // 2. Fetch the data, passing the URL 'id' as the $slug variable
    const project = await client.fetch(PROJECT_QUERY, { slug: id });

    // 3. If no project matches that URL, show a 404 page
    if (!project) {
        return notFound();
    }

    return (
        <main key={id} className="min-h-screen bg-[#050505] text-white selection:bg-[#ff8a00]/30">
            <div className="h-32" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* --- Back Button --- */}
                <div className="opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]">
                    <Link
                        href="/portfolio"
                        className="group inline-flex items-center text-gray-500 hover:text-white mb-16 transition-all duration-300"
                    >
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Portfolio
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* --- Left Side: Image Waterfall --- */}
                    <div className="w-full lg:w-3/5 space-y-10">
                        {/* We use project.images?.map to prevent errors if you forgot to upload images */}
                        {project.images?.map((img: string, index: number) => (
                            <div
                                key={index}
                                className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-[#111] opacity-0 translate-y-12 animate-[fadeUp_1s_ease-out_forwards]"
                                style={{
                                    animationDelay: `${400 + index * 200}ms`
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* --- Right Side: Text & Info --- */}
                    <div className="w-full lg:w-2/5">
                        <div className="lg:sticky lg:top-32 space-y-10">

                            {/* Title Section */}
                            <div className="opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]" style={{ animationDelay: '150ms' }}>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-gray-400 font-light mb-4">
                                    {project.category}
                                </p>

                                {/* Only render the link if you actually typed one in Sanity */}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#ff8a00] text-sm tracking-widest break-all transition-colors"
                                    >
                                        {project.link.replace('https://', '')}
                                    </a>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="w-16 h-[1px] bg-white/20 opacity-0 translate-y-4 animate-[fadeUp_1s_ease-out_forwards]" style={{ animationDelay: '300ms' }} />

                            {/* Description & Details */}
                            <div className="opacity-0 translate-y-8 animate-[fadeUp_1s_ease-out_forwards]" style={{ animationDelay: '500ms' }}>

                                {/* 👈 THIS IS NEW: Rendering Rich Text securely */}
                                <div className="text-gray-300 leading-relaxed text-lg font-light space-y-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul>li]:mb-2 [&>strong]:text-white [&>strong]:font-semibold">
                                    <PortableText value={project.description} />
                                </div>

                                <div className="grid grid-cols-2 gap-y-6 pt-10 border-t border-white/5 mt-10">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Location</p>
                                        <p className="text-sm">{project.location || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Year</p>
                                        <p className="text-sm">{project.year || 'N/A'}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Services Provided</p>
                                        <p className="text-sm">{project.services || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="h-40" />
        </main>
    );
}