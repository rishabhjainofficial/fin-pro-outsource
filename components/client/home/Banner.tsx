import Image from "next/image";

const Banner = () => {
    return (
        <section className="w-full relative h-[44vh] md:h-[60vh] lg:h-[72vh] overflow-hidden">
            {/* Background image */}
            <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaborating on financial strategy"
                fill
                priority
                className="object-cover"
            />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" aria-hidden="true"></div>

            {/* Hero content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
                        Financial Operations, Simplified.
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Hire expert accounting teams and fractional CFOs to scale with confidence. Fast onboarding, seamless integration, and trusted delivery.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                        <a href="#contact" className="inline-flex px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold shadow-lg">
                            Hire Now
                        </a>
                        <a href="#services" className="inline-flex px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;