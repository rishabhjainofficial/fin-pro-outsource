import AboutUs from "@/components/client/about-us/page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Gapbridge Outsource",
    description: "About Us - Gapbridge Outsource",
    keywords: ["About Us", "Gapbridge Outsource"],
    openGraph: {
        title: "About Us - Gapbridge Outsource",
        description: "About Us - Gapbridge Outsource",
        url: "/about-us",
        siteName: "Gapbridge Outsource",
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 630,
                alt: "Gapbridge Outsource",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Gapbridge Outsource",
        description: "About Us - Gapbridge Outsource",
        images: ["/images/logo.png"],
    },
};

const page = () => {
    return (
        <AboutUs />
    )
}

export default page