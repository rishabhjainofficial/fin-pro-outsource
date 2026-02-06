"use client";
import Image from 'next/image';

const BrandScroll = () => {
    const brands = [
        { name: 'Brand 1', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Brand 2', src: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Brand 3', src: 'https://images.unsplash.com/photo-1724167954496-a5c4befea483?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Brand 4', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Brand 5', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Brand 6', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    // We double the array to create the infinite loop effect
    const doubledBrands = [...brands, ...brands];

    return (
        <section className="w-full py-14 bg-linear-to-b from-white to-slate-50 overflow-hidden border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-6 mb-6">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative flex items-center overflow-hidden">
                {/* Left/Right Gradient Fade for a premium look */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-linear-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-linear-to-l from-white to-transparent"></div>

                {/* The Scrolling Wrapper */}
                <div role="list" className="flex animate-scroll whitespace-nowrap items-center space-x-8 px-6" style={{ willChange: 'transform' }}>
                    {doubledBrands.map((brand, index) => (
                        <div role="listitem" key={index} className="flex items-center justify-center min-w-32">
                            <div className="p-3 bg-white/70 rounded-lg shadow-sm flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300">
                                <div className="relative w-28 h-10 md:w-36 md:h-14">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandScroll;