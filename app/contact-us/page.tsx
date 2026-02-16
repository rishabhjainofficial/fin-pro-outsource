import ContactUs from '@/components/client/contact-us/page';
import { Metadata } from 'next';
import { getPageMetaData } from '@/lib/api/pageMetaData';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = await getPageMetaData('/contact-us');
    return metaData;
}

const page = () => {
    return (
        <ContactUs />
    )
}

export default page