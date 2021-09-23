import React from "react";
import { Flex, Text, Heading, Divider, Link, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/button";
import NextLink from "next/link";
import readingTime from "reading-time";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../../style/colorTheme";
import MinimalNav from "../../components/MinimalNav";
import "@fontsource/iosevka";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import Markdown from "markdown-to-jsx";
import { fetchData } from "../../lib/api";
import { convertImageUrls } from "../../lib/helpers";

export async function getStaticPaths() {
  const data = await fetchData("posts");
  const paths = data.map((post) => ({
    params: { id: String(post.id) },
  }));
  return { paths, fallback: false }; // 404 other routes
}

export async function getStaticProps({ params }) {
  const data = await fetchData(`posts/${params.id}`);
  const post = {
    ...data,
    content: convertImageUrls(data.content),
    readTime: readingTime(data.content),
  };
  return { props: { post } };
}

const Article = ({ post }) => {
  const { colorMode } = useColorMode();

  // Canvas Style
  const bgStyle: Background = {
    background:
      colorMode === "light"
        ? `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryLight} 0%, ${APP_COLORS.primaryLight} 80%)`
        : `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryDark} 0%, ${APP_COLORS.primaryDark} 80%)`,
    display: "block",
    inset: 0,
    width: "100%",
    zIndex: -1,
    position: "absolute",
  };

  React.useEffect(() => {
    // Set title
    document.title = post.title;
  });

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      minHeight="100vh"
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
        <Flex align="center" wrap="wrap">
          <Image
            width="50px"
            src="/photo.png"
            borderRadius="50%"
            alt="author"
          />
          <Text ml="10px" fontWeight="bold" fontFamily="iosevka">
            Rhys Morris
          </Text>
          <Flex align="center" p="5px">
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
          {/* eslint-disable-next-line */}
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
