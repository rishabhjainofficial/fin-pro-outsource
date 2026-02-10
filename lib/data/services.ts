export interface ServiceCategory {
    name: string;
    slug: string;
    meta: {
        title: string;
        description: string;
        keywords: string;
    };
    header: {
        part1: string;
        part2: string;
        desc: string;
        spanText: string;
        spanIcon: string;
    };
    services?: Service[]; // Optional property to hold services related to this category
}

export interface Service {
    id: number;
    title: string;
    slug: string;
    icon: string;
    description: string;
    category: string;
    order: number;
    meta: {
        title: string;
        description: string;
        keywords: string;
    };
}

export const categoriesData: ServiceCategory[] = [
    {
        name: "Business Owners",
        slug: "business-owners",
        meta: {
            title: "Accounting Outsourcing Services for Business Owners | Gapbridge",
            description: "Discover top-tier accounting outsourcing services tailored for business owners. Streamline your financial operations with Gapbridge's expert solutions.",
            keywords: "accounting outsourcing, business accounting services, outsourced accounting for business owners, financial management solutions"
        },
        header: {
            part1: "Comprehensive",
            part2: "Financial Solutions",
            desc: "Explore our full range of outsourced financial services designed to streamline your operations and maximize growth.",
            spanText: "Global Operational Support",
            spanIcon: "Globe"
        }
    },
    {
        name: "Valuation Services",
        slug: "valuation-services",
        meta: {
            title: "Business Valuation Services | Gapbridge",
            description: "Get accurate business valuation services with Gapbridge. Expert solutions to help you understand your company's worth and make informed financial decisions.",
            keywords: "business valuation services, company valuation, business appraisal, accurate valuation solutions"
        },
        header: {
            part1: "Accurate",
            part2: "Valuation Services",
            desc: "Discover our expert valuation services designed to provide accurate insights into your business's worth and drive informed financial decisions.",
            spanText: "Trusted Valuation Experts",
            spanIcon: "ShieldCheck"
        }
    },
    {
        name: "Advisory Services",
        slug: "advisory-services",
        meta: {
            title: "Financial Advisory Services | Gapbridge",
            description: "Access expert financial advisory services with Gapbridge. Tailored solutions to help you navigate complex financial challenges and drive strategic growth.",
            keywords: "financial advisory services, outsourced financial consulting, expert financial advice, strategic financial solutions"
        },
        header: {
            part1: "Expert",
            part2: "Financial Advisory",
            desc: "Navigate complex financial challenges with confidence using our expert advisory services designed to drive strategic growth and informed decision-making.",
            spanText: "Strategic Financial Guidance",
            spanIcon: "Lightbulb"
        }
    },
    {
        name: "CPA Firms",
        slug: "cpa-firm",
        meta: {
            title: "Offshore Staffing Services for CPA Firms | Gapbridge",
            description: "Access cost-effective offshore staffing solutions for CPA firms with Gapbridge. Tailored services to help business owners find skilled professionals and optimize their workforce.",
            keywords: "offshore staffing, CPA firm staffing, outsourced staffing solutions, cost-effective staffing for business owners"
        },
        header: {
            part1: "Scale Your",
            part2: "Capacity.",
            desc: "Eliminate the overhead of local hiring. Access our pool of specialized financial talent to expand your CPA firm's service offerings and throughput.",
            spanText: "Global Staff Augmentation",
            spanIcon: "Users"
        }
    }
];

