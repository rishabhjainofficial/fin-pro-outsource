import WhyGapbridge from '@/components/client/why-gapbridge/page';
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/why-gapbridge');
    return metaData;
}

const page = () => {
    return (
        <WhyGapbridge />
    );
};

export default page;