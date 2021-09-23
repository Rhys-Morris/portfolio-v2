import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { PostCard1 } from "./PostCard";

const Posts = ({ posts, fetchError }) => {
  // Post state
  const [filteredPosts, setFilteredPosts]: [
    PostWithReadingTime[],
    (posts: PostWithReadingTime[]) => void
  ] = React.useState([]);

  const [error, setError]: [
    error: null | string,
    setError: React.Dispatch<React.SetStateAction<null | string>>
  ] = React.useState(fetchError);

  React.useEffect(() => {
    // Set title
    document.title = "Rhys Morris - Blog";
    // Add posts to filter state
    setFilteredPosts(posts);
  }, []);

  // Filter posts
  const filterPosts = (searchString) => {
    if (!searchString) {
      setFilteredPosts(posts);
      return;
    }
    const testRegExp = new RegExp(searchString, "i");
    const filtered = posts.filter((post) => post.title.match(testRegExp));
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
          onChange={(event) => filterPosts(event.target.value)}
        />
      </InputGroup>
      {error && <Text mt="10px">{error}</Text>}
      {!error && (
        <Flex w="100%" direction="column">
          {filteredPosts?.length > 0 &&
            filteredPosts?.map((post) => (
              <PostCard1 key={post.id} post={post} />
            ))}
          {filteredPosts?.length === 0 && (
            <Text mt="20px">No blog posts to display</Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Posts;
