'use client';

import {
    Calculator, BookOpen, Receipt, Landmark,
    Settings, Users, PieChart, Database,
    ShieldCheck, LineChart, Calendar, FileText,
    UserPlus, Laptop, BarChart4,
    Globe
} from 'lucide-react';
import ServicePage from '@/components/client/services/page';

interface Services {
    title: string;
    slug: string;
    icon: React.ReactNode;
    desc: string;
}

const BusinessOwners = () => {
    const services: Services[] = [
        {
            title: "Accounting Outsourcing Services",
            slug: "business-owners/accounting-outsourcing-services",
            icon: <Calculator size={24} />,
            desc: "CPA’s go-to firm for A-Z accounting needs"
        },
        {
            title: "Bookkeeping Services",
            slug: "business-owners/bookkeeping-services",
            icon: <BookOpen size={24} />,
            desc: "Experienced bookkeepers at your service"
        },
        {
            title: "Outsourced Tax Preparation",
            slug: "business-owners/outsourced-tax-preparation",
            icon: <Receipt size={24} />,
            desc: "End-to-end tax preparation support"
        },
        {
            title: "AR & AP Management",
            slug: "business-owners/ar-ap-management",
            icon: <Landmark size={24} />,
            desc: "Comprehensive AR & AP management services"
        },
        {
            title: "Accounting Software Consulting",
            slug: "business-owners/accounting-software-consulting",
            icon: <Settings size={24} />,
            desc: "Helping choose the ideal accounting software"
        },
        {
            title: "Payroll Management",
            slug: "business-owners/payroll-management",
            icon: <Users size={24} />,
            desc: "Streamline your CPA’s payroll processes"
        },
        {
            title: "Virtual CFO",
            slug: "business-owners/virtual-cfo",
            icon: <PieChart size={24} />,
            desc: "Flexible Virtual CFO solutions"
        },
        {
            title: "Xero & QuickBooks Accounting",
            slug: "business-owners/xero-quickbooks-accounting",
            icon: <Database size={24} />,
            desc: "Specialised Xero & QuickBooks services"
        },
        {
            title: "Audit Support Services",
            slug: "business-owners/audit-support-services",
            icon: <ShieldCheck size={24} />,
            desc: "Get top-notch audit support service"
        },
        {
            title: "Cost & Operation Analysis",
            slug: "business-owners/cost-and-operation-analysis",
            icon: <LineChart size={24} />,
            desc: "Drive profitability & make data-backed decisions"
        },
        {
            title: "Year End Services",
            slug: "business-owners/year-end-services",
            icon: <Calendar size={24} />,
            desc: "Smoothly transition into the new fiscal year"
        },
        {
            title: "Preparation of Financial Statements",
            slug: "business-owners/preparation-of-financial-statements",
            icon: <FileText size={24} />,
            desc: "Helping keep financial statements handy"
        },
        {
            title: "Offshore Staffing for CPA Firms",
            slug: "business-owners/offshore-staffing-for-cpa-firms",
            icon: <UserPlus size={24} />,
            desc: "Cost-effective Staffing Solutions For CPAs"
        },
        {
            title: "Outsource Bookkeeping & Accounting for CPAs",
            slug: "business-owners/outsource-bookkeeping-and-accounting-for-cpas",
            icon: <Laptop size={24} />,
            desc: "Efficient CPA Assistance"
        },
        {
            title: "Outsourced Finance and Accounting Services",
            slug: "business-owners/outsourced-finance-and-accounting-services",
            icon: <BarChart4 size={24} />,
            desc: "Trusted outsourced financial services"
        }
    ];

    const headerPart1 = "Comprehensive";
    const headerPart2 = "Financial Solutions";
    const desc = "Explore our full range of outsourced financial services designed to streamline your operations and maximize growth.";
    const spanText = "Global Operational Support";
    const spanIcon = <Globe size={14} className="text-brand-green" />;

    return (
        <ServicePage services={services} headerPart1={headerPart1} headerPart2={headerPart2} desc={desc} spanText={spanText} spanIcon={spanIcon} />
    );
};

export default BusinessOwners;