import axios from "axios";

export function getStrapiUrl(path = "") {
  return `${process.env.STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

export async function fetchData(path: string) {
  const requestUrl = getStrapiUrl(path);
  const response = await axios.get(requestUrl);
  return response.data;
}

export function getStrapiMedia(media): string {
  const imageUrl: string = media.url.startsWith("/")
    ? getStrapiUrl(media.url)
    : media.url;
  return imageUrl;
}
