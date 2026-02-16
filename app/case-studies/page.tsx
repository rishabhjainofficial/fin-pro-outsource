// app/blog/page.tsx
import { getCaseStudies } from '@/lib/api/caseStudies';
import List from '@/components/client/case-studies/List';
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/case-studies');
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