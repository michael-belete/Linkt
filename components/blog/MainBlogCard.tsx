import Image from "next/image";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { BlogNode } from "@/types/blog";
import { stripHtml, truncateString } from "@/utils";
import placeholder from "@/public/meta/cover.png";

const MainBlogCard = ({ blog }: { blog: BlogNode }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="w-full block md:w-1/2">
      <div className="flex flex-col rounded-xl gap-8 duration-300 group">
        {blog.featuredImage ? (
          <Image
            className="object-cover rounded-xl border border-zinc-900 aspect-[16/9] w-full"
            src={blog.featuredImage.node.mediaItemUrl}
            alt={blog.title}
            width={710}
            height={400}
            priority
          />
        ) : (
          <Image
            className="w-full h-52 object-cover rounded-xl border border-zinc-900 sm:h-96"
            src={placeholder}
            alt="Linkt main blog placeholder image"
            width={710}
            height={400}
          />
        )}

        <div className="flex flex-col gap-4">
          <h2 className="font-bold duration-300 group-hover:text-primary line-clamp-3 text-2xl md:line-clamp-none md:text-3xl">
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

          <div className="text-silver-gray leading-relaxed line-clamp-3 md:line-clamp-none">
            {stripHtml(blog.excerpt)}
          </div>

          <p className="text-sm text-silver-gray">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex gap-2 items-center text-silver-gray">
            <MdAccessTime className="w-5 h-5" />
            <span className="text-sm">{blog.readingTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainBlogCard;
