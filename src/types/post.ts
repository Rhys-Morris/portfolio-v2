export interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  image: {
    url: string;
  };
  created_at: string;
  updated_at: string;
  published_at: string;
}

export interface PostWithReadingTime extends Post {
  readTime: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
}
