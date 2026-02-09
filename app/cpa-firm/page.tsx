'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Users, BookOpen, PieChart, Receipt,
    UserCheck, ShieldCheck, Database, FileSearch,
    Landmark, ClipboardCheck, Users2, LineChart,
    UserCog, ArrowRight
} from 'lucide-react';
import ServicePage from '@/components/client/services/page';

const CPAFirm = () => {
    const staffingRoles = [
        {
            title: "Hire Accountant",
            slug: "hire-accountant",
            desc: "Hire dedicated accountants for your CPA firm.",
            icon: <Users size={24} />
        },
        {
            title: "Hire Bookkeeper",
            slug: "hire-bookkeeper",
            desc: "Hire bookkeepers & readily manage client’s accounts.",
            icon: <BookOpen size={24} />
        },
        {
            title: "Hire Fractional CFO",
            slug: "hire-fractional-cfo",
            desc: "Let our CFOs bring a high-level of financial strategy to your clients.",
            icon: <PieChart size={24} />
        },
        {
            title: "Hire Tax Preparer",
            slug: "hire-tax-preparer",
            desc: "Carry out accurate tax filings for your clients effortlessly.",
            icon: <Receipt size={24} />
        },
        {
            title: "Hire Staff Accountant",
            slug: "hire-staff-accountant",
            desc: "Elevate your accounting services with specialized staff support.",
            icon: <UserCheck size={24} />
        },
        {
            title: "Hire Audit Support Staff",
            slug: "hire-audit-support",
            desc: "Seamlessly manage all your audit preparations and documentation.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "Hire QuickBooks Expert",
            slug: "hire-quickbooks-expert",
            desc: "Make optimum use of QuickBooks software with certified experts.",
            icon: <Database size={24} />
        },
        {
            title: "Hire Tax Reviewer",
            slug: "hire-tax-reviewer",
            desc: "Maximize tax returns by filing and reviewing taxes accurately.",
            icon: <FileSearch size={24} />
        },
        {
            title: "Hire AR/AP Billing Executive",
            slug: "hire-ar-ap-executive",
            desc: "Take complete care of your CPA’s AR & AP functions.",
            icon: <Landmark size={24} />
        },
        {
            title: "Hire Account Supervisor",
            slug: "hire-account-supervisor",
            desc: "Achieve financial clarity & lead your team precisely.",
            icon: <ClipboardCheck size={24} />
        },
        {
            title: "Hire Payroll Expert",
            slug: "hire-payroll-expert",
            desc: "Simplify your CPA’s payroll management and compliance.",
            icon: <Users2 size={24} />
        },
        {
            title: "Hire Virtual CFO",
            slug: "hire-virtual-cfo",
            desc: "Let our virtual CFO be the financial backbone for your growth.",
            icon: <LineChart size={24} />
        },
        {
            title: "Hire Virtual Assistant",
            slug: "hire-virtual-assistant",
            desc: "Highly skilled offshore virtual assistants for administrative support.",
            icon: <UserCog size={24} />
        }
    ];

    const headerPart1 = "Scale Your";
    const headerPart2 = "Capacity.";
    const desc = "Eliminate the overhead of local hiring. Access our pool of specialized financial talent to expand your CPA firm's service offerings and throughput.";
    const spanText = "Global Staff Augmentation";
    const spanIcon = <Users size={14} className="text-brand-green" />;

    return (
        <ServicePage services={staffingRoles} headerPart1={headerPart1} headerPart2={headerPart2} desc={desc} spanText={spanText} spanIcon={spanIcon} />
    );
};

export default CPAFirm;