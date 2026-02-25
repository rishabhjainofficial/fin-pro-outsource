import { LayoutGrid, Shield, Briefcase, Info } from 'lucide-react';
import SitemapPage from '@/components/client/site-map/page';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Site Directory | Gapbridge Outsourcing",
    description: "Navigate through the Gapbridge portal. Access our full list of accounting services, CPA firm solutions, and technical security documentation.",
    keywords: ["Gapbridge Site Map", "Accounting Services Directory", "CPA Outsourcing Links"],
    openGraph: {
        title: "Gapbridge Site Directory",
        description: "A comprehensive map of all Gapbridge services and resources.",
        url: "https://gapbridgebiz.com/site-map",
        siteName: "Gapbridge Outsourcing",
        images: [
            {
                url: "https://gapbridgebiz.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Gapbridge Site Directory",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gapbridge Site Directory",
        description: "A comprehensive map of all Gapbridge services and resources.",
        images: ["https://gapbridgebiz.com/images/og-image.png"],
    },
    robots: {
        index: true,
        follow: true
    },
};

const Sitemap = () => {
    const categories = [
        {
            title: "About Gapbridge",
            icon: <Info size={20} />,
            links: [
                { name: "Why Gapbridge", href: "/why-gapbridge" },
                { name: "How We Work", href: "/how-we-work" },
                { name: "Meet the Team", href: "/about-us" },
                { name: "Engagement Model", href: "/engagement-model" },
            ]
        },
        {
            title: "Services",
            icon: <Briefcase size={20} />,
            links: [
                { name: "Business Owners", href: "/services/business-owners" },
                { name: "Valuation Services", href: "/services/valuation-services" },
                { name: "Advisory Services", href: "/services/advisory-services" },
                { name: "CPA Firm Solutions", href: "/cpa-firm" },
            ]
        },
        {
            title: "Resources",
            icon: <LayoutGrid size={20} />,
            links: [
                { name: "Case Studies", href: "/case-studies" },
                { name: "Industry Blog", href: "/blog" },
                { name: "Career Opportunities", href: "/career" },
                { name: "Contact Us", href: "/contact-us" },
            ]
        },
        {
            title: "Legal & Security",
            icon: <Shield size={20} />,
            links: [
                { name: "Security & Infrastructure", href: "/security" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
            ]
        }
    ];

    return (
        <SitemapPage categories={categories} />
    );
};

export default Sitemap;