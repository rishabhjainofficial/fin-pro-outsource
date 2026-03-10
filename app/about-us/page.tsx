import AboutUs from "@/components/client/about-us/page";
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';
import { getAboutUsData } from '@/lib/api/aboutUs';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/about-us');
    return metaData;
}

const page = async() => {
    const teams = await getAboutUsData();
    return (
        <AboutUs teams={teams} />
    )
}

export default page