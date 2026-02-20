"use client";
import Image from 'next/image';

const BrandScroll = ({ brands }: { brands: { name: string; src: string }[] }) => {
    return (
        <section className="w-full py-20 bg-white border-y border-brand-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-col items-center">
                    <div className="h-px w-12 bg-brand-green mb-6" />
                    <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-brand-navy/40">
                        Strategic Partnerships & Trusted Alliances
                    </p>
                </div>
            </div>

            <div className="relative flex items-center overflow-hidden">
                {/* Deeper, more immersive Edge Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-brand-surface via-brand-surface/80 to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-brand-surface via-brand-surface/80 to-transparent z-10"></div>

                {/* The Scrolling Wrapper */}
                <div
                    role="list"
                    className="flex animate-scroll whitespace-nowrap items-center gap-16 md:gap-24 px-6 hover:[animation-play-state:paused] cursor-pointer"
                >
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center shrink-0">
                            <div className="relative w-32 h-12 md:w-44 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    sizes="(max-width: 768px) 128px, 176px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandScroll;