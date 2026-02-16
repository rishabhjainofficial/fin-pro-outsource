import ServiceDetailPage from '@/components/client/services/ServiceDetailPage';
import { getServiceBySlug } from '@/lib/api/services';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const completeSlug = `cpa-firm/${slug}`;
    const serviceData = await getServiceBySlug(completeSlug);

    return {
        title: serviceData?.meta?.title || "Financial Services",
        description: serviceData?.meta?.description || "Professional financial services",
        keywords: serviceData?.meta?.keywords,
        openGraph: {
            title: serviceData?.meta?.title || "Financial Services",
            description: serviceData?.meta?.description || "Professional financial services",
            url: `/cpa-firm/${slug}`,
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

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    // 1. Await the params object
    const { slug } = await params;
    const completeSlug = `cpa-firm/${slug}`;
    const serviceData = await getServiceBySlug(completeSlug);
    return (
        <ServiceDetailPage serviceData={serviceData} />
    );
};

export default page;