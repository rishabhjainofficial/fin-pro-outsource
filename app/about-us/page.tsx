import AboutUs from "@/components/client/about-us/page";
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/about-us');
    return metaData;
}

const page = () => {
    return (
        <AboutUs />
    )
}

export default page