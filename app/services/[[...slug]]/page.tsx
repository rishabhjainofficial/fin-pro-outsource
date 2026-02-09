const ServicePage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
    // 1. Await the params object
    const resolvedParams = await params;

    // 2. Get the slug from the array (e.g., /services/business-owner -> "business-owner")
    const currentSlug = resolvedParams.slug ? resolvedParams.slug[0] : "No Slug Provided";

    return (
        <div className="min-h-screen flex items-center justify-center pt-5 bg-gray-50 text-brand-navy text-4xl">
            {currentSlug}
        </div>
    );
};

export default ServicePage;