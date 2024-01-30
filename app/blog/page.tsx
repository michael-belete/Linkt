import BlogList from "@/components/blog/BlogList";
import BlogListFallback from "@/components/blog/fallback/BlogListFallback";
import MainBlogCard from "@/components/blog/MainBlogCard";
import MainBlogCardFallback from "@/components/blog/fallback/MainBlogCardFallback";
import fetchBlogs from "@/lib/blogs/fetchBlogs";
import { Suspense } from "react";
import { Metadata } from "next";
import { PaginationType } from "@/types";
import getFeaturedBlog from "@/lib/blogs/getFeaturedBlog";
import Pagination from "@/components/blog/Pagination";

export const metadata: Metadata = {
  title: "Blog",
  alternates: {
    canonical: "/blog",
  },
};

const BlogPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // query parameters for pagination

  // for requesting the next 'limit' elements after the 'after' position
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 3;

  const after =
    typeof searchParams.after === "string" ? searchParams.after : null;

  // for requesting the last 'limit' elements before the 'before' position
  const before =
    typeof searchParams.before === "string" ? searchParams.before : null;

  const pagination: PaginationType = {
    first:
      after || Object.keys(searchParams).length === 0 || (limit && !before)
        ? limit
        : 0,
    after,
    last: before ? limit : 0,
    before,
  };
  return (
    <main className="min-h-[calc(100vh-80px)] pb-32">
      <Suspense fallback={<MainBlogCardFallback />}>
        <MainBlogContainer />
      </Suspense>

      <Suspense fallback={<BlogListFallback limit={limit} />}>
        <BlogListContainer pagination={pagination} />
      </Suspense>
    </main>
  );
};

export default BlogPage;

const BlogListContainer = async ({
  pagination,
}: {
  pagination: PaginationType;
}) => {
  const blogs = await fetchBlogs(pagination);
  const pageInfo = blogs.data.posts.pageInfo;

  return (
    <div>
      <BlogList blogs={blogs.data.posts.nodes} />
      <Pagination pageInfo={pageInfo} />
    </div>
  );
};

const MainBlogContainer = async () => {
  const featuredBlog = await getFeaturedBlog();

  return <MainBlogCard blog={featuredBlog} />;
};
