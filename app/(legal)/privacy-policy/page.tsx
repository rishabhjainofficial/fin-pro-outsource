import PrivacyPolicyPage from '@/components/client/privacy-policy/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Gapbridge Outsourcing",
    description: "Learn how Gapbridge collects, manages, and protects your financial and personal data in compliance with global standards.",
    keywords: ["Accounting Data Privacy", "CPA Data Protection", "Financial Data Security", "Gapbridge Privacy Policy", "GDPR Compliance"],
    openGraph: {
        title: "Privacy Policy - Gapbridge Outsourcing",
        description: "Your data privacy is our priority. Read our full data management protocols.",
        url: "https://gapbridgebiz.com/privacy-policy",
        siteName: "Gapbridge Outsourcing",
        images: [
            {
                url: "/images/privacy-og.png", // Use a high-contrast shield or server image
                width: 1200,
                height: 630,
                alt: "Gapbridge Privacy Policy",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gapbridge Privacy Policy",
        description: "Your data, protected. Learn about our strict data privacy and protection protocols.",
        images: ["/images/privacy-og.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <PrivacyPolicyPage />
    );
}