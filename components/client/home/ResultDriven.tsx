'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Building, Hourglass, Percent, User } from 'lucide-react'

const stats = [
    { id: 1, value: 98, suffix: '%', label: 'Increased savings', icon: <Percent /> },
    { id: 2, value: 1, suffix: '+', label: 'Years of experience', icon: <Hourglass /> },
    { id: 3, value: 100, suffix: '+', label: 'Accounts reconciled', icon: <User /> },
    { id: 4, value: 50, suffix: '+', label: 'Accounting firms', icon: <Building /> },
]

const neutralAccent = ['#0f172a', '#1f2937', '#334155', '#475569'] // neutral slate accents

const useInView = (ref: React.RefObject<Element>, rootMargin = '-10%') => {
    const [inView, setInView] = useState(false)
    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2, rootMargin }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref, rootMargin])
    return inView
}

const useCountUp = (target: number, duration = 1200, delay = 0, start = true) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (!start) return
        let raf = 0
        let startTime: number | null = null
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime - delay
            if (elapsed < 0) {
                raf = requestAnimationFrame(step)
                return
            }
            const progress = Math.min(elapsed / duration, 1)
            const current = Math.round(progress * target)
            setValue(current)
            if (progress < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
        return () => cancelAnimationFrame(raf)
    }, [target, duration, delay, start])

    return value
}

const StatCard = ({ stat, index, start }: { stat: typeof stats[number]; index: number; start: boolean }) => {
    const displayValue = useCountUp(stat.value, 1200, index * 120, start)
    const formatted = stat.value >= 1000 ? displayValue.toLocaleString() : displayValue

    return (
        <div
            role="group"
            aria-label={`${stat.label} ${stat.value}${stat.suffix}`}
            tabIndex={0}
            className="relative bg-white border border-slate-100 rounded-xl shadow-sm p-6 md:p-8 flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 animate-fade-up"
            style={{ borderLeft: `4px solid ${neutralAccent[index % neutralAccent.length]}`, animationDelay: `${index * 90}ms` }}
        >
            <div className="flex flex-1 items-center">
                <div className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center text-slate-700" aria-hidden style={{ border: '1px solid rgba(15,23,42,0.06)' }}>
                    {stat.icon}
                </div>

                <div className="ml-4">
                    <div className="text-2xl md:text-3xl font-semibold text-gray-900 leading-none" aria-live="polite">
                        {formatted}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
            </div>
        </div>
    )
}

const ResultDriven = () => {
    const ref = useRef<HTMLDivElement>(null!)
    const inView = useInView(ref)

    return (
        <section className="w-full px-4 py-16 bg-linear-to-b from-white to-slate-50">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Trusted. Promising. Result-driven.
                </h2>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                    Backed by the trust of CPAs, validated by our results. See our impact at a glance.
                </p>
            </div>

            <div ref={ref} className="max-w-6xl mx-auto mt-10 px-6 grid gap-5 md:grid-cols-4" role="list" aria-label="Results">
                {stats.map((stat, idx) => (
                    <StatCard stat={stat} index={idx} key={stat.id} start={inView} />
                ))}
            </div>
        </section>
    )
}

export default ResultDriven;