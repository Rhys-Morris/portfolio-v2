import React from "react";
import { Flex, Text, Heading, Divider, Link, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import NextLink from "next/link";
import readingTime from "reading-time";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../../style/colorTheme";
import "@fontsource/iosevka";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import Markdown from "markdown-to-jsx";
import { convertImageUrls } from "../../lib/helpers/blog";
import { PostWithReadingTime } from "../../types/post";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import MinimalNav from "../../components/navigation/MinimalNav";
import { getBackgroundStyle } from "../../lib/helpers/siteBackground";
import { fetchPost, fetchPosts } from "../../lib/api";

interface Props {
  post?: PostWithReadingTime;
}

interface StaticPostParams {
  params: {
    id: string;
  };
}

export async function getStaticPaths() {
  const data = await fetchPosts();

  const paths = data.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false }; // 404 other routes
}

export async function getStaticProps({ params }: StaticPostParams) {
  const data = await fetchPost(params.id);

  const post = {
    ...data,
    content: convertImageUrls(data.content),
    readTime: readingTime(data.content),
  };

  return { props: { post } };
}

const Article = ({ post }: Props) => {
  const { colorMode } = useColorMode();
  const [breakpoint600] = useMediaQuery("(max-width: 600px)");

  useDocumentTitle(post?.title ?? "");

  const color =
    colorMode === "light"
      ? APP_COLORS.dimCanvasLight
      : APP_COLORS.dimCanvasDark;

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      minHeight="100vh"
    >
      <MinimalNav />
      <DrifterStars
        style={{ ...getBackgroundStyle(colorMode), zIndex: -1 }}
        color={color}
        motion={{ ratio: 0.03 }}
      />
      <Flex
        p="50px 0"
        direction="column"
        align="start"
        justify="center"
        mt="50px"
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
              {post &&
                new Date(post.published_at).toLocaleDateString("en-UK", {
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
            <Text ml="10px" color={color}>
              {post?.readTime?.text}
            </Text>
          </Flex>
        </Flex>
        <Image
          // Hack until I can fix content types
          src={post?.summary.split("|")[0]}
          alt="header-image"
          width="100%"
          height="auto"
          mt="20px"
          borderRadius="10px"
          lazy
        />
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
          fontSize={breakpoint600 ? "100%" : "110%"}
          id="markdown-wrapper"
        >
          {/* Empty string required to prevent dependency error */}
          <Markdown
            /* eslint-disable-next-line */
            children={post?.content || ""}
            options={{
              overrides: {
                a: {
                  component: Link,
                  props: {
                    className: "underline",
                  },
                },
              },
            }}
          />
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
