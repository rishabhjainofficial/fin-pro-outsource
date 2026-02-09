'use client';

import { Lightbulb, PieChart } from 'lucide-react';
import ServicePage from '@/components/client/services/page';

const AdvisoryServices = () => {
    const advisoryServices = [
        {
            title: "Fractional CFO Service",
            slug: "advisory-services/fractional-cfo-service",
            desc: "Boost growth with expert Fractional CFO guidance.",
            icon: <PieChart size={24} />
        }
    ];

    const headerPart1 = "Future-Ready";
    const headerPart2 = "Advisory";
    const desc = "Move beyond historical reporting. Our advisory services provide the forward-looking insights and executive leadership needed to drive sustainable growth.";
    const spanText = "Strategic Leadership";
    const spanIcon = <Lightbulb size={14} className="text-brand-green" />;

    return (
        <ServicePage services={advisoryServices} headerPart1={headerPart1} headerPart2={headerPart2} desc={desc} spanText={spanText} spanIcon={spanIcon} />
    );
};

export default AdvisoryServices;