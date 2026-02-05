import Image from 'next/image';

const ScheduleConsultation = () => {
    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="text-center lg:text-left space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Outsource Accounting, Bookkeeping & Payroll Services
                    </h2>
                    <p className="text-sm md:text-lg text-gray-600">
                        Gapbridge is a trusted outsource accounting and bookkeeping company that helps businesses gain financial clarity and operational efficiency. With a sharp focus on accuracy, compliance, and timeliness, we provide tailored solutions to CPAs, accounting firms, and startups. From recording daily transactions to managing end-to-end payroll, we bring expertise and peace of mind to your finance department.
                    </p>
                    <a href="#contact" className="inline-block px-6 py-2 rounded-full bg-slate-800 text-white font-semibold shadow hover:bg-slate-700 transition">Schedule a Consultation</a>
                </div>
                <div className="w-full max-w-lg">
                    <Image src="/images/team-member.png" alt="Outsourcing Service" width={800} height={500} className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default ScheduleConsultation