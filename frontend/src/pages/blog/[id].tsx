import React from "react";
import {
  Flex,
  Text,
  Heading,
  Image,
  useColorMode,
  Divider,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import readingTime from "reading-time";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../../style/colorTheme";
import MinimalNav from "../../components/MinimalNav";
import "@fontsource/iosevka";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Markdown from "markdown-to-jsx";
import { fetchData, getStrapiMedia } from "../../lib/api";
import { convertImageUrls } from "../../lib/helpers";

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

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = React.useState(null);
  const { colorMode } = useColorMode();

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

  // Get post
  React.useEffect(() => {
    if (!id) return;
    // Get posts
    fetchData(`/posts/${id}`)
      .then((data) => {
        const post = {
          ...data,
          content: convertImageUrls(data.content),
          readTime: readingTime(data.content),
        };
        setPost(post);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <Flex direction="column" align="center" justify="center">
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
      <Flex
        p="50px 0"
        direction="column"
        align="start"
        justify="center"
        mt="150px"
        maxWidth="1000px"
        width="90%"
        id="content"
      >
        <Link as={NextLink} href="/blog">
          <Button>Back to Index</Button>
        </Link>
        <Heading as="h1" size="3xl" m="20px 0">
          {post?.title}
        </Heading>
        <Flex align="center">
          <Image width="50px" src="/photo.png" borderRadius="50%" />
          <Text ml="10px" fontWeight="bold" fontFamily="iosevka">
            Rhys Morris
          </Text>

          <Text ml="20px">
            {new Date(post?.published_at).toLocaleDateString("en-UK", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
          <Divider
            orientation="vertical"
            bg={APP_COLORS.fontHighlight}
            borderRadius="50%"
            w="8px"
            h="8px"
            ml="10px"
          />
          <Text
            ml="10px"
            color={
              colorMode === "light"
                ? APP_COLORS.dimCanvasLight
                : APP_COLORS.dimCanvasDark
            }
          >
            {post?.readTime?.text}
          </Text>
        </Flex>
        <Box
          w="100%"
          mt="20px"
          padding="20px "
          bg={
            colorMode === "light"
              ? "rgb(236, 242, 247, .8)"
              : "rgb(23,29,34, .8)"
          }
          borderRadius="5px"
        >
          {/* Empty string required to prevent dependency error */}
          <Markdown children={post?.content || ""} />
        </Box>
        <Link
          href="#content"
          _hover={{ textDecoration: "none" }}
          alignSelf="center"
          mt="20px"
        >
          <Button>
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ marginRight: "10px" }}
            />
            To Top
          </Button>
        </Link>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Article;
