"use client";
import Image from 'next/image';

const BrandScroll = () => {
    const brands = [
        { name: 'Brand 1', src: '/images/brand.jpg' },
        { name: 'Brand 2', src: '/images/brand.jpg' },
        { name: 'Brand 3', src: '/images/brand.jpg' },
        { name: 'Brand 4', src: '/images/brand.jpg' },
        { name: 'Brand 5', src: '/images/brand.jpg' },
        { name: 'Brand 6', src: '/images/brand.jpg' },
    ];

    // We double the array to create the infinite loop effect
    const doubledBrands = [...brands, ...brands];

    return (
        <div className="py-12 bg-white overflow-hidden border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* The Scrolling Wrapper */}
                <div className="flex animate-scroll whitespace-nowrap">
                    {doubledBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <div className="relative w-32 h-12 md:w-40 md:h-16">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Gradient Fade on Edges for a premium look */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </div>
    );
};

export default BrandScroll;