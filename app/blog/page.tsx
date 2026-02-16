// app/blog/page.tsx
import { getBlogs, getCategories } from '@/lib/api/blogs';
import List from '@/components/client/blog/List';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Explore Insightful Accounting Ideas',
    description: 'Stay updated with the latest trends, insights, and expert advice in accounting, finance, and business growth. Read our latest blog posts.',
    keywords: ['Gapbridge Outsourcing', 'Outsourcing', 'Gapbridge', 'Blog', 'Accounting', 'Finance', 'Business Growth', 'Tax Season', 'Offshore Accounting', 'UK Firms', '2026'],
    openGraph: {
        title: 'Blog | Explore Insightful Accounting Ideas',
        description: 'Stay updated with the latest trends, insights, and expert advice in accounting, finance, and business growth. Read our latest blog posts.',
        url: "/blog",   
        siteName: "Gapbridge Outsource",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Blog",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: 'Blog | Explore Insightful Accounting Ideas',
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
    const categories = getCategories();

    // 3. Pass the current category and page to your API for correct filtering
    const { blogs, totalCount } = await getBlogs(postsPerPage, currentPage, currentCategory);

    const totalPages = Math.ceil(totalCount / postsPerPage);

    return (
        <List
            blogs={blogs}
            categories={categories}
            totalPages={totalPages}
            currentPage={currentPage}
        />
    );
};

export default Page;