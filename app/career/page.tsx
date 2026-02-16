import Career from '@/components/client/career/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Career",
    description: "Career",
    keywords: ["Career", "Career", "Career"],
    openGraph: {
        title: "Career",
        description: "Career",
        url: "/career",
        siteName: "Gapbridge Outsource",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Career",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Career",
        description: "Career",
        images: ["/og-image.jpg"],
    },
}

const page = () => {
    return (
        <Career />
    )
}

export default page