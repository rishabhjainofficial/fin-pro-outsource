import { getSocialLinks } from '@/lib/api/socialLink';
import FooterClient from './footer/page';
import { getServices } from '@/lib/api/services';

const Footer = async () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'How We Work', href: '/how-we-work' },
        { name: 'Why Gapbridge', href: '/why-gapbridge' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Locations', href: '/locations' },
        { name: 'Career', href: '/career' },
        { name: 'Blog', href: '/blog' },
        { name: 'Engagement Model', href: '/engagement-model' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];

    const { services: businessServices } = await getServices('business-owners');

    const { services: cpaFirmLinks } = await getServices('cpa-firm');

    const socialLinks = getSocialLinks();

    return (
        <FooterClient socialLinks={socialLinks} companyLinks={companyLinks} businessServices={businessServices || []} cpaFirmLinks={cpaFirmLinks || []} currentYear={currentYear} />
    );
};

export default Footer;