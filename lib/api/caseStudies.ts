import { caseStudies, type CaseStudy } from "@/lib/data/caseStudies";

export const getCaseStudies = (
    limit: number = 6,
    page: number = 1,
): { caseStudies: CaseStudy[]; totalPages: number } => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedCaseStudies = caseStudies.slice(startIndex, endIndex);
    const totalPages = Math.ceil(caseStudies.length / limit);
    return { caseStudies: paginatedCaseStudies, totalPages };
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
    return caseStudies.find((caseStudy) => caseStudy.slug === slug);
};