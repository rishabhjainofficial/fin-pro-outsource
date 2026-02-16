import WhyGapbridge from '@/components/client/why-gapbridge/page'; import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Why Gapbridge - The Future of Accounting",
    description: "Discover why firms are choosing Gapbridge for seamless, tech-driven accounting and finance outsourcing.",
    keywords: ["Why Gapbridge", "Accounting Outsourcing", "FinTech", "Gapbridge Advantage"],
    openGraph: {
        title: "Why Gapbridge - The Future of Accounting",
        description: "Discover why firms are choosing Gapbridge for seamless, tech-driven accounting and finance outsourcing.",
        url: "/why-gapbridge",
        siteName: "Gapbridge Outsource",
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 630,
                alt: "Gapbridge Outsource",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Why Gapbridge - The Future of Accounting",
        description: "Discover why firms are choosing Gapbridge for seamless, tech-driven accounting and finance outsourcing.",
        images: ["/images/logo.png"],
    },
};

const page = () => {
    return (
        <WhyGapbridge />
    );
};

export default page;