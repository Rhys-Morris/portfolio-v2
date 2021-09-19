import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { fetchData } from "../lib/api";
import { PostCard2 } from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
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
      console.log(posts);
      setPosts(posts);
    });
  }, []);

  console.log(posts);

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
          size="2x"
          style={{ zIndex: 0, marginRight: "10px" }}
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
