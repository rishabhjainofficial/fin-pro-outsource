// app/blog/page.tsx
import { getCaseStudies } from '@/lib/api/caseStudies';
import List from '@/components/client/case-studies/List';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Studies | Explore Insightful Accounting Ideas',
    description: 'Stay updated with the latest trends, insights, and expert advice in accounting, finance, and business growth. Read our latest blog posts.',
    keywords: ['Gapbridge Outsourcing', 'Outsourcing', 'Gapbridge', 'Blog', 'Accounting', 'Finance', 'Business Growth', 'Tax Season', 'Offshore Accounting', 'UK Firms', '2026'],
    openGraph: {
        title: 'Case Studies | Explore Insightful Accounting Ideas',
        description: 'Stay updated with the latest trends, insights, and expert advice in accounting, finance, and business growth. Read our latest blog posts.',
        url: "/case-studies",
        siteName: "Gapbridge Outsource",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Case Studies",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: 'Case Studies | Explore Insightful Accounting Ideas',
        description: 'Stay updated with the latest trends, insights, and expert advice in accounting, finance, and business growth. Read our latest blog posts.',
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

const Page = async ({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; category?: string }>; // Define as Promise
}) => {
    // 1. Await the searchParams object
    const resolvedParams = await searchParams;

    // 2. Access the page property safely
    const currentPage = Number(resolvedParams.page) || 1;
    const currentCategory = resolvedParams.category || "All";

    const postsPerPage = 3;

    // 3. Pass the current category and page to your API for correct filtering
    const { caseStudies, totalPages } = await getCaseStudies(postsPerPage, currentPage);

    return (
        <List
            caseStudies={caseStudies}
            totalPages={totalPages}
            currentPage={currentPage}
        />
    );
};

export default Page;