import HowWeWork from "@/components/client/how-we-work/page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "How We Work - The Future of Accounting",
    description: "Discover how Gapbridge works to provide seamless, tech-driven accounting and finance outsourcing.",
    keywords: ["How We Work", "Accounting Outsourcing", "FinTech", "Gapbridge Advantage"],
    openGraph: {
        title: "How We Work - The Future of Accounting",
        description: "Discover how Gapbridge works to provide seamless, tech-driven accounting and finance outsourcing.",
        url: "/how-we-work",
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
        title: "How We Work - The Future of Accounting",
        description: "Discover how Gapbridge works to provide seamless, tech-driven accounting and finance outsourcing.",
        images: ["/images/logo.png"],
    },
};

const page = () => {
    return (
        <HowWeWork />
    )
}

export default page