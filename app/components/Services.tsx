'use client';

import React from 'react';

// The service data extracted from your design
const servicesList = [
    { title: 'UI/UX Design', skills: 'User Research | Wireframing | Prototyping' },
    { title: 'Front-End Dev', skills: 'React | Next.js | Tailwind CSS' },
    { title: 'Full-Stack Dev', skills: 'Node.js | Cloud Database | API Integration' },
    { title: 'No-Code Web Dev', skills: 'Webflow | Wix | Framer' },
    { title: 'E-Commerce Solutions', skills: 'Shopify | Custom Cart | Payments' },
    { title: 'CMS Integration', skills: 'WordPress | Sanity | Strapi' },
    { title: 'Game Development', skills: 'Unity | C# | Interactive 3D' },
    { title: 'SEO & Performance', skills: 'Technical SEO | Core Web Vitals | Analytics' },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative w-full min-h-screen  flex items-center justify-center overflow-hidden py-24"
        >

            {/* --- Repeating Grid Background Layer --- */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    // Creates the horizontal and vertical lines
                    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
                    // Sets the size of each square in the grid (e.g., 40x40 pixels)
                    backgroundSize: '80px 60px'
                }}
            />
            <div className="container mx-auto px-6 flex flex-col md:flex-row h-full max-w-7xl">

                {/* --- LEFT SIDE: Title Area --- */}
                <div className="md:w-1/3 flex items-center justify-center md:justify-start mb-16 md:mb-0 relative z-10">
                    <h2 className="text-1xl md:text-[8vw] font-bold text-accent md:text-white/5 uppercase tracking-[0.2em] whitespace-nowrap 
                          md:origin-left md:absolute md:top-1/2 md:-translate-y-1/2 select-none pointer-events-none">
                        Services
                    </h2>
                </div>

                {/* --- RIGHT SIDE: Scrolling List Area --- */}
                <div className="md:w-2/3 relative h-[60vh] md:h-[80vh] w-full flex justify-center md:justify-end">



                    {/* Scrolling Container */}
                    < div className="w-full max-w-2xl overflow-hidden relative">

                        {/* The animated track - ADDED px-4 md:px-8 to prevent clipping on hover scale */}
                        <div className="animate-scroll-y w-full px-4 md:px-8 pt-[30vh]">

                            {/* --- SEAMLESS FIX: Group 1 --- */}
                            {/* gap-16 and pb-16 must be the same so the loop is mathematically perfect */}
                            <div className="flex flex-col gap-16 pb-16">
                                {servicesList.map((service, index) => (
                                    <div
                                        key={`group1-${index}`}
                                        className="flex flex-col items-center md:items-start text-center md:text-left transition-all duration-500 hover:scale-105 origin-center md:origin-left cursor-default"
                                    >
                                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight hover:text-[#fea364] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.3em] font-light">
                                            {service.skills}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* --- SEAMLESS FIX: Group 2 (Clone) --- */}
                            <div className="flex flex-col gap-16 pb-16" aria-hidden="true">
                                {servicesList.map((service, index) => (
                                    <div
                                        key={`group2-${index}`}
                                        className="flex flex-col items-center md:items-start text-center md:text-left transition-all duration-500 hover:scale-105 origin-center md:origin-left cursor-default"
                                    >
                                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight hover:text-[#fea364] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.3em] font-light">
                                            {service.skills}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}