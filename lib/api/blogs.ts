import { blogs, type Blog } from "../data/blogs";

export async function getBlogs(limit?: number, category?: string, search?: string): Promise<{ blogs: Blog[], totalCount: number }> {
    let filteredBlogs = blogs;
    if (category) {
        filteredBlogs = filteredBlogs.filter((blog) => blog.category === category);
    }
    if (search) {
        filteredBlogs = filteredBlogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()) || blog.excerpt.toLowerCase().includes(search.toLowerCase()));
    }
    if (limit) {
        filteredBlogs = filteredBlogs.slice(0, limit);
    }

    return {
        'blogs': filteredBlogs,
        'totalCount': filteredBlogs.length
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