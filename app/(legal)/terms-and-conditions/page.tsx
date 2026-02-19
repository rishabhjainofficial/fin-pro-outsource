import { Metadata } from 'next';
import TermsPage from '@/components/client/terms/page';

export const metadata: Metadata = {
    title: "Terms and Conditions | Gapbridge Outsourcing",
    description: "Review the terms and conditions for using the Gapbridge website and our professional accounting services.",
    keywords: ["Accounting Terms and Conditions", "CPA Service Agreement", "Financial Services Terms", "Gapbridge Terms of Use", "Outsourcing Contract Terms"],
    openGraph: {
        title: "Terms and Conditions - Gapbridge Outsourcing",
        description: "Read the terms and conditions for using the Gapbridge website and our professional accounting services.",
        url: "https://gapbridgebiz.com/terms-and-conditions",
        siteName: "Gapbridge Outsourcing",
        images: [
            {
                url: "/images/terms-og.png", // Use a high-contrast shield or server image
                width: 1200,
                height: 630,
                alt: "Gapbridge Terms and Conditions",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gapbridge Terms and Conditions",
        description: "Review the terms and conditions for using the Gapbridge website and our professional accounting services.",
        images: ["/images/terms-og.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true
    },
};

export default function TermsAndConditions() {
    return (
        <TermsPage />
    );
}