export const getBlogsQuery = `
query GetBlogs($first: Int!, $last: Int!, $after: String, $before: String) {
  posts(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
      }
    nodes {
      id
      slug
      title
      content
      author{
        node{
          name
          email
          avatar{
            url
          }
        }
      }
      date
      excerpt
      readingTime
      featuredImage{
        node{
          mediaItemUrl
        }
      }
      isSticky
    }
  }
}
`;

export const getBlogBySlugQuery = `
query GetBlogBySlug($id: ID!) {
  post(id: $id, idType: SLUG) {
    id
    slug
    title
    content
    author {
      node {
        name
        email
        avatar {
          url
        }
      }
    }
    date
    excerpt
    readingTime
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    isSticky
  }
}
`;
