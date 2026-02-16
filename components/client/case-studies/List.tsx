'use client';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight, BookSearch } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/lib/data/caseStudies';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const List = ({ caseStudies, currentPage, totalPages }: { caseStudies: CaseStudy[], currentPage: number, totalPages: number }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get the current active category from the URL
    const activeCategory = searchParams.get('category') || 'All';

    const updateQuery = (newParams: Record<string, string | number>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(newParams).forEach(([key, value]) => {
            params.set(key, value.toString());
        });

        router.push(`${pathname}?${params.toString()}`, { scroll: false });

        // Scroll to the grid top instead of the very top of the page
        const gridElement = document.getElementById('blog-grid');
        if (gridElement) {
            gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handlePagination = (pageNumber: number) => {
        updateQuery({ page: pageNumber });
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-20 px-6">
            <section className="max-w-7xl mx-auto mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy border border-brand-navy/20">
                            <BookSearch size={14} className="text-brand-green fill-brand-green" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">Case Studies</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight">
                            Real Results, <br /><span className="text-brand-green">Real Businesses.</span>
                        </h1>
                    </div>
                    {/* <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate opacity-40" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            // PRO TIP: Add a 'debounce' function here for the search input
                            className="w-full pl-12 pr-6 py-4 rounded-2xl border border-brand-border focus:border-brand-green outline-none transition-all shadow-sm text-brand-slate"
                        />
                    </div> */}
                </div>
            </section>

            {/* Featured Post (Ensure blogs[0] exists) */}
            {caseStudies.length > 0 && currentPage === 1 && (
                <section className="max-w-7xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group relative bg-brand-navy rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row items-center p-4 lg:p-6"
                    >
                        <div className="w-full lg:w-1/2 h-80 lg:h-[480px] relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                            <Image
                                src={caseStudies[0].image}
                                alt={caseStudies[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority // High priority for LCP
                            />
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        <div className="w-full lg:w-1/2 p-8 lg:p-16 text-white">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-brand-green text-white rounded-full text-xs font-bold uppercase">Featured</span>
                                <span className="text-white/50 text-sm font-medium italic">Expert Insight</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-brand-green transition-colors duration-300">
                                {caseStudies[0].title}
                            </h2>
                            <p className="text-white/60 text-lg mb-8 line-clamp-2 font-medium">
                                {caseStudies[0].excerpt}
                            </p>
                            <Link href={`/case-studies/${caseStudies[0].slug}`} className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm text-brand-green group/btn">
                                Read Full Article <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Main Blog Grid */}
            <section id="blog-grid" className="max-w-7xl mx-auto">
                {caseStudies.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((caseStudy) => (
                            <motion.article
                                key={caseStudy.id}
                                whileHover={{ y: -10 }}
                                className="bg-white border border-brand-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 flex flex-col"
                            >
                                <div className="h-56 bg-brand-surface relative overflow-hidden">
                                    <span className="absolute top-6 left-6 z-10 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-navy">
                                        {caseStudy.category}
                                    </span>
                                    <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" />
                                </div>
                                <div className="p-8 grow flex flex-col">
                                    <div className="flex items-center gap-4 text-[12px] font-bold text-brand-slate opacity-50 mb-4">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {caseStudy.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {caseStudy.author}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-brand-navy mb-4 leading-tight group-hover:text-brand-green transition-colors">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="text-brand-slate text-sm opacity-70 mb-8 line-clamp-3">
                                        {caseStudy.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={`/case-studies/${caseStudy.slug}`} className="text-brand-navy font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-green transition-colors">
                                            Read More <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white border border-brand-border rounded-[3rem]">
                        <h3 className="text-2xl font-black text-brand-navy">No articles found.</h3>
                        <p className="text-brand-slate mt-2">Try adjusting your filters or search query.</p>
                    </div>
                )}
            </section>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <section className="max-w-7xl mx-auto mt-16 flex justify-center items-center gap-2">
                    <button
                        onClick={() => handlePagination(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center ${currentPage === 1 ? 'border-brand-border text-brand-slate opacity-30 cursor-not-allowed' : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                            }`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePagination(i + 1)}
                            className={`w-12 h-12 rounded-full font-black transition-all ${i + 1 === currentPage ? 'bg-brand-green text-white shadow-lg' : 'text-brand-navy hover:bg-brand-surface'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePagination(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center ${currentPage === totalPages ? 'border-brand-border text-brand-slate opacity-30 cursor-not-allowed' : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                            }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </section>
            )}
        </div>
    );
}

export default List;