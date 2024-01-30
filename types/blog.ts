export interface BlogsResponse {
  data: {
    posts: {
      pageInfo: PageInfo;
      nodes: BlogNode[];
    };
  };

  extensions: Extensions;
}

export interface BlogResponse {
  data: {
    post: BlogNode;
  };

  extensions: Extensions;
}

export interface BlogNode {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  featuredImage: FeaturedImage;
  readingTime: string;
  date: string;
  isSticky: Boolean;
}

interface Author {
  node: {
    name: string;
    email: string;
    avatar: {
      url: string;
    };
  };
}

interface FeaturedImage {
  node: {
    mediaItemUrl: string;
  };
}

interface Extensions {
  debug: {
    type: string;
    message: string;
  }[];
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface PaginationType {
  first: number;
  last: number;
  after: string | null;
  before: string | null;
}
