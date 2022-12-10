import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import Footer from "../../components/Footer";
import Posts from "../../components/Posts";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../../style/colorTheme";
import { fetchPostsWithReadingTime } from "../../lib/api";
import { InferGetStaticPropsType } from "next";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { getBackgroundStyle } from "../../lib/helpers/siteBackground";
import MinimalNav from "../../components/navigation/MinimalNav";

export const getStaticProps = async () => {
  const posts = await fetchPostsWithReadingTime();

  if (!posts) {
    return {
      props: {
        error: "Unable to retrieve posts at this time, please try again later.",
      },
    };
  }

  return { props: { posts } };
};

const BlogIndex = ({
  posts,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colorMode } = useColorMode();

  useDocumentTitle("Rhys Morris - Blog");

  return (
    <Flex direction="column" justify="space-between" minHeight="100vh">
      <section
        style={{
          maxWidth: "1200px",
          width: "98%",
          margin: "0 auto",
          marginTop: "40px",
        }}
      >
        <MinimalNav />
        <DrifterStars
          style={{ ...getBackgroundStyle(colorMode), zIndex: -1 }}
          color={
            colorMode === "light"
              ? APP_COLORS.dimCanvasLight
              : APP_COLORS.dimCanvasDark
          }
          motion={{ ratio: 0.03 }}
        />
        <Posts posts={posts} error={error} />
      </section>
      <Footer />
    </Flex>
  );
};

export default BlogIndex;
