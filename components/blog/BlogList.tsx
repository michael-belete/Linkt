import { BlogNode } from "@/types";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }: { blogs: BlogNode[] }) => {
  return (
    <div className="flex flex-col gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
