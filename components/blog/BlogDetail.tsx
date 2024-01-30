import { MdAccessTime } from "react-icons/md";
import Image from "next/image";
import { BlogNode } from "@/types";
import { parseHtml } from "@/utils";

const BlogDetail = ({ blog }: { blog: BlogNode }) => {
  return (
    <div>
      <section className="px-6 pt-20 md:px-8 md:pt-32">
        <div className="mx-auto max-w-5xl flex flex-col gap-12">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            {blog.title}
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image
                className="object-cover rounded-full h-8 w-8"
                src={blog.author.node.avatar.url}
                alt={blog.author.node.name}
                width={200}
                height={200}
              />
              <p className="text-sm">{blog.author.node.name}</p>
            </div>

            <div className="flex gap-2 items-center text-silver-gray">
              <MdAccessTime className="w-6 h-6" />
              <span className="text-sm">{blog.readingTime} min read</span>
            </div>

            <p className="text-sm text-silver-gray">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {blog.featuredImage && (
            <Image
              className=" object-cover rounded-xl border border-neutral-900 w-full h-auto"
              src={blog.featuredImage.node.mediaItemUrl}
              alt={blog.title}
              priority
              width={800}
              height={600}
            />
          )}
        </div>
      </section>

      <section className="px-6 pt-20 md:px-8 md:pt-32">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          <div className="prose prose-invert prose-img:rounded-xl lg:prose-xl">
            {parseHtml(blog.content)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
