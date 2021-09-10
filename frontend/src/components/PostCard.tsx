import React from "react";
import { Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import APP_COLORS from "../style/colorTheme";
import "@fontsource/iosevka";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const PostCard = ({ post }) => {
  const { colorMode }: { colorMode: "light" | "dark" } = useColorMode();
  const {
    published_at: published,
    title,
    content,
    readTime,
  }: {
    published_at: string;
    title: string;
    content: string;
    readTime: {
      minutes: number;
      text: string;
      time: number;
      words: number;
    };
  } = post;

  return (
    <Flex
      m="10px 0"
      align="center"
      width="45%"
      p="15px"
      borderRadius="5px"
      border={`2px solid ${colorMode === "light" ? "#E2E8F0" : "#2D353B"}`}
      boxShadow="2px 3px 1px 1px rgba(0, 0, 0, .08)"
    >
      <Flex direction="column">
        <Text
          fontSize="20px"
          fontWeight="bold"
          color={APP_COLORS.fontHighlight}
          mb="5px"
        >
          {title}
        </Text>
        <Flex align="center" justify="space-between" width="100%" mb="5px">
          <Text>
            {new Date(published).toLocaleDateString("en-UK", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
          <Text
            color={
              colorMode === "light"
                ? APP_COLORS.dimCanvasLight
                : APP_COLORS.dimCanvasDark
            }
          >
            {readTime.text}
          </Text>
        </Flex>
        <Text mb="20px">
          {content.slice(0, 250) + (content.length > 250 ? "..." : null)}
        </Text>
        <Button>Read More</Button>
      </Flex>
    </Flex>
  );
};

export default PostCard;
