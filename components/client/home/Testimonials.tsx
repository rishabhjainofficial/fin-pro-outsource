'use client';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, TechFlow Solutions",
        content: "Working with the team has been a game-changer for our financial clarity. Their adroit handling of our complex accounts saved us countless hours.",
        star: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "David Chen",
        role: "Founder, GreenSpace Ltd",
        content: "The level of expertise across multiple accounting tools is impressive. They didn't just manage our books; they optimized our entire workflow.",
        star: 4,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Emily Rodriguez",
        role: "CFO, Artisan Collective",
        content: "Transparent communication and deep technical knowledge. It's rare to find a partner that feels like an extension of your own internal team.",
        star: 4,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
        name: "Marcus Thorne",
        role: "Director, Global Logistics",
        content: "Their 5-step hiring process delivered a top-tier accountant in record time. Professional, efficient, and highly recommended.",
        star: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    // Duplicate the array to create a seamless loop
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Trusted by industry leaders.
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                        Our clients are a testament to our commitment to excellence.
                    </p>
                </div>
            </div>

            {/* The viewport container */}
            <div className="relative flex overflow-hidden group">
                {/* The unique animation class applied here */}
                <div className="flex animate-testimonial-scroll gap-6 py-4 group-hover:[animation-play-state:paused]">
                    {doubledTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[480px] flex-shrink-0 relative bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 hover:border-[#5d9446]/30 hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-200 opacity-40 group-hover:text-[#5d9446]/10" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex gap-1 mb-8">
                                    {Array.from({ length: item.star }).map((_, i) => (
                                        <Star key={i} size={16} fill="#5d9446" className="text-[#5d9446]" />
                                    ))}
                                </div>

                                <p className="text-xl text-slate-700 leading-relaxed italic mb-10">
                                    {`"${item.content}"`}
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                                        <p className="text-[#5d9446] text-sm font-medium">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stunning Edge Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>
        </section>
    );
};

export default Testimonials;