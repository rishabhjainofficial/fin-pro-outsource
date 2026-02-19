import SecurityPage from '@/components/client/security/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Data Security & Infrastructure | Gapbridge Outsourcing",
    description: "Discover how Gapbridge protects sensitive financial data using AWS enterprise security, AES-256 encryption, and strict SOC 2-aligned compliance protocols.",
    keywords: ["Accounting Data Security", "AWS Financial Hosting", "CPA Data Privacy", "Financial Data Encryption", "Gapbridge Compliance"],
    openGraph: {
        title: "Enterprise-Grade Security | Gapbridge",
        description: "How we safeguard your firm's data on our secured AWS infrastructure.",
        url: "https://gapbridgebiz.com/security",
        siteName: "Gapbridge Outsourcing",
        images: [
            {
                url: "/images/security-og.png", // Use a high-contrast shield or server image
                width: 1200,
                height: 630,
                alt: "Gapbridge Security Infrastructure",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gapbridge Security & Compliance",
        description: "Your data, fortified. Explore our multi-layer security approach for accounting firms.",
        images: ["/images/security-og.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
};

const Security = () => {
    return (
        <SecurityPage />
    )
}

export default Security;