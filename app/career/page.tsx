import Career from '@/components/client/career/page';
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/career');
    return metaData;
}

const page = () => {
    return (
        <Career />
    )
}

export default page