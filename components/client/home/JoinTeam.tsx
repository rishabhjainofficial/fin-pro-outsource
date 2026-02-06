import Image from 'next/image'
import React from 'react'

const JoinTeam = () => {
    const images = [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Be Part of Something Great
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                        At Gapbridge, our infrastructure speaks the same language as our services: refined, reliable, and built for excellence. Surrounded by natural elements and smart design, our team finds the clarity and calm needed to deliver exceptional results, every day.
                    </p>
                    <button className="mt-6 px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow-sm hover:bg-slate-800 transition">Join Our Team</button>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Setting a 4-column grid with a fixed row height to keep it clean */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images?.map((src, index) => {
                        // Logic for an artistic layout:
                        // 1st image (index 0) is a big square (2x2)
                        // 6th image (index 5) is wide (2x1)
                        const isBig = index === 0;
                        const isWide = index === 5;

                        return (
                            <div
                                key={index}
                                className={`
                                    relative overflow-hidden rounded-3xl group shadow-lg
                                    ${isBig ? 'md:col-span-3 md:row-span-2' : ''}
                                    ${isWide ? 'md:col-span-2' : ''}
                                `}
                            >
                                <Image
                                    src={src}
                                    alt={`Team image ${index + 1}`}
                                    fill // Using fill for artistic grids ensures the container dictates the size
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />

                                {/* Artistic Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-sm font-medium">Team Member {index + 1}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default JoinTeam