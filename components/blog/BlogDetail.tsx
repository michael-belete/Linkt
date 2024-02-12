import { MdAccessTime } from "react-icons/md";
import Image from "next/image";
import { BlogNode } from "@/types";
import { extractHeadings, parseHtml } from "@/utils";
import TableOfContent from "./TableOfContent";
import MobileTableofContent from "./MobileTableofContent";

const BlogDetail = ({ blog }: { blog: BlogNode }) => {
  const { headings, allHeadings } = extractHeadings(parseHtml(blog.content));

  return (
    <div className="flex flex-col gap-24 mx-auto max-w-7xl px-4 md:px-6 md:flex-row">
      <div className="w-full flex flex-col gap-24">
        <section>
          <div className="flex flex-col gap-8 pb-6 mb-6 border-b border-b-zinc-900 md:border-none md:mb-0 md:pb-0">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
              {blog.title}
            </h1>

            <div className="flex flex-col gap-4 text-silver-gray xs:items-center xs:flex-row">
              <div className="flex gap-2 items-center">
                <Image
                  className="object-cover rounded-full h-5 w-5 md:h-6 md:w-6"
                  src={blog.author.node.avatar.url}
                  alt={blog.author.node.name}
                  width={50}
                  height={50}
                />
                <p className="text-sm">{blog.author.node.name}</p>
              </div>

              <span className="hidden xs:block">•</span>

              <div className="flex gap-2 items-center">
                <MdAccessTime className=" h-5 w-5 md:w-6 md:h-6" />
                <span className="text-sm">{blog.readingTime} min read</span>
              </div>

              <span className="hidden xs:block">•</span>

              <p className="text-sm">
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

          {/* mobile navigation */}
          <MobileTableofContent headings={headings} />
        </section>

        <section>
          <div className=" flex flex-col gap-8">
            <div className="prose prose-invert prose-img:rounded-xl lg:prose-xl">
              {parseHtml(blog.content)}
            </div>
          </div>
        </section>
      </div>

      {/* Desktop navigation */}
      <div className="hidden h-fit max-h-[calc(98vh-176px)] max-w-[25%] shrink-0 md:block top-5 sticky overflow-auto scrollbar-style pr-2">
        <TableOfContent headings={headings} allHeadings={allHeadings} />
      </div>
    </div>
  );
};

export default BlogDetail;
