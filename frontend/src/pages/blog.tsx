import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import {
  Flex,
  Link,
  Heading,
  Text,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import React from "react";
import readingTime from "reading-time";
import { PostCard1 } from "../components/PostCard";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../style/colorTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MinimalNav from "../components/MinimalNav";
import { fetchData } from "../lib/api";

const BlogIndex = () => {
  const {
    colorMode,
  }: {
    colorMode: "light" | "dark";
  } = useColorMode();

  // Post state
  const [posts, setPosts]: [
    PostWithReadingTime[] | null,
    (posts: PostWithReadingTime[]) => void
  ] = React.useState(null);
  const [filteredPosts, setFilteredPosts]: [
    PostWithReadingTime[],
    (posts: PostWithReadingTime[]) => void
  ] = React.useState([]);

  React.useEffect(() => {
    // Set title
    document.title = "Rhys Morris - Blog";

    // Get posts
    fetchData("/posts").then((data) => {
      const withReadingTime: PostWithReadingTime[] = data.map((post) => ({
        ...post,
        readTime: readingTime(post.content),
      }));
      setPosts(withReadingTime);
      setFilteredPosts(withReadingTime);
    });
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

  // Canvas Style
  const bgStyle = {
    background:
      colorMode === "light"
        ? `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryLight} 0%, ${APP_COLORS.primaryLight} 80%)`
        : `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryDark} 0%, ${APP_COLORS.primaryDark} 80%)`,
    display: "block",
    inset: 0,
    width: "100%",
    position: "fixed",
    zIndex: "-1",
  };

  return (
    <Flex direction="column" justify="space-between" minHeight="100vh">
      <section
        style={{
          maxWidth: "1200px",
          width: "98%",
          margin: "0 auto",
          marginTop: "100px",
        }}
      >
        <MinimalNav />
        <DrifterStars
          style={bgStyle}
          color={
            colorMode === "light"
              ? APP_COLORS.dimCanvasLight
              : APP_COLORS.dimCanvasDark
          }
          motion={{ ratio: 0.03 }}
        />
        <Flex direction="column" padding="0 25px" paddingTop="100px">
          <Heading mb="20px">My Blog</Heading>
          <Text mb="10px">
            A place for me to pass on experience, learnings and my own thoughts.
          </Text>
          <InputGroup mt="10px" mb="20px">
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faSearch} />}
            />
            <Input
              placeholder="Search for a post"
              maxWidth="500px"
              width="100%"
              borderWidth="2px"
              onChange={(event) => filterPosts(event.target.value)}
            />
          </InputGroup>
          <Flex w="100%" direction="column">
            {filteredPosts?.length > 0 &&
              filteredPosts?.map((post) => (
                <PostCard1 key={post.id} post={post} />
              ))}
            {filteredPosts?.length === 0 && (
              <Text mt="20px">No blog posts to display</Text>
            )}
          </Flex>
        </Flex>
      </section>
      <Footer />
    </Flex>
  );
};

export default BlogIndex;
