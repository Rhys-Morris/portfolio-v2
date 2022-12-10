import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { PostCard2 } from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import useRequestState from "../hooks/useRequestState";
import { fetchPostsWithReadingTime } from "../lib/api";
import { PostWithReadingTime } from "../types/post";
import { RequestState } from "../types/requestState";

const PostList = ({ posts }: { posts: PostWithReadingTime[] }) => (
  <Flex wrap="wrap" w="100%" align="start" justify="space-around">
    {posts.map((post, i) => (
      <PostCard2 key={i} post={post} />
    ))}
  </Flex>
);

const Blog = () => {
  const [requestState, posts] = useRequestState<PostWithReadingTime[]>(
    fetchPostsWithReadingTime
  );

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
      {requestState === RequestState.SUCCESS && posts && (
        <PostList posts={posts} />
      )}
    </Flex>
  );
};

export default Blog;
