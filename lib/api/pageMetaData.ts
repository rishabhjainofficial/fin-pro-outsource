import { pageMetaData } from "@/lib/data/pageMetaData";
import { Metadata } from "next";

export async function getPageMetaData(slug: string): Promise<Metadata> {
    const data = pageMetaData.find((metaData) => metaData?.openGraph?.url === slug);
    if (!data) {
        // Return default metadata if not found
        return pageMetaData.find((metaData) => metaData?.openGraph?.url === '/') || {};
    }
    return data;
}