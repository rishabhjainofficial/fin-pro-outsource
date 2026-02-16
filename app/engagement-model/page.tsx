import EngagementModel from '@/components/client/engagement-model/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Engagement Model",
    description: "Engagement Model",
    keywords: ["Engagement Model", "Engagement Model", "Engagement Model"],
    openGraph: {
        title: "Engagement Model",
        description: "Engagement Model",
        url: "/engagement-model",
        siteName: "Gapbridge Outsource",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Engagement Model",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Engagement Model",
        description: "Engagement Model",
        images: ["/og-image.jpg"],
    },
}

const page = () => {
    return (
        <EngagementModel />
    )
}

export default page