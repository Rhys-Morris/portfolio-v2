import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import Nav from "../components/Nav";
import React from "react";
import readingTime from "reading-time";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: any;
  updated_at: any;
  published_at: any;
}

interface PostWithReadingTime extends Post {
  readTime: {
    minutes: number;
    test: string;
    time: number;
    words: 585;
  };
}

const BlogIndex = () => {
  const [posts, setPosts]: [
    PostWithReadingTime[] | null,
    (PostWithReadingTime) => void
  ] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:1337/posts", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const withReadingTime: PostWithReadingTime = response.data.map(
          (post) => ({
            ...post,
            readTime: readingTime(post.content),
          })
        );
        setPosts(withReadingTime);
      });
  }, []);

  console.log(posts);
  return (
    <>
      <Nav></Nav>
      <Flex direction="column" padding="0 100px" paddingTop="100px">
        <Heading>My Blog</Heading>
        <Text>
          A place for me to share my thoughts, learnings and experiences.
        </Text>
      </Flex>
    </>
  );
};

export default BlogIndex;
