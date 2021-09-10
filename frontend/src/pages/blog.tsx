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
import PostCard from "../components/PostCard";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../style/colorTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";

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
    text: string;
    time: number;
    words: number;
  };
}

const BlogIndex = () => {
  const {
    colorMode,
    toggleColorMode,
  }: {
    colorMode: "light" | "dark";
    toggleColorMode: () => void;
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

  React.useEffect(() => {
    // Set title
    document.title = "Rhys Morris - Blog";

    // Get posts
    axios
      .get("http://localhost:1337/posts", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const withReadingTime: PostWithReadingTime[] = response.data.map(
          (post) => ({
            ...post,
            readTime: readingTime(post.content),
          })
        );
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

  console.log(posts);
  return (
    <Flex direction="column" justify="space-between" minHeight="100vh">
      <section style={{ maxWidth: "1200px", width: "90%", margin: "0 auto" }}>
        <Flex
          padding="30px 50px"
          position="absolute"
          top="0"
          left="0"
          justify="space-between"
          align="center"
          width="100%"
        >
          <Link as={NextLink} href="/">
            <Flex align="center" justify="center" cursor="pointer">
              <Text fontSize="25px" display="inline-block" fontWeight="bolder">
                {"{"}
              </Text>
              <Text
                display="inline-block"
                fontSize="20px"
                color={APP_COLORS.fontHighlight}
                p="5px"
                fontWeight="normal"
              >
                RM
              </Text>
              <Text fontSize="25px" display="inline-block" fontWeight="bolder">
                {"}"}
              </Text>
            </Flex>
          </Link>
          <FontAwesomeIcon
            onClick={toggleColorMode}
            style={{ cursor: "pointer" }}
            icon={colorMode === "light" ? faMoon : faSun}
            size="2x"
          />
        </Flex>
        <DrifterStars
          style={bgStyle}
          color={
            colorMode === "light"
              ? APP_COLORS.dimCanvasLight
              : APP_COLORS.dimCanvasDark
          }
          motion={{ ratio: 0.03 }}
        />
        <Flex direction="column" padding="0 50px" paddingTop="100px">
          <Heading mb="20px">My Blog</Heading>
          <Text mb="10px">
            A place for me to share my thoughts, learnings and experiences.
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FontAwesomeIcon icon={faSearch} />}
            />
            <Input
              placeholder="Search for a post"
              width="50%"
              borderWidth="2px"
              onChange={(event) => filterPosts(event.target.value)}
            />
          </InputGroup>
          <Flex>
            {filteredPosts?.length > 0 &&
              filteredPosts?.map((post) => (
                <PostCard key={post.id} post={post} />
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
