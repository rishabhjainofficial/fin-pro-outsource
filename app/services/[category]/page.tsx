import ServicePage from '@/components/client/services/ServicePage';
import { getServices } from '@/lib/api/services';
import { serviceIconMap, serviceCategoryIconMap } from '@/lib/data/icons';
import { Metadata } from 'next';

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const categoryData = await getServices(slug);

    return {
        title: categoryData?.meta?.title || "Financial Services",
        description: categoryData?.meta?.description || "Professional financial services",
        keywords: categoryData?.meta?.keywords,
    };
}

const Category = async ({ params }: { params: Promise<{ category: string }> }) => {
    // 1. Await the params object
    const { category } = await params;
    const categoryData = await getServices(category);

    const services = categoryData?.services?.map(service => ({
        title: service.title,
        slug: service.slug,
        icon: serviceIconMap[service.icon] || null,
        desc: service.description,
    })) || [];

    const headerPart1 = categoryData?.header?.part1 || "Comprehensive";
    const headerPart2 = categoryData?.header?.part2 || "Financial Solutions";
    const desc = categoryData?.header?.desc || "Explore our full range of outsourced financial services designed to streamline your operations and maximize growth.";
    const spanText = categoryData?.header?.spanText || "Global Operational Support";
    const spanIcon = serviceCategoryIconMap[categoryData?.header?.spanIcon || ""];

    return (
        <ServicePage services={services} headerPart1={headerPart1} headerPart2={headerPart2} desc={desc} spanText={spanText} spanIcon={spanIcon} />
    );
};

export default Category;