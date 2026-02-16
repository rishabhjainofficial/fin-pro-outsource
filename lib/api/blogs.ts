import { blogs, type Blog } from "@/lib/data/blogs";

export async function getBlogs(
    limit: number = 6,
    page: number = 1,
    category?: string,
    search?: string
): Promise<{ blogs: Blog[], totalCount: number }> {

    // 1. Filter by category and search first to get accurate totalCount
    let filteredBlogs = blogs;

    if (category && category !== "All") {
        filteredBlogs = filteredBlogs.filter((blog) => blog.category === category);
    }

    if (search) {
        filteredBlogs = filteredBlogs.filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(search.toLowerCase())
        );
    }

    const totalCount = filteredBlogs.length;

    // 2. Calculate the slice (Pagination)
    const offset = (page - 1) * limit;
    const paginatedBlogs = filteredBlogs.slice(offset, offset + limit);

    return {
        blogs: paginatedBlogs,
        totalCount: totalCount
    };
}

export async function getBlogById(id: number): Promise<Blog | undefined> {
    return blogs.find((blog) => blog.id === id);
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return blogs.find((blog) => blog.slug === slug);
}

export function getCategories() {
    return ["All", "Accounting", "Taxation", "CPA Trends", "Advisory"];
}

export async function getBlogForHome(
    limit?: number,
): Promise<Blog[]> {
    return blogs.slice(0, limit || 3);
}