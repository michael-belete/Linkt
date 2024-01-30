import { graphqlApi } from "@/graphql/graphqlApi";
import { getBlogBySlugQuery } from "@/graphql/queries";
import { BlogResponse } from "@/types/blog";

/**
 * Fetches a single blog from the API by Slug
 * @returns BlogResponse
 * @throws Error
 */
const fetchBlog = async (slug: string) => {
  try {
    const blog = await graphqlApi<BlogResponse>({
      query: getBlogBySlugQuery,
      variables: {
        id: slug,
      },
    });

    if (!blog || !blog.data.post) {
      throw Error(`404: Blog ${slug} Found`);
    }

    // blog.data.post.content = xss(blog.data.post.content)

    return blog.data.post;
  } catch (error: unknown) {
    console.log(error);
    // Implement custom blog error here to be caught be the error boundary
    throw Error(error as string);
  }
};

export default fetchBlog;
