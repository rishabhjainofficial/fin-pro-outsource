import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gapbridgebiz.com'

    // Add all your routes here
    const routes = [
        '',
        '/why-gapbridge',
        '/how-we-work',
        '/about-us',
        '/engagement-model',
        '/services/business-owners',
        '/services/valuation-services',
        '/services/advisory-services',
        '/cpa-firm',
        '/career',
        '/blog',
        '/case-studies',
        '/contact-us',
        '/security',
        '/privacy-policy',
        '/terms-and-conditions',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}