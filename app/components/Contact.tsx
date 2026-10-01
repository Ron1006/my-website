'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const [form, setForm] = useState({ name: '', email: '', businessType: 'AI Automation', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const animationClass = `opacity-0 translate-y-8 ${isVisible ? 'animate-[fadeUp_1s_ease-out_forwards]' : ''}`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setStatus('success');
            setForm({ name: '', email: '', businessType: 'AI Automation', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="w-full py-24 bg-[#050505] flex justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-3">

                    {/* Left info card */}
                    <div
                        className={`bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-8 col-span-1 md:col-span-4 ${animationClass}`}
                        style={{ animationDelay: '150ms' }}
                    >
                        <div className="relative w-full aspect-video md:aspect-[4/3] mb-12 opacity-80">
                            <Image
                                src="/images/map.avif"
                                alt="Global Reach"
                                fill
                                className="object-contain object-top"
                            />
                        </div>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-2">Phone</h4>
                                    <p className="text-gray-400">+64 21 231 6024</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-2">Based in</h4>
                                    <p className="text-gray-400">Mount Maunganui, New Zealand. Open to remote work and relocation.</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://wa.me/64212316024?text=Hi! I saw your portfolio and would like to discuss a project."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/rong-liu-5a985127a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>

                                <a
                                    href="https://github.com/Ron1006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" clipRule="evenodd" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right form card */}
                    <div
                        className={`bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 col-span-1 md:col-span-5 ${animationClass}`}
                        style={{ animationDelay: '350ms' }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Have a project, a process you want automated, or a role to discuss? Send me a message and I&apos;ll get back to you as soon as possible.
                        </p>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-white">Message Sent!</h4>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                                            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your Email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                                            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-300">Enquiry Type</label>
                                    <div className="relative">
                                        <select
                                            value={form.businessType}
                                            onChange={(e) => setForm(f => ({ ...f, businessType: e.target.value }))}
                                            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all cursor-pointer"
                                        >
                                            <option value="AI Automation" className="bg-[#111]">AI Automation</option>
                                            <option value="Web Development" className="bg-[#111]">Web Development</option>
                                            <option value="UI/UX Design" className="bg-[#111]">UI/UX Design</option>
                                            <option value="E-commerce" className="bg-[#111]">E-commerce</option>
                                            <option value="Job Opportunity" className="bg-[#111]">Job Opportunity</option>
                                            <option value="Other" className="bg-[#111]">Other</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Type your message"
                                        required
                                        value={form.message}
                                        onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                                        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-get-in-touch w-full py-4 mt-2 text-white font-bold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Submit Now'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
