import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { PostCard1 } from "./PostCard";
import { PostWithReadingTime } from "../types/post";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface Props {
  posts?: PostWithReadingTime[];
  error?: string;
}

const Posts = ({ posts, error }: Props) => {
  const [filteredPosts, setFilteredPosts] = React.useState<
    PostWithReadingTime[]
  >(posts ?? []);

  useDocumentTitle("Rhys Morris - Blog");

  const filterPosts = (searchString: string) => {
    if (!searchString) {
      setFilteredPosts(posts ?? []);
      return;
    }

    const testRegExp = new RegExp(searchString, "i");
    const filtered = (posts ?? []).filter((post) =>
      post.title.match(testRegExp)
    );
    setFilteredPosts(filtered);
  };

  return (
    <Flex direction="column" padding="0 25px" paddingTop="100px">
      <Heading mb="20px">My Blog</Heading>
      <Text mb="10px">
        A place for me to pass on experience, learnings and my own thoughts.
      </Text>
      <InputGroup mt="10px" mb="20px">
        <InputLeftElement pointerEvents="none">
          <FontAwesomeIcon icon={faSearch} style={{ width: "15px" }} />
        </InputLeftElement>
        <Input
          placeholder="Search for a post"
          maxWidth="500px"
          width="100%"
          borderWidth="2px"
          onChange={({ target: { value } }) => filterPosts(value)}
        />
      </InputGroup>

      {error && <Text mt="10px">{error}</Text>}

      {!error && (
        <Flex w="100%" direction="column">
          {filteredPosts?.length > 0 ? (
            filteredPosts?.map((post) => (
              <PostCard1 key={post.id} post={post} />
            ))
          ) : (
            <Text mt="20px">No blog posts to display</Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Posts;
