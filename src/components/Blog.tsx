import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { fetchData } from "../lib/api";
import { PostCard2 } from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import readingTime from "reading-time";

const Blog = () => {
  // Post state
  const [posts, setPosts]: [
    PostWithReadingTime[] | null,
    (posts: PostWithReadingTime[]) => void
  ] = React.useState(null);

  React.useEffect(() => {
    // Get posts
    fetchData("posts?_limit=2").then((data) => {
      const posts = data.map((post) => ({
        ...post,
        readTime: readingTime(post.content),
      }));
      setPosts(posts);
    });
  }, []);

  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      margin="0 auto"
      maxWidth="1000px"
      width="90%"
      pt="50px"
      pb="100px"
    >
      <Flex align="center" mb="30px">
        <FontAwesomeIcon
          icon={faPen}
          style={{ zIndex: 0, marginRight: "10px", width: "35px" }}
          size="2x"
        />
        <Heading as="h2" size="2xl" zIndex="1">
          Latest Blog Posts
        </Heading>
      </Flex>
      <Flex wrap="wrap" w="100%" align="start" justify="space-around">
        {posts?.map((post, i) => (
          <PostCard2 key={i} post={post} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Blog;