export const servicesData: Service[] = [
    {
        id: 1,
        title: "Accounting Outsourcing Services",
        slug: "services/business-owners/accounting-outsourcing-services",
        icon: "Calculator",
        description: "CPA's go-to firm for A-Z accounting needs",
        category: "business-owners",
        order: 1,
        meta: {
            title: "Accounting Outsourcing Services for Business Owners | Gapbridge",
            description: "Discover top-tier accounting outsourcing services tailored for business owners. Streamline your financial operations with Gapbridge's expert solutions.",
            keywords: "accounting outsourcing, business accounting services, outsourced accounting for business owners, financial management solutions"
        }
    },
    {
        id: 2,
        title: "Bookkeeping Services",
        slug: "services/business-owners/bookkeeping-services",
        icon: "BookOpen",
        description: "Experienced bookkeepers at your service",
        category: "business-owners",
        order: 2,
        meta: {
            title: "Professional Bookkeeping Services for Business Owners | Gapbridge",
            description: "Keep your financial records accurate and up-to-date with Gapbridge's professional bookkeeping services. Tailored solutions for business owners.",
            keywords: "bookkeeping services, business bookkeeping, outsourced bookkeeping for business owners, financial record management"
        }
    },
    {
        id: 3,
        title: "Outsourced Tax Preparation",
        slug: "services/business-owners/outsourced-tax-preparation",
        icon: "Receipt",
        description: "End-to-end tax preparation support",
        category: "business-owners",
        order: 3,
        meta: {
            title: "Outsourced Tax Preparation Services for Business Owners | Gapbridge",
            description: "Simplify your tax season with Gapbridge's outsourced tax preparation services. Expert support for business owners to ensure compliance and maximize returns.",
            keywords: "outsourced tax preparation, tax services for business owners, tax support, tax compliance solutions"
        }
    },
    {
        id: 4,
        title: "AR & AP Management",
        slug: "services/business-owners/ar-ap-management",
        icon: "Landmark",
        description: "Comprehensive AR & AP management services",
        category: "business-owners",
        order: 4,
        meta: {
            title: "AR & AP Management Services for Business Owners | Gapbridge",
            description: "Optimize your cash flow with Gapbridge's comprehensive AR & AP management services. Tailored solutions for business owners to streamline financial operations.",
            keywords: "AR management, AP management, accounts receivable services, accounts payable services, financial operations optimization"
        }
    },
    {
        id: 5,
        title: "Accounting Software Consulting",
        slug: "services/business-owners/accounting-software-consulting",
        icon: "Settings",
        description: "Helping choose the ideal accounting software",
        category: "business-owners",
        order: 5,
        meta: {
            title: "Accounting Software Consulting for Business Owners | Gapbridge",
            description: "Find the perfect accounting software for your business with Gapbridge's expert consulting services. Tailored recommendations to meet your unique needs.",
            keywords: "accounting software consulting, software recommendations for business owners, accounting technology solutions, financial software consulting"
        }
    },
    {
        id: 6,
        title: "Payroll Management",
        slug: "services/business-owners/payroll-management",
        icon: "Users",
        description: "Streamline your CPA's payroll processes",
        category: "business-owners",
        order: 6,
        meta: {
            title: "Payroll Management Services for Business Owners | Gapbridge",
            description: "Simplify your payroll processes with Gapbridge's expert payroll management services. Tailored solutions for business owners to ensure accurate and timely payroll.",
            keywords: "payroll management, outsourced payroll services, payroll solutions for business owners, employee payment processing"
        }
    },
    {
        id: 7,
        title: "Virtual CFO",
        slug: "services/business-owners/virtual-cfo",
        icon: "PieChart",
        description: "Flexible Virtual CFO solutions",
        category: "business-owners",
        order: 7,
        meta: {
            title: "Virtual CFO Services for Business Owners | Gapbridge",
            description: "Access expert financial guidance with Gapbridge's Virtual CFO services. Flexible solutions to help business owners make informed financial decisions and drive growth.",
            keywords: "virtual CFO services, outsourced CFO, financial consulting for business owners, strategic financial guidance"
        }
    },
    {
        id: 8,
        title: "Xero & QuickBooks Accounting",
        slug: "services/business-owners/xero-quickbooks-accounting",
        icon: "Database",
        description: "Specialised Xero & QuickBooks services",
        category: "business-owners",
        order: 8,
        meta: {
            title: "Xero & QuickBooks Accounting Services for Business Owners | Gapbridge",
            description: "Expert Xero and QuickBooks accounting services tailored for business owners. Streamline your financial management with Gapbridge's specialized solutions.",
            keywords: "Xero accounting services, QuickBooks accounting services, outsourced accounting for business owners, financial software expertise"
        }
    },
    {
        id: 9,
        title: "Audit Support Services",
        slug: "services/business-owners/audit-support-services",
        icon: "ShieldCheck",
        description: "Get top-notch audit support service",
        category: "business-owners",
        order: 9,
        meta: {
            title: "Audit Support Services for Business Owners | Gapbridge",
            description: "Ensure a smooth audit process with Gapbridge's expert audit support services. Tailored solutions to help business owners prepare for and navigate audits with confidence.",
            keywords: "audit support services, outsourced audit assistance, audit preparation for business owners, financial audit support"
        }
    },
    {
        id: 10,
        title: "Cost & Operation Analysis",
        slug: "services/business-owners/cost-and-operation-analysis",
        icon: "LineChart",
        description: "Drive profitability & make data-backed decisions",
        category: "business-owners",
        order: 10,
        meta: {
            title: "Cost & Operation Analysis Services for Business Owners | Gapbridge",
            description: "Enhance profitability and make informed decisions with Gapbridge's cost and operation analysis services. Tailored solutions for business owners to optimize financial performance.",
            keywords: "cost analysis services, operation analysis services, financial performance optimization, data-driven decision making"
        }
    },
    {
        id: 11,
        title: "Year End Services",
        slug: "services/business-owners/year-end-services",
        icon: "Calendar",
        description: "Smoothly transition into the new fiscal year",
        category: "business-owners",
        order: 11,
        meta: {
            title: "Year End Services for Business Owners | Gapbridge",
            description: "Ensure a smooth transition into the new fiscal year with Gapbridge's expert year end services. Tailored solutions to help business owners close their books and prepare for the year ahead.",
            keywords: "year end services, fiscal year closing, financial year transition, outsourced year end support"
        }
    },
    {
        id: 12,
        title: "Preparation of Financial Statements",
        slug: "services/business-owners/preparation-of-financial-statements",
        icon: "FileText",
        description: "Helping keep financial statements handy",
        category: "business-owners",
        order: 12,
        meta: {
            title: "Preparation of Financial Statements for Business Owners | Gapbridge",
            description: "Keep your financial statements accurate and up-to-date with Gapbridge's expert preparation services. Tailored solutions for business owners to ensure compliance and informed decision-making.",
            keywords: "preparation of financial statements, outsourced financial statement services, financial reporting for business owners, accurate financial records"
        }
    },
    {
        id: 13,
        title: "Offshore Staffing for CPA Firms",
        slug: "services/business-owners/offshore-staffing-for-cpa-firm",
        icon: "UserPlus",
        description: "Cost-effective Staffing Solutions For CPAs",
        category: "business-owners",
        order: 13,
        meta: {
            title: "Offshore Staffing Services for CPA Firms | Gapbridge",
            description: "Access cost-effective offshore staffing solutions for CPA firms with Gapbridge. Tailored services to help business owners find skilled professionals and optimize their workforce.",
            keywords: "offshore staffing, CPA firm staffing, outsourced staffing solutions, cost-effective staffing for business owners"
        }
    },
    {
        id: 14,
        title: "Outsource Bookkeeping & Accounting for CPAs",
        slug: "services/business-owners/outsource-bookkeeping-and-accounting-for-cpas",
        icon: "Laptop",
        description: "Efficient CPA Assistance",
        category: "business-owners",
        order: 14,
        meta: {
            title: "Outsource Bookkeeping & Accounting Services for CPAs | Gapbridge",
            description: "Enhance your CPA firm's efficiency with Gapbridge's outsourced bookkeeping and accounting services. Tailored solutions to help business owners support their CPA teams and optimize financial operations.",
            keywords: "outsource bookkeeping for CPAs, outsource accounting for CPAs, CPA firm support services, efficient financial assistance for business owners"
        }
    },
    {
        id: 15,
        title: "Outsourced Finance and Accounting Services",
        slug: "services/business-owners/outsourced-finance-and-accounting-services",
        icon: "BarChart4",
        description: "Trusted outsourced financial services",
        category: "business-owners",
        order: 15,
        meta: {
            title: "Outsourced Finance and Accounting Services for Business Owners | Gapbridge",
            description: "Access trusted outsourced finance and accounting services with Gapbridge. Tailored solutions to help business owners streamline their financial operations and drive growth.",
            keywords: "outsourced finance services, outsourced accounting services, financial outsourcing for business owners, trusted financial solutions"
        }
    },
    {
        id: 16,
        title: "Business Valuation Service",
        slug: "services/valuation-services/business-valuation",
        description: "Accurate business valuation services.",
        icon: "TrendingUp",
        category: "valuation-services",
        order: 1,
        meta: {
            title: "Business Valuation Services | Gapbridge",
            description: "Get accurate business valuation services with Gapbridge. Expert solutions to help you understand your company's worth and make informed financial decisions.",
            keywords: "business valuation services, company valuation, business appraisal, accurate valuation solutions"
        }
    },
    {
        id: 17,
        title: "Startup Valuation Service",
        slug: "services/valuation-services/startup-valuation",
        description: "Expert valuation solutions for startups.",
        icon: "Rocket",
        category: "valuation-services",
        order: 2,
        meta: {
            title: "Startup Valuation Services | Gapbridge",
            description: "Access expert startup valuation services with Gapbridge. Tailored solutions to help you understand your startup's worth and attract investors.",
            keywords: "startup valuation services, new business valuation, startup appraisal, expert valuation solutions for startups"
        }
    },
    {
        id: 18,
        title: "ESOP Valuation Service",
        slug: "services/valuation-services/esop-valuation",
        description: "Expert ESOP valuation solutions.",
        icon: "Users",
        category: "valuation-services",
        order: 3,
        meta: {
            title: "ESOP Valuation Services | Gapbridge",
            description: "Get expert ESOP valuation services with Gapbridge. Tailored solutions to help you determine the value of your Employee Stock Ownership Plan and make informed decisions.",
            keywords: "ESOP valuation services, employee stock ownership plan valuation, ESOP appraisal, expert ESOP valuation solutions"
        }
    },
    {
        id: 19,
        title: "IBBI-Registered Valuation Services",
        slug: "services/valuation-services/ibbi-valuation",
        description: "Accurate IBBI Business Valuation.",
        icon: "Landmark",
        category: "valuation-services",
        order: 4,
        meta: {
            title: "IBBI-Registered Valuation Services | Gapbridge",
            description: "Access accurate IBBI-registered valuation services with Gapbridge. Expert solutions to help you determine the value of your business for insolvency and bankruptcy proceedings.",
            keywords: "IBBI valuation services, insolvency valuation, bankruptcy valuation, accurate IBBI-registered valuation solutions"
        }
    },
    {
        id: 20,
        title: "Fractional CFO Service",
        slug: "services/advisory-services/fractional-cfo-service",
        description: "Boost growth with expert Fractional CFO guidance.",
        icon: "PieChart",
        category: "advisory-services",
        order: 1,
        meta: {
            title: "Fractional CFO Services | Gapbridge",
            description: "Access expert Fractional CFO services with Gapbridge. Tailored solutions to help you drive growth and make informed financial decisions with part-time CFO guidance.",
            keywords: "fractional CFO services, part-time CFO, outsourced CFO, expert financial guidance for growth"
        }
    },
    {
        id: 21,
        title: "Hire Accountant",
        slug: "cpa-firm/hire-accountant",
        description: "Hire dedicated accountants for your CPA firm.",
        icon: "Users",
        category: "cpa-firm",
        order: 1,
        meta: {
            title: "Hire Accountant Services for CPA Firms | Gapbridge",
            description: "Hire dedicated accountants for your CPA firm with Gapbridge. Tailored staffing solutions to help you find skilled professionals and optimize your workforce.",
            keywords: "hire accountant, accountant staffing for CPA firms, outsourced accountant services, cost-effective staffing solutions"
        }
    },
    {
        id: 22,
        title: "Hire Bookkeeper",
        slug: "cpa-firm/hire-bookkeeper",
        description: "Hire bookkeepers & readily manage client’s accounts.",
        icon: "BookOpen",
        category: "cpa-firm",
        order: 2,
        meta: {
            title: "Hire Bookkeeper Services for CPA Firms | Gapbridge",
            description: "Hire skilled bookkeepers for your CPA firm with Gapbridge. Tailored staffing solutions to help you manage your clients' accounts efficiently and optimize your workforce.",
            keywords: "hire bookkeeper, bookkeeper staffing for CPA firms, outsourced bookkeeper services, efficient staffing solutions"
        }
    },
    {
        id: 23,
        title: "Hire Fractional CFO",
        slug: "cpa-firm/hire-fractional-cfo",
        description: "Let our CFOs bring a high-level of financial strategy to your clients.",
        icon: "PieChart",
        category: "cpa-firm",
        order: 3,
        meta: {
            title: "Hire Fractional CFO Services for CPA Firms | Gapbridge",
            description: "Hire expert Fractional CFOs for your CPA firm with Gapbridge. Tailored staffing solutions to help you provide high-level financial strategy to your clients and optimize your workforce.",
            keywords: "hire fractional CFO, fractional CFO staffing for CPA firms, outsourced CFO services, expert financial strategy for clients"
        }
    },
    {
        id: 24,
        title: "Hire Tax Preparer",
        slug: "cpa-firm/hire-tax-preparer",
        description: "Carry out accurate tax filings for your clients effortlessly.",
        icon: "Receipt",
        category: "cpa-firm",
        order: 4,
        meta: {
            title: "Hire Tax Preparer Services for CPA Firms | Gapbridge",
            description: "Hire skilled tax preparers for your CPA firm with Gapbridge. Tailored staffing solutions to help you carry out accurate tax filings for your clients effortlessly and optimize your workforce.",
            keywords: "hire tax preparer, tax preparer staffing for CPA firms, outsourced tax preparation services, efficient staffing solutions"
        }
    },
    {
        id: 25,
        title: "Hire Staff Accountant",
        slug: "cpa-firm/hire-staff-accountant",
        description: "Elevate your accounting services with specialized staff support.",
        icon: "UserCheck",
        category: "cpa-firm",
        order: 5,
        meta: {
            title: "Hire Staff Accountant Services for CPA Firms | Gapbridge",
            description: "Hire skilled staff accountants for your CPA firm with Gapbridge. Tailored staffing solutions to help you elevate your accounting services and optimize your workforce.",
            keywords: "hire staff accountant, staff accountant staffing for CPA firms, outsourced accounting services, skilled accounting support"
        }
    },
    {
        id: 26,
        title: "Hire Audit Support Staff",
        slug: "cpa-firm/hire-audit-support",
        description: "Seamlessly manage all your audit preparations and documentation.",
        icon: "ShieldCheck",
        category: "cpa-firm",
        order: 6,
        meta: {
            title: "Hire Audit Support Staff Services for CPA Firms | Gapbridge",
            description: "Hire skilled audit support staff for your CPA firm with Gapbridge. Tailored staffing solutions to help you manage all your audit preparations and documentation seamlessly and optimize your workforce.",
            keywords: "hire audit support staff, audit support staffing for CPA firms, outsourced audit support services, seamless audit management"
        }
    },
    {
        id: 27,
        title: "Hire QuickBooks Expert",
        slug: "cpa-firm/hire-quickbooks-expert",
        description: "Make optimum use of QuickBooks software with certified experts.",
        icon: "Database",
        category: "cpa-firm",
        order: 7,
        meta: {
            title: "Hire QuickBooks Expert Services for CPA Firms | Gapbridge",
            description: "Hire certified QuickBooks experts for your CPA firm with Gapbridge. Tailored staffing solutions to help you make optimum use of QuickBooks software and optimize your workforce.",
            keywords: "hire QuickBooks expert, QuickBooks expert staffing for CPA firms, outsourced QuickBooks services, certified QuickBooks support"
        }
    },
    {
        id: 28,
        title: "Hire Tax Reviewer",
        slug: "cpa-firm/hire-tax-reviewer",
        description: "Maximize tax returns by filing and reviewing taxes accurately.",
        icon: "FileSearch",
        category: "cpa-firm",
        order: 8,
        meta: {
            title: "Hire Tax Reviewer Services for CPA Firms | Gapbridge",
            description: "Hire skilled tax reviewers for your CPA firm with Gapbridge. Tailored staffing solutions to help you maximize tax returns by filing and reviewing taxes accurately and optimize your workforce.",
            keywords: "hire tax reviewer, tax reviewer staffing for CPA firms, outsourced tax review services, accurate tax filing and review"
        }
    },
    {
        id: 29,
        title: "Hire AR/AP Billing Executive",
        slug: "cpa-firm/hire-ar-ap-executive",
        description: "Take complete care of your CPA’s AR & AP functions.",
        icon: "Landmark",
        category: "cpa-firm",
        order: 9,
        meta: {
            title: "Hire AR/AP Billing Executive Services for CPA Firms | Gapbridge",
            description: "Hire skilled AR/AP billing executives for your CPA firm with Gapbridge. Tailored staffing solutions to help you take complete care of your CPA’s AR & AP functions and optimize your workforce.",
            keywords: "hire AR/AP billing executive, AR/AP billing executive staffing for CPA firms, outsourced AR/AP services, efficient financial operations support"
        }
    },
    {
        id: 30,
        title: "Hire Account Supervisor",
        slug: "cpa-firm/hire-account-supervisor",
        description: "Achieve financial clarity & lead your team precisely.",
        icon: "ClipboardCheck",
        category: "cpa-firm",
        order: 10,
        meta: {
            title: "Hire Account Supervisor Services for CPA Firms | Gapbridge",
            description: "Hire skilled account supervisors for your CPA firm with Gapbridge. Tailored staffing solutions to help you achieve financial clarity and lead your team precisely while optimizing your workforce.",
            keywords: "hire account supervisor, account supervisor staffing for CPA firms, outsourced financial supervision services, skilled financial leadership"
        }
    },
    {
        id: 31,
        title: "Hire Payroll Expert",
        slug: "cpa-firm/hire-payroll-expert",
        description: "Simplify your CPA’s payroll management and compliance.",
        icon: "Users2",
        category: "cpa-firm",
        order: 11,
        meta: {
            title: "Hire Payroll Expert Services for CPA Firms | Gapbridge",
            description: "Hire skilled payroll experts for your CPA firm with Gapbridge. Tailored staffing solutions to help you simplify your CPA’s payroll management and compliance while optimizing your workforce.",
            keywords: "hire payroll expert, payroll expert staffing for CPA firms, outsourced payroll management services, efficient payroll compliance support"
        }
    },
    {
        id: 32,
        title: "Hire Virtual CFO",
        slug: "cpa-firm/hire-virtual-cfo",
        description: "Let our virtual CFO be the financial backbone for your growth.",
        icon: "LineChart",
        category: "cpa-firm",
        order: 12,
        meta: {
            title: "Hire Virtual CFO Services for CPA Firms | Gapbridge",
            description: "Hire expert virtual CFOs for your CPA firm with Gapbridge. Tailored staffing solutions to help you provide financial backbone for your clients' growth and optimize your workforce.",
            keywords: "hire virtual CFO, virtual CFO staffing for CPA firms, outsourced CFO services, expert financial strategy for clients"
        }
    },
    {
        id: 33,
        title: "Hire Virtual Assistant",
        slug: "cpa-firm/hire-virtual-assistant",
        description: "Highly skilled offshore virtual assistants for administrative support.",
        icon: "UserCog",
        category: "cpa-firm",
        order: 13,
        meta: {
            title: "Hire Virtual Assistant Services for CPA Firms | Gapbridge",
            description: "Hire skilled virtual assistants for your CPA firm with Gapbridge. Tailored staffing solutions to help you manage administrative tasks efficiently and optimize your workforce.",
            keywords: "hire virtual assistant, virtual assistant staffing for CPA firms, outsourced administrative support services, efficient office management"
        }
    }
];