import { getBlogs, getCategories } from '@/lib/api/blogs';
import BlogList from './BlogList';

const page = async ({
    searchParams,
}: {
    searchParams: { page?: string };
}) => {
    const currentPage = Number(searchParams.page) || 1;
    const postsPerPage = 6;

    const categories = getCategories();
    const { blogs, totalCount } = await getBlogs(postsPerPage, undefined, undefined);

    const totalPages = Math.ceil(totalCount / postsPerPage);

    return (
        <BlogList blogs={blogs} categories={categories} totalPages={totalPages} currentPage={currentPage} />
    );
};

export default page;