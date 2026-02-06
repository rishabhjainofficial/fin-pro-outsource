'use client'

const IndustriesServe = () => {
    const data = [
        {
            title: 'Real Estate',
            src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Healthcare',
            src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Hotel & Restaurants',
            src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Retail & Wholesale',
            src: 'https://images.unsplash.com/photo-1606824722920-4c652a70f348?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Shipping & Logistics',
            src: 'https://plus.unsplash.com/premium_photo-1661963559074-9655a9404f1a?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Agriculture',
            src: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Manufacturing',
            src: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'E-commerce',
            src: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Franchise',
            src: 'https://images.unsplash.com/photo-1726003352580-25aee6be334c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Small business accounting',
            src: 'https://images.unsplash.com/photo-1762831063505-68022b6133a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Accounting and Bookkeeping Expertise across Industries
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                        We support a diverse range of industries with tailored accounting solutions designed to meet specific sector needs.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {data?.map((industry) => (
                        <div
                            key={industry.title}
                            tabIndex={0}
                            role="article"
                            aria-label={industry.title}
                            className="group border border-slate-100 rounded-xl p-6 flex items-center justify-center hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 transition text-center bg-cover bg-center bg-no-repeat relative overflow-hidden min-h-50 hover:scale-105"
                            style={{ backgroundImage: `url(${industry.src})` }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <h3 className="text-xl font-semibold text-white relative z-10">{industry.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IndustriesServe