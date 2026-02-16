import ContactUs from '@/components/client/contact-us/page';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact Us",
        description: "Contact us for any inquiries",
        keywords: ["Contact Us", "Inquiries", "Contact"],
        openGraph: {
            title: "Contact Us",
            description: "Contact us for any inquiries",
            type: "website",
            locale: "en_US",
            siteName: "Contact Us",
            images: [
                {
                    url: "https://example.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Contact Us",
                },
            ],
        },
        twitter: {
            title: "Contact Us",
            description: "Contact us for any inquiries",
            card: "summary_large_image",
            images: ["/og-image.jpg"],
        },
        icons: {
            icon: '/favicon.ico',
        },
    };
}

const page = () => {
    return (
        <ContactUs />
    )
}

export default page