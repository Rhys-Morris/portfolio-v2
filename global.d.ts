interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  image: {
    url: string;
  };
  created_at: any;
  updated_at: any;
  published_at: any;
}

interface PostWithReadingTime extends Post {
  readTime: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
}

type colorMode = "light" | "dark";

interface Background {
  background: string;
  position: "absolute" | "fixed";
  display: string;
  inset: number;
  width: string;
  zIndex: number;
}
