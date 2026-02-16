import EngagementModel from '@/components/client/engagement-model/page';
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/engagement-model');
    return metaData;
}

const page = () => {
    return (
        <EngagementModel />
    )
}

export default page