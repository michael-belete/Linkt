// Import the fetchBlogs function from the specified location
import { BlogNode } from "@/types";
import fetchBlogs from "./fetchBlogs";

/**
 * Asynchronously retrieves the featured blog from the list of blogs.
 * @returns {Promise<BlogNode>} A promise that resolves to the featured blog object.
 */
const getFeaturedBlog = async (): Promise<BlogNode> => {
  try {
    // Fetch the list of blogs using the fetchBlogs function
    const blogs = (
      await fetchBlogs({ first: 0, after: null, before: null, last: 0 })
    ).data.posts.nodes;

    // Find the first blog marked as sticky (featured)
    const featuredBlogs = blogs.find((blog) => blog.isSticky);

    // Return the featured blog if found, otherwise return the first blog in the list
    return featuredBlogs ? featuredBlogs : blogs[0];
  } catch (error) {
    // Handle any errors that may occur during the fetching process
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

// Export the getFeaturedBlog function as the default export of this module
export default getFeaturedBlog;
