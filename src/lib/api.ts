import axios from "axios";

export function getStrapiUrl(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;
}

export async function fetchData(path: string) {
  const requestUrl = getStrapiUrl(path);
  const response = await axios.get(requestUrl);
  return response.data;
}

export function getStrapiMedia(media): string {
  const imageUrl: string = media.url.startsWith("/")
    ? getStrapiUrl(media.url.slice(1))
    : media.url;
  console.log(imageUrl);
  return imageUrl;
}
