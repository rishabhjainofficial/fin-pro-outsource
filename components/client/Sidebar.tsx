"use client";
import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, Users, FileText, Settings, CreditCard } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Clients', icon: <Users size={20} /> },
        { name: 'Financials', icon: <FileText size={20} /> },
        { name: 'Invoicing', icon: <CreditCard size={20} /> },
        { name: 'Settings', icon: <Settings size={20} /> },
    ];

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-md"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle sidebar"
            >
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>

            {/* Sidebar Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Sidebar */}
            <aside className={`
        fixed top-0 left-0 z-40 h-screen transition-transform bg-slate-900 text-slate-300 w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
                <div className="flex flex-col h-full px-4 py-6">
                    <div className="flex items-center mb-10 px-2">
                        <span className="text-2xl font-bold text-white tracking-tight">FinPortal</span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href="#"
                                className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                            >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto p-4 bg-slate-800 rounded-xl">
                        <p className="text-xs text-slate-400">Logged in as:</p>
                        <p className="text-sm font-semibold text-white">Finance Professional</p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;