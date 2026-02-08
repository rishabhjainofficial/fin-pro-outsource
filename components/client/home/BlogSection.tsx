'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, Newspaper } from 'lucide-react';

const blogs = [
    {
        id: 1,
        title: "Navigating the New 2026 Tax Regulations for Small Businesses",
        excerpt: "Understand the critical shifts in tax law this year and how they impact your bottom line. Our experts break down the complex jargon into actionable steps.",
        date: "Feb 5, 2026",
        readTime: "6 min read",
        category: "Tax Strategy",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "Why Virtual CFO Services are the Future of Scaling Startups",
        excerpt: "Strategic financial leadership shouldn't be a luxury. Discover how fractional CFOs drive growth.",
        date: "Jan 28, 2026",
        readTime: "4 min read",
        category: "Leadership",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        featured: false
    }
];

const BlogSection = () => {
    return (
        <section className="w-full px-4 py-24 bg-brand-surface">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-green/20 mb-4">
                            <Newspaper size={14} className="text-brand-green" />
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Industry Insights</span>
                        </div> */}
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-none">
                            Financial <span className="text-brand-green italic">Intelligence.</span>
                        </h2>
                    </div>
                    <Link href="/blog" className="group flex items-center gap-2 text-brand-navy font-bold border-b-2 border-brand-border hover:border-brand-green transition-all pb-1">
                        View All Articles <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`group flex flex-col bg-brand-surface rounded-5xl overflow-hidden border border-brand-border hover:bg-white hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 ${post.featured ? 'lg:col-span-2 lg:flex-row' : 'col-span-1'
                                }`}
                        >
                            {/* Image Container */}
                            <div className={`relative overflow-hidden ${post.featured ? 'lg:w-1/2 min-h-[300px]' : 'h-64'}`}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-navy shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className={`p-8 md:p-10 flex flex-col justify-between ${post.featured ? 'lg:w-1/2' : 'flex-1'}`}>
                                <div>
                                    <div className="flex items-center gap-4 text-brand-slate text-xs font-bold mb-4 opacity-60">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h3 className={`font-bold text-brand-navy leading-tight mb-4 group-hover:text-brand-green transition-colors ${post.featured ? 'text-3xl md:text-4xl' : 'text-2xl'
                                        }`}>
                                        {post.title}
                                    </h3>
                                    <p className="text-brand-slate leading-relaxed line-clamp-3 mb-8">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-navy font-black text-xs uppercase tracking-[0.2em] group/link">
                                    Read Article
                                    <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center group-hover/link:bg-brand-green transition-colors">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;