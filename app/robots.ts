import { MetadataRoute } from 'next'

export const metadata = { robots: { index: false, follow: true } };

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://gapbridgebiz.com/sitemap.xml',
    }
}