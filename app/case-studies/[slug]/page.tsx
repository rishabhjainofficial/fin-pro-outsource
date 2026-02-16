import { getCaseStudyBySlug } from '@/lib/api/caseStudies';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Clock, MoveRight } from 'lucide-react';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);

    return {
        title: caseStudy?.title,
        description: caseStudy?.description,
        keywords: caseStudy?.meta?.keywords,
        openGraph: {
            title: caseStudy?.title,
            description: caseStudy?.description,
            url: `/case-studies/${slug}`,
            siteName: "Gapbridge Outsource",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Case Studies",
                },
            ],
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            title: caseStudy?.title,
            description: caseStudy?.description,
            card: 'summary_large_image',
            images: ["/og-image.jpg"],
        },
        icons: {
            icon: '/favicon.ico',
        },
    }
};

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);

    if (!caseStudy) notFound();

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Ultra-Bold Hero Header */}
            <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">
                    <div>
                        <Link href="/case-studies" className="inline-flex items-center gap-2 text-brand-green font-black uppercase tracking-[0.2em] text-xs mb-8 hover:gap-4 transition-all">
                            <ArrowLeft size={16} /> Back to Insights
                        </Link>
                        <h1 className="text-5xl md:text-8xl font-black text-brand-navy leading-[0.9] tracking-tighter">
                            {caseStudy.title}
                        </h1>
                    </div>
                    <div className="pb-4">
                        <p className="text-xl text-brand-slate font-medium leading-relaxed opacity-80 border-l-4 border-brand-green pl-8">
                            {caseStudy.excerpt}
                        </p>
                    </div>
                </div>
            </header>

            {/* 2. Full-Width Split Imagery */}
            <section className="relative h-[70vh] w-full bg-brand-navy overflow-hidden">
                <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />

                {/* Floating Meta Badge */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 flex justify-between items-end text-white">
                    <div className="flex gap-12">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Expertise</p>
                            <p className="font-bold">{caseStudy.category}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Date</p>
                            <p className="font-bold">{caseStudy.date}</p>
                        </div>
                    </div>
                    <button className="bg-brand-green p-6 rounded-full hover:scale-110 transition-transform">
                        <Share2 size={24} />
                    </button>
                </div>
            </section>

            {/* 3. The "Reading Experience" Layout */}
            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-[250px_1fr_250px] gap-12">
                    {/* Left Rail: Author Info */}
                    <aside className="hidden lg:block space-y-8 sticky top-32 h-fit">
                        <div className="group flex flex-col items-start gap-4">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-2xl font-black text-brand-navy border border-brand-border group-hover:bg-brand-green group-hover:text-white transition-all">
                                {caseStudy.author[0]}
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-brand-slate opacity-40">Written By</p>
                                <p className="text-lg font-black text-brand-navy">{caseStudy.author}</p>
                            </div>
                        </div>
                    </aside>

                    {/* Center Rail: The Content */}
                    <article className="prose prose-2xl prose-slate max-w-none
                        prose-headings:text-brand-navy prose-headings:font-black prose-headings:tracking-tighter
                        prose-p:text-brand-slate prose-p:leading-relaxed prose-p:text-lg md:prose-p:text-xl
                        prose-strong:text-brand-navy prose-strong:font-bold
                        prose-blockquote:border-brand-green prose-blockquote:bg-brand-surface prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:text-brand-navy">
                        <p className="text-lg text-brand-slate">
                            {caseStudy.description}
                        </p>
                    </article>

                    {/* Right Rail: Quick Nav / CTA */}
                    <aside className="hidden lg:block sticky top-32 h-fit">
                        <div className="bg-brand-surface p-8 rounded-[2.5rem] border border-brand-border">
                            <p className="text-sm font-black text-brand-navy mb-4">Want specialized advice?</p>
                            <button className="flex items-center gap-2 text-brand-green font-bold group">
                                Book a Call <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}