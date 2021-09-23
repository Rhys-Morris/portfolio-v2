import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import Footer from "../../components/Footer";
import Posts from "../../components/Posts";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../../style/colorTheme";
import MinimalNav from "../../components/MinimalNav";
import { fetchData } from "../../lib/api";
import readingTime from "reading-time";
import { InferGetStaticPropsType } from "next";

type staticProps = {
  props: {
    posts?: undefined | PostWithReadingTime[];
    error?: undefined | string;
  };
};

export const getStaticProps = async (context) => {
  const data = await fetchData("posts");
  if (!data) {
    const props: staticProps = {
      props: {
        error: "Unable to retrieve posts at this time, please try again later.",
      },
    };
    return props;
  }
  const withReadingTime: PostWithReadingTime[] = data.map((post) => ({
    ...post,
    readTime: readingTime(post.content),
  }));

  const props: staticProps = {
    props: { posts: withReadingTime },
  };
  return props;
};

const BlogIndex = ({
  posts,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    colorMode,
  }: {
    colorMode: colorMode;
  } = useColorMode();

  React.useEffect(() => {
    // Set title
    document.title = "Rhys Morris - Blog";
  }, []);

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
        <Posts posts={posts} fetchError={error || null} />
      </section>
      <Footer />
    </Flex>
  );
};

export default BlogIndex;
