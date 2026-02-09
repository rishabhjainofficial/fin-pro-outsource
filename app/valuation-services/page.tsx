'use client';

import ServicePage from '@/components/client/services/page';
import {
    TrendingUp, Rocket, Users, Landmark,
    ShieldCheck, FileText, PieChart
} from 'lucide-react';

const ValuationServices = () => {
    const valuationServices = [
        {
            title: "Business Valuation Service",
            slug: "valuation-services/business-valuation",
            desc: "Accurate business valuation services.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Startup Valuation Service",
            slug: "valuation-services/startup-valuation",
            desc: "Expert valuation solutions for startups.",
            icon: <Rocket size={24} />
        },
        {
            title: "ESOP Valuation Service",
            slug: "valuation-services/esop-valuation",
            desc: "Expert ESOP valuation solutions.",
            icon: <Users size={24} />
        },
        {
            title: "IBBI-Registered Valuation Services",
            slug: "valuation-services/ibbi-valuation",
            desc: "Accurate IBBI Business Valuation.",
            icon: <Landmark size={24} />
        }
    ];

    const headerPart1 = "Precision in";
    const headerPart2 = "Valuation";
    const desc = "Navigate complex transactions with data-driven valuation reports. We provide the technical rigor required for investor confidence and regulatory compliance.";
    const spanText = "Certified Assessments";
    const spanIcon = <ShieldCheck size={14} className="text-brand-green" />;

    return (
        <ServicePage services={valuationServices} headerPart1={headerPart1} headerPart2={headerPart2} desc={desc} spanText={spanText} spanIcon={spanIcon} />
    );
}

export default ValuationServices;