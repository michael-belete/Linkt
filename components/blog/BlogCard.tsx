import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { BlogNode } from "@/types";
import placeholder from "@/public/meta/cover.png";

const BlogCard = ({ blog }: { blog: BlogNode }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="max-w-7xl mx-auto flex flex-col rounded-xl p-6 gap-8 shadow-card bg-secondary duration-300 group hover:shadow-lg hover:-translate-y-2">
        {blog.featuredImage ? (
          <Image
            className="w-full h-48 border border-gray-800 object-cover rounded-xl"
            src={blog.featuredImage.node.mediaItemUrl}
            alt={blog.title}
            width={800}
            height={600}
          />
        ) : (
          <Image
            className="w-full h-48 border border-gray-800 object-cover rounded-xl"
            src={placeholder}
            alt="Linkt main blog placeholder image"
            width={800}
            height={600}
          />
        )}

        <div className="flex flex-col gap-8">
          <h2 className="text-lg font-bold duration-300 group-hover:text-primary">
            {blog.title}
          </h2>

          <div className="flex gap-2 items-center">
            <Image
              className="object-cover rounded-full h-6 w-6"
              src={blog.author.node.avatar.url}
              alt={blog.author.node.name}
              width={200}
              height={200}
            />
            <p className="text-sm">{blog.author.node.name}</p>
          </div>

          <p className="text-sm text-silver-gray">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex gap-2 items-center text-silver-gray">
            <MdAccessTime className="w-6 h-6" />
            <span className="text-sm">{blog.readingTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
