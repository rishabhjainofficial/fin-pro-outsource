import { getAllServices } from "@/lib/api/services";
import { serviceIconMap } from "@/lib/data/icons";
import { getBlogForHome } from "@/lib/api/blogs";
import { Blog } from "../data/blogs";
import { getCaseStudies } from "@/lib/api/caseStudies";
import { CaseStudy } from "../data/caseStudies";

export async function getHomeData(): Promise<{
    services: {
        title: string;
        slug: string;
        icon: React.ReactNode;
        description: string;
    }[];
    blogs: Blog[];
    brands: { name: string; src: string }[];
    teams: {
        title: string;
        description: string;
        image: string;
        tags: string[];
        tagsBgColor: string[];
        tagsColor: string[];
    }[];
    stats: {
        id: number;
        value: number;
        suffix: string;
        label: string;
        sub: string;
        color: string;
    }[];
    features: {
        title: string;
        description: string;
        icon: React.ReactNode;
        bgColor: string;
        textColor: string;
    }[];
    steps: {
        title: string;
        description: string;
        src: string;
    }[];
    industries: {
        title: string;
        src: string;
    }[];
    officeImages: {
        title: string;
        src: string;
    }[];
    tools: {
        name: string;
        src: string;
    }[];
    testimonials: {
        name: string;
        role: string;
        content: string;
        star: number;
        image: string
    }[];
    caseStudies: CaseStudy[]
} | null> {
    try {
        const rawServices = await getAllServices(6);
        const services = rawServices?.map(service => ({
            title: service.title,
            slug: service.slug,
            icon: serviceIconMap[service.icon] || null,
            description: service.description,
        })) || [];

        const blogs = await getBlogForHome(2);

        const brands = [
            { name: 'Client 1', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop' },
            { name: 'Client 2', src: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=870&auto=format&fit=crop' },
            { name: 'Client 3', src: 'https://images.unsplash.com/photo-1724167954496-a5c4befea483?q=80&w=327&auto=format&fit=crop' },
            { name: 'Client 4', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop' },
            { name: 'Client 5', src: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=870&auto=format&fit=crop' },
            { name: 'Client 6', src: 'https://images.unsplash.com/photo-1724167954496-a5c4befea483?q=80&w=327&auto=format&fit=crop' },
            { name: 'Client 7', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop' },
            { name: 'Client 8', src: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=870&auto=format&fit=crop' },
            { name: 'Client 9', src: 'https://images.unsplash.com/photo-1724167954496-a5c4befea483?q=80&w=327&auto=format&fit=crop' },
            { name: 'Client 10', src: 'https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=1075&auto=format&fit=crop' },
            { name: 'Client 11', src: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=870&auto=format&fit=crop' },
            { name: 'Client 12', src: 'https://images.unsplash.com/photo-1724167954496-a5c4befea483?q=80&w=327&auto=format&fit=crop' },
        ];

        const teams = [
            {
                title: 'Senior Accountants',
                description: 'Free up your in-house CPA team for specialized tasks, and leverage the skills of our certified accountants for routine tasks that are super-important. Hire certified senior accountants today.',
                image: '/images/team-member.png',
                tags: ['10+ years of experience', 'Advance knowledge', 'Client-focused'],
                tagsBgColor: ['bg-brand-green/10', 'bg-brand-blue/10', 'bg-brand-red/10'],
                tagsColor: ['text-brand-green', 'text-brand-blue', 'text-brand-red'],
            },
            {
                title: 'Tax Preparers',
                description: 'Our tax preparers are experts in navigating the complexities of tax regulations, ensuring accurate and timely filings. Let our professionals handle your tax preparation needs, so you can focus on growing your business.',
                image: '/images/team-member.png',
                tags: ['Expertise in tax regulations', 'Accurate filings', 'Timely service'],
                tagsBgColor: ['bg-brand-green/10', 'bg-brand-blue/10', 'bg-brand-red/10'],
                tagsColor: ['text-brand-green', 'text-brand-blue', 'text-brand-red'],
            },
            {
                title: 'Fractional CFO',
                description: 'Our Fractional CFOs provide strategic financial leadership on a part-time basis, helping businesses make informed decisions, optimize cash flow, and drive growth without the cost of a full-time CFO.',
                image: '/images/team-member.png',
                tags: ['Strategic financial leadership', 'Cost-effective', 'Growth-focused'],
                tagsBgColor: ['bg-brand-green/10', 'bg-brand-blue/10', 'bg-brand-red/10'],
                tagsColor: ['text-brand-green', 'text-brand-blue', 'text-brand-red'],
            },
            {
                title: 'Bookkeepers',
                description: 'Our bookkeepers ensure your financial records are accurate and up-to-date, providing essential support for your business’s financial health. Let us handle your bookkeeping needs so you can focus on what you do best.',
                image: '/images/team-member.png',
                tags: ['Accurate records', 'Up-to-date', 'Financial health'],
                tagsBgColor: ['bg-brand-green/10', 'bg-brand-blue/10', 'bg-brand-red/10'],
                tagsColor: ['text-brand-green', 'text-brand-blue', 'text-brand-red'],
            },
            {
                title: 'Payroll',
                description: 'Our payroll services ensure your employees are paid accurately and on time, while also managing tax withholdings and compliance. Let us take care of your payroll needs so you can focus on growing your business.',
                image: '/images/team-member.png',
                tags: ['Accurate payments', 'Timely service', 'Compliance management'],
                tagsBgColor: ['bg-brand-green/10', 'bg-brand-blue/10', 'bg-brand-red/10'],
                tagsColor: ['text-brand-green', 'text-brand-blue', 'text-brand-red'],
            }
        ];

        const stats = [
            { id: 1, value: 98, suffix: '%', label: 'Savings', sub: 'Increased Efficiency', color: 'text-brand-green' },
            { id: 2, value: 15, suffix: '+', label: 'Experience', sub: 'Industry Expertise', color: 'text-brand-blue' },
            { id: 3, value: 100, suffix: '+', label: 'Reconciled', sub: 'Accounts Managed', color: 'text-brand-navy' },
            { id: 4, value: 50, suffix: '+', label: 'Firms', sub: 'Active Partnerships', color: 'text-brand-red' },
        ];

        const features = [
            {
                title: 'Proven expertise',
                description: 'Professionals with deep domain experience delivering measurable outcomes.',
                icon: serviceIconMap['ShieldCheck'],
                bgColor: 'bg-brand-green',
                textColor: 'text-brand-green'
            },
            {
                title: 'Reliable delivery',
                description: 'Predictable timelines, consistent communication and SLA-backed engagements.',
                icon: serviceIconMap['Clock'],
                bgColor: 'bg-brand-blue',
                textColor: 'text-brand-blue'
            },
            {
                title: 'Scalable teams',
                description: 'Quickly scale resource allocation up or down to match your needs.',
                icon: serviceIconMap['Users'],
                bgColor: 'bg-brand-navy',
                textColor: 'text-brand-navy'
            },
            {
                title: 'Security & compliance',
                description: 'Enterprise-grade data controls and compliance with industry standards.',
                icon: serviceIconMap['Lock'],
                bgColor: 'bg-brand-red',
                textColor: 'text-brand-red'
            },
            {
                title: 'Transparent pricing',
                description: 'Simple, predictable pricing models with clear deliverables.',
                icon: serviceIconMap['DollarSign'],
                bgColor: 'bg-brand-yellow',
                textColor: 'text-brand-yellow'
            },
            {
                title: 'Data-driven insights',
                description: 'Actionable dashboards that help you make informed decisions.',
                icon: serviceIconMap['BarChart'],
                bgColor: 'bg-brand-pink',
                textColor: 'text-brand-pink'
            },
        ];

        const steps = [
            {
                title: 'Primary Discussion',
                description: 'We kickstart our working relationship by discussing your business requirements & what you hope to achieve with our help.',
                src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
            },
            {
                title: 'SLAs Setup',
                description: 'After discussing your requirements, our team understands your operating procedures, helping us set the right SLAs.',
                src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
            },
            {
                title: 'Contract Agreement',
                description: 'Once the SLAs are set up, we officiate things by signing an agreement, outlining– team members, deadlines, clauses, etc.',
                src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
            },
            {
                title: 'Services Commencement',
                description: 'After finalizing all paperwork, we begin executing the pre-defined tasks and required functions.',
                src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
            },
            {
                title: 'Weekly Review Meetings',
                description: 'We conduct weekly meets, ensuring we address any concern & keep client satisfaction at the heart of our support.',
                src: 'https://cdn.prod.website-files.com/6718c309cc349b579872ddbb/6731dec47e22df831eca24ab_slide-img.svg'
            },
        ];

        const industries = [
            {
                title: 'Real Estate',
                src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Healthcare',
                src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Hotel & Restaurants',
                src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Retail & Wholesale',
                src: 'https://images.unsplash.com/photo-1606824722920-4c652a70f348?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Shipping & Logistics',
                src: 'https://images.unsplash.com/photo-1769144256181-698b8f807066?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Agriculture',
                src: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Manufacturing',
                src: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'E-commerce',
                src: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Franchise',
                src: 'https://images.unsplash.com/photo-1726003352580-25aee6be334c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'Small business accounting',
                src: 'https://images.unsplash.com/photo-1762831063505-68022b6133a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ];

        const officeImages = [
            {
                src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=869&auto=format&fit=crop',
                title: 'Office hallway'
            },
            {
                src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1032&auto=format&fit=crop',
                title: 'Meeting Room 1'
            },
            {
                src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=869&auto=format&fit=crop',
                title: 'Lunch Area'
            },
            {
                src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop',
                title: 'Team Work'
            },
            {
                src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop',
                title: 'Meeting Room 2'
            },
            {
                src: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=870&auto=format&fit=crop',
                title: 'Work Space'
            },
            {
                src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Spacious boardroom'
            }
        ];

        const tools = [
            {
                name: 'QuickBooks',
                src: '/images/quickbooks.png'
            },
            {
                name: 'Xero',
                src: '/images/xero.png'
            },
            {
                name: 'Stripe',
                src: '/images/stripe.png'
            },
            {
                name: 'Bill.com',
                src: '/images/billcom.png'
            },
            {
                name: 'Shopify',
                src: '/images/shopify.png'
            },
            {
                name: 'CCHero',
                src: '/images/cchero.png'
            },
            {
                name: 'DrakeSoftware',
                src: '/images/drakesoftware.png'
            },
            {
                name: 'Intuit',
                src: '/images/intuit.png'
            },
            {
                name: 'Slack',
                src: '/images/slack.png'
            },
            {
                name: 'Dropbox',
                src: '/images/dropbox.png'
            },
            {
                name: 'Amazon',
                src: '/images/amazon.png'
            },
            {
                name: 'Zoho',
                src: '/images/zoho.png'
            }
        ];

        const testimonials = [
            {
                name: "Sarah Jenkins",
                role: "CEO, TechFlow Solutions",
                content: "Working with the team has been a game-changer for our financial clarity. Their adroit handling of our complex accounts saved us countless hours.",
                star: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
            },
            {
                name: "David Chen",
                role: "Founder, GreenSpace Ltd",
                content: "The level of expertise across multiple accounting tools is impressive. They didn't just manage our books; they optimized our entire workflow.",
                star: 4,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
            },
            {
                name: "Emily Rodriguez",
                role: "CFO, Artisan Collective",
                content: "Transparent communication and deep technical knowledge. It's rare to find a partner that feels like an extension of your own internal team.",
                star: 4,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
            },
            {
                name: "Marcus Thorne",
                role: "Director, Global Logistics",
                content: "Their 5-step hiring process delivered a top-tier accountant in record time. Professional, efficient, and highly recommended.",
                star: 5,
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
            }
        ];

        const { caseStudies } = await getCaseStudies(4, 1);

        return {
            services,
            blogs,
            brands,
            teams,
            stats,
            features,
            steps,
            industries,
            officeImages,
            tools,
            testimonials,
            caseStudies
        };
    } catch (error) {
        console.error('Error fetching home data:', error);
        return null;
    }
}