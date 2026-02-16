import ServiceDetailPage from '@/components/client/services/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/api/services';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
    const { category, slug } = await params;
    const completeSlug = `services/${category}/${slug}`;
    const serviceData = await getServiceBySlug(completeSlug);

    return {
        title: serviceData?.meta?.title || "Financial Services",
        description: serviceData?.meta?.description || "Professional financial services",
        keywords: serviceData?.meta?.keywords,
        openGraph: {
            title: serviceData?.meta?.title || "Financial Services",
            description: serviceData?.meta?.description || "Professional financial services",
            url: `/services/${category}/${slug}`,
            siteName: "Gapbridge Outsource",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "CPA Firm",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: serviceData?.meta?.title || "Financial Services",
            description: serviceData?.meta?.description || "Professional financial services",
            images: ["/og-image.jpg"],
        },
        icons: {
            icon: '/favicon.ico',
        },
    };
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