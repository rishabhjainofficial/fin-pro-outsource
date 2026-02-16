import ServiceDetailPage from '@/components/client/services/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/api/services';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
    const { category, slug } = await params;
    const completeSlug = `services/${category}/${slug}`;
    const serviceData = await getServiceBySlug(completeSlug);

    return serviceData?.meta || {};
}

const page = async ({ params }: { params: { category: string; slug: string } }) => {
    const { category, slug } = await params;
    const completeSlug = `services/${category}/${slug}`;
    const serviceData = await getServiceBySlug(completeSlug);
    return (
        <ServiceDetailPage serviceData={serviceData} />
    )
}

export default page