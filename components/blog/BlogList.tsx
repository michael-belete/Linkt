import { BlogNode } from "@/types";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }: { blogs: BlogNode[] }) => {
  return (
    <section className="px-6 pt-32 md:px-8 md:pt-40">
      <div className="max-w-7xl mx-auto gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
