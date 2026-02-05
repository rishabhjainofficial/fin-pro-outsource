"use client";
import { ReactNode, useState } from 'react';
import {
    Landmark, ChevronDown, ChevronRight, Menu, X, Briefcase, Users, Server, MessageSquareMore, CircleQuestionMark, ListChecks, HandCoins
} from 'lucide-react';
import Link from 'next/link';

interface NavLink {
    name: string;
    type: 'link' | 'dropdown' | 'mega';
    href?: string;
    subLinks?: NavSubLink[];
    categories?: Record<string, NavItem[]>;
}

interface NavSubLink {
    title: string;
    href: string;
    icon?: ReactNode;
    desc?: string;
}

interface NavItem {
    title: string;
    desc: string;
    href?: string;
    icon?: ReactNode;
}

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Business Owners');
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const iconSize = 15;

    // Data structure with consistent icon usage
    const navLinks: NavLink[] = [
        {
            name: 'About Us',
            type: 'dropdown', // Normal dropdown style
            subLinks: [
                { title: 'Why Gapbridge', href: '/why-gapbridge', icon: <CircleQuestionMark size={iconSize} /> },
                { title: 'How We Work', href: '/how-we-work', icon: <ListChecks size={iconSize} /> },
                { title: 'Meet the Team', href: '/about-us', icon: <Users size={iconSize} /> },
                { title: 'Engagement Model', href: '/engagement-model', icon: <Server size={iconSize} /> },
            ]
        },
        {
            name: 'Services',
            type: 'dropdown', // Normal dropdown style
            subLinks: [
                { title: 'Business Owners', href: '/business-owners', icon: <Briefcase size={iconSize} /> },
                { title: 'Valuation Services', href: '/valuation-services', icon: <HandCoins size={iconSize} /> },
                { title: 'Advisory Services', href: '/advisory-services', icon: <MessageSquareMore size={iconSize} /> },
            ]
        },
        // {
        //     name: 'Services',
        //     type: 'mega',
        //     categories: {
        //         'Business Owners': [
        //             { title: 'Accounting Outsourcing', desc: "Comprehensive A-Z solutions.", icon: <Calculator size={iconSize} /> },
        //             { title: 'Bookkeeping Services', desc: "Accurate daily tracking.", icon: <Briefcase size={iconSize} /> },
        //         ],
        //         'Advisory': [
        //             { title: 'Virtual CFO', desc: "Strategic financial leadership.", icon: <Users size={iconSize} /> },
        //         ]
        //     }
        // },
        { name: 'CPA Firm (Hire)', type: 'link', href: '/cpa-firm' },
        { name: 'Career', type: 'link', href: '/career' },
        { name: 'Blog', type: 'link', href: '/blog' },
        { name: 'Case Studies', type: 'link', href: '/case-studies' },
        { name: 'Contact Us', type: 'link', href: '/contact-us' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Landmark size={28} className="text-slate-900" />
                        <span className="text-2xl font-bold text-slate-900">Gapbridge</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden lg:flex items-center space-x-2 h-full">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group h-full flex items-center">

                            <div className="flex items-center gap-1 text-base font-semibold text-slate-700 group-hover:text-blue-600 px-4 py-2 rounded-lg transition-colors cursor-default">
                                {link.type === 'link' ? <Link href={link.href || '#'} className="text-base font-semibold text-slate-700">{link.name}</Link> : <span className="text-base font-semibold text-slate-700">{link.name}</span>}
                                {link.type !== 'link' && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                            </div>

                            {/* --- MEGA MENU (Desktop) --- */}
                            {link.type === 'mega' && link.categories && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 pt-2">
                                    <div className="bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden flex min-h-87.5">
                                        {/* Sidebar */}
                                        <div className="w-64 bg-slate-50/50 p-4 border-r border-slate-100 space-y-1">
                                            {Object.keys(link.categories).map((cat) => (
                                                <div
                                                    key={cat}
                                                    onMouseEnter={() => setActiveTab(cat)}
                                                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${activeTab === cat ? 'bg-white shadow-sm text-blue-600 ring-1 ring-slate-100' : 'text-slate-700 hover:text-blue-600 hover:bg-white'}`}
                                                >
                                                    <span className="text-base font-semibold">{cat}</span>
                                                    <ChevronRight size={14} />
                                                </div>
                                            ))}
                                        </div>
                                        {/* Content Grid */}
                                        <div className="flex-1 p-8 grid grid-cols-2 gap-6 bg-white">
                                            {link.categories && link.categories[activeTab as keyof typeof link.categories]?.map((item, i) => (
                                                <Link key={i} href={item.href || '#'} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
                                                    {/* Unified Icon Box */}
                                                    {item.icon && (
                                                        <div className="bg-slate-100 p-2.5 rounded-full text-slate-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                                            {item.icon}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h4 className="text-base font-semibold text-slate-700 mb-1 group-hover/item:text-blue-600 transition-colors">{item.title}</h4>
                                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* --- NORMAL DROPDOWN (Matches Mega Menu Icon Style) --- */}
                            {link.type === 'dropdown' && link.subLinks && (
                                <div className="absolute top-full left-0 w-80 max-w-[calc(100vw-2rem)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-2">
                                    <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-3 space-y-1">
                                        {link.subLinks.map((sub) => (
                                            <Link key={sub.title} href={sub.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
                                                {sub.icon && (
                                                    <div className="bg-slate-100 p-2.5 rounded-full text-slate-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                                        {sub.icon}
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="text-base font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors">{sub.title}</div>
                                                    {'desc' in sub && sub.desc && <div className="text-xs text-slate-500 mt-1 leading-tight">{sub.desc}</div>}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- MOBILE NAVIGATION --- */}
                {isMobileOpen && (
                    <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto z-40">
                        <div className="p-4 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.type === 'link' ? (
                                        <Link href={link.href || '#'} className="block w-full px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => setExpandedMenu(expandedMenu === link.name ? null : link.name)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform ${expandedMenu === link.name ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {expandedMenu === link.name && (
                                                <div className="bg-slate-50 space-y-1 mt-1">
                                                    {link.type === 'dropdown' && link.subLinks && (
                                                        <>
                                                            {link.subLinks.map((sub) => (
                                                                <Link
                                                                    key={sub.title}
                                                                    href={sub.href}
                                                                    className="block px-6 py-2 text-base font-semibold text-slate-700 hover:bg-white rounded transition-colors"
                                                                    onClick={() => setIsMobileOpen(false)}
                                                                >
                                                                    {sub.title}
                                                                </Link>
                                                            ))}
                                                        </>
                                                    )}
                                                    {link.type === 'mega' && link.categories && (
                                                        <>
                                                            {Object.entries(link.categories).map(([cat, items]) => (
                                                                <div key={cat}>
                                                                    <button
                                                                        onClick={() => setExpandedCategory(expandedCategory === cat ? null : cat)}
                                                                        className="w-full flex items-center justify-between px-6 py-2 text-base font-semibold text-slate-700 hover:bg-white rounded transition-colors"
                                                                    >
                                                                        {cat}
                                                                        <ChevronDown size={14} className={`transition-transform ${expandedCategory === cat ? 'rotate-180' : ''}`} />
                                                                    </button>
                                                                    {expandedCategory === cat && (
                                                                        <div className="space-y-1">
                                                                            {items.map((item, i) => (
                                                                                <Link
                                                                                    key={i}
                                                                                    href={item.href || '#'}
                                                                                    className="block px-8 py-2 text-base font-semibold text-slate-700 hover:bg-white rounded transition-colors"
                                                                                    onClick={() => setIsMobileOpen(false)}
                                                                                >
                                                                                    {item.title}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;