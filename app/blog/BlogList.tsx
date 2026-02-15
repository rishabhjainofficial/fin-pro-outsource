'use client';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/lib/data/blogs';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const BlogList = ({ blogs, categories, currentPage, totalPages }: { blogs: Blog[], categories: string[], currentPage: number, totalPages: number }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlePagination = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        // This triggers the server-side fetch in the parent
        router.push(`${pathname}?${params.toString()}`, { scroll: false });

        // Smooth scroll to the top of the blog grid
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-20 px-6">
            {/* 1. Header & Search Island */}
            <section className="max-w-7xl mx-auto mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-black uppercase tracking-[0.2em] text-xs mb-4 block">Knowledge Hub</span>
                        <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight">
                            Insights for the <br /><span className="text-brand-green">Modern Finance</span> Leader.
                        </h1>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate opacity-40" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-border focus:border-brand-green outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
                        <button key={cat} className="px-6 py-2.5 rounded-full border border-brand-border bg-white text-sm font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* 2. Featured Post (Main Island) */}
            <section className="max-w-7xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative bg-brand-navy rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row items-center p-4 lg:p-6"
                >
                    {/* Image Container with spacing/padding */}
                    <div className="w-full lg:w-1/2 h-80 lg:h-[480px] relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <Image
                            src={blogs[0].image}
                            alt={blogs[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle overlay to blend with the navy theme */}
                        <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Content Container */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-16 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 bg-brand-green text-white rounded-full text-xs font-bold uppercase">
                                Featured
                            </span>
                            <span className="text-white/50 text-sm font-medium italic">10 Min Read</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-brand-green transition-colors duration-300">
                            {blogs[0].title}
                        </h2>

                        <p className="text-white/60 text-lg mb-8 line-clamp-2 font-medium">
                            {blogs[0].excerpt}
                        </p>

                        <Link
                            href={`/blog/${blogs[0].slug}`}
                            className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm text-brand-green group/btn"
                        >
                            Read Full Article
                            <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* 3. Blog Grid */}
            <section className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.article
                            key={blog.id}
                            whileHover={{ y: -10 }}
                            className="bg-white border border-brand-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 flex flex-col"
                        >
                            <div className="h-56 bg-brand-surface relative">
                                <span className="absolute top-6 left-6 z-10 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-navy">
                                    {blog.category}
                                </span>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-[12px] font-bold text-brand-slate opacity-50 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                                    <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                                </div>
                                <h3 className="text-xl font-black text-brand-navy mb-4 leading-tight group-hover:text-brand-green transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-brand-slate text-sm opacity-70 mb-8 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link href={`/blog/${blog.slug}`} className="text-brand-navy font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-green transition-colors">
                                        Read More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Pagination Island */}
            <section className="max-w-7xl mx-auto mt-16">
                <div className="flex justify-center items-center gap-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePagination(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center ${currentPage === 1
                            ? 'border-brand-border text-brand-slate opacity-30 cursor-not-allowed'
                            : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                            }`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        const isActive = pageNum === currentPage;

                        return (
                            <button
                                key={i}
                                onClick={() => handlePagination(pageNum)}
                                className={`w-12 h-12 rounded-full font-black transition-all ${isActive
                                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20'
                                    : 'text-brand-navy hover:bg-brand-surface hover:border-brand-green'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    {/* Next Button */}
                    <button
                        onClick={() => handlePagination(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center ${currentPage === totalPages
                            ? 'border-brand-border text-brand-slate opacity-30 cursor-not-allowed'
                            : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                            }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default BlogList