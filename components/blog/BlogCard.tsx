import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { BlogNode } from "@/types";
import placeholder from "@/public/meta/cover.png";

const BlogCard = ({ blog }: { blog: BlogNode }) => {
  return (
    <Link href={`/blog/${blog.slug}`} prefetch={false}>
      <div className="flex gap-6 duration-300 group">
        {blog.featuredImage ? (
          <Image
            className="border border-zinc-900 object-cover rounded-xl aspect-[16/9] shrink-0 h-fit w-36 md:w-full md:max-w-56"
            src={blog.featuredImage.node.mediaItemUrl}
            alt={blog.title}
            width={533}
            height={300}
          />
        ) : (
          <Image
            className="border border-zinc-900 object-cover rounded-xl aspect-[16/9] w-32 md:w-64"
            src={placeholder}
            alt="Linkt main blog placeholder image"
            width={533}
            height={300}
          />
        )}

        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="font-semibold duration-300 group-hover:text-primary line-clamp-3 lg:line-clamp-none md:text-lg">
            {blog.title}
          </h2>

          <div className="flex gap-2 items-center">
            <Image
              className="object-cover rounded-full h-5 w-5"
              src={blog.author.node.avatar.url}
              alt={blog.author.node.name}
              width={50}
              height={50}
            />
            <p className="text-xs sm:text-sm">{blog.author.node.name}</p>
          </div>

          <p className="text-xs sm:text-sm text-silver-gray">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex gap-2 items-center text-silver-gray">
            <MdAccessTime className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm">
              {blog.readingTime} min read
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
