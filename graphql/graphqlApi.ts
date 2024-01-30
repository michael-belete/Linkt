import axios from "axios";

type Query = {
  query: string;
  variables?: Record<string, unknown>;
};

export async function graphqlApi<T>(query: Query) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_WP_BLOG_ENDPOINT}/graphql` || "",
    query,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const result: T = response.data;

  return result;
}
