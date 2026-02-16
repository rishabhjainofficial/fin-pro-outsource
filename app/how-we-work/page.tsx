import HowWeWork from "@/components/client/how-we-work/page";
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/how-we-work');
    return metaData;
}

const page = () => {
    return (
        <HowWeWork />
    )
}

export default page