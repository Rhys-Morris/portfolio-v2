import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { fetchData } from "../lib/api";
import readingTime from "reading-time";
import { PostCard1 } from "./PostCard";

const Posts = () => {
  // Post state
  const [posts, setPosts]: [
    PostWithReadingTime[] | null,
    (posts: PostWithReadingTime[]) => void
  ] = React.useState(null);
  const [filteredPosts, setFilteredPosts]: [
    PostWithReadingTime[],
    (posts: PostWithReadingTime[]) => void
  ] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [error, setError]: [
    error: null | string,
    setError: React.Dispatch<React.SetStateAction<null | string>>
  ] = React.useState(null);

  React.useEffect(() => {
    // Set title
    document.title = "Rhys Morris - Blog";

    // Get posts
    setLoading(true);
    setError(null);
    fetchData("posts")
      .then((data) => {
        setLoading(false);
        if (!data)
          throw new Error(
            "Unable to retrieve posts at this time, please try again later."
          );
        const withReadingTime: PostWithReadingTime[] = data.map((post) => ({
          ...post,
          readTime: readingTime(post.content),
        }));
        setPosts(withReadingTime);
        setFilteredPosts(withReadingTime);
      })
      .catch((e) => setError(e.message));
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
          <FontAwesomeIcon icon={faSearch} />
        </InputLeftElement>
        <Input
          placeholder="Search for a post"
          maxWidth="500px"
          width="100%"
          borderWidth="2px"
          onChange={(event) => filterPosts(event.target.value)}
        />
      </InputGroup>
      {loading && <Spinner mt="10px" size="xl" />}
      {error && <Text mt="10px">{error}</Text>}
      {!loading && !error && (
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
