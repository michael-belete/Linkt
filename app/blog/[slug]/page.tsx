import BlogDetail from "@/components/blog/BlogDetail";
import BlogDetailFallback from "@/components/blog/fallback/BlogDetailFallback";
import fetchBlog from "@/lib/blogs/fetchBlog";
import { parseHtml, stripHtml, truncateString } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // fetch data
  const blog = await fetchBlog(slug);

  const excerpt = truncateString(stripHtml(blog.excerpt));

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: excerpt,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      locale: "en_US",
      type: "website",
      siteName: "Linkt",
      url: `/blog/${blog.slug}`,
      title: blog.title,
      description: excerpt,
      images: [
        blog.featuredImage ? blog.featuredImage.node.mediaItemUrl : "",
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        blog.featuredImage ? blog.featuredImage.node.mediaItemUrl : "",
        ...previousImages,
      ],
      site: "@_linktai",
      title: blog.title,
      description: excerpt,
    },
  };
}

const BlogDetailPage = ({ params }: Props) => {
  return (
    <main className="min-h-[calc(100vh-80px)] pb-32">
      <Suspense fallback={<BlogDetailFallback />}>
        <BlogDetailContainer slug={params.slug} />
      </Suspense>
    </main>
  );
};

export default BlogDetailPage;

const BlogDetailContainer = async ({ slug }: { slug: string }) => {
  const blog = await fetchBlog(slug);

  return <BlogDetail blog={blog} />;
};
