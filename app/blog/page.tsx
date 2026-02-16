// app/blog/page.tsx
import { getBlogs, getCategories } from '@/lib/api/blogs';
import List from '@/components/client/blog/List';
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/blog');
    return metaData;
}

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