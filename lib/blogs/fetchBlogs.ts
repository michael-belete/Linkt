import { graphqlApi } from "@/graphql/graphqlApi";
import { getBlogsQuery } from "@/graphql/queries";
import { BlogsResponse } from "@/types/blog";

/**
 * Fetches all blogs from the API
 * @returns BlogResponse
 * @throws Error
 */
const fetchBlogs = async (variables: {
  first: number;
  last: number;
  after: string | null;
  before: string | null;
}) => {
  try {
    const blogs = await graphqlApi<BlogsResponse>({
      query: getBlogsQuery,
      variables,
    });

    if (!blogs || !blogs.data.posts) {
      // Implement custom blog error here to be caught be the error boundary
      throw Error("404: No Blogs Found!");
    }

    return blogs;
  } catch (error) {
    console.error(error);

    // Implement custom blog error here to be caught be the error boundary
    throw new Error(error as string);
  }
};

export default fetchBlogs;
