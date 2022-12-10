import axios from "axios";
import readingTime from "reading-time";
import { Post, PostWithReadingTime } from "../types/post";

export function getStrapiUrl(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;
}

export async function fetchData(path: string) {
  const requestUrl = getStrapiUrl(path);
  const response = await axios.get(requestUrl);
  return response.data;
}

export const fetchPosts = async (): Promise<Post[]> => await fetchData("posts");

export const fetchPost = async (id: string): Promise<Post> =>
  await fetchData(`posts/${id}`);

export const fetchPostsWithReadingTime = async (
  limit = 0
): Promise<PostWithReadingTime[]> => {
  const posts = (await fetchData(
    !!limit ? `posts?_limit=${limit}` : "posts"
  )) as Post[];

  return posts.map((post) => ({
    ...post,
    readTime: readingTime(post.content),
  }));
};
