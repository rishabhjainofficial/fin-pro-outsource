import { servicesData, categoriesData, type Service, type ServiceCategory } from '@/lib/data';

// Simulate async DB call - makes migration to DB easier later
export async function getServices(slug: string): Promise<ServiceCategory> {

    // Simulate network delay (optional)
    await new Promise(resolve => setTimeout(resolve, 10));

    // When you add DB, just replace this line with:
    // return await prisma.service.findMany();

    if (slug) {
        const serviceCategory = categoriesData.find(category => category.slug === slug);
        const services = servicesData.filter(service => service.category === slug);

        if (!serviceCategory) {
            throw new Error(`Category with slug "${slug}" not found.`);
        }

        serviceCategory.services = services; // Attach services to the category
        return serviceCategory;
    }

    return categoriesData[0]; // Return the first category if no slug is provided
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
    await new Promise(resolve => setTimeout(resolve, 10));

    // When you add DB:
    // return await prisma.service.findUnique({ where: { slug } });

    return servicesData.find(service => service.slug === slug);
}

export async function getServicesByCategory(category: string): Promise<Service[]> {
    await new Promise(resolve => setTimeout(resolve, 10));

    // When you add DB:
    // return await prisma.service.findMany({ where: { category } });

    return servicesData.filter(service => service.category === category);
}