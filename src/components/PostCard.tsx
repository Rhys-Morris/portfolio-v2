import React from "react";
import { Flex, Text, Link, Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/button";
import APP_COLORS from "../style/colorTheme";
import "@fontsource/iosevka";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import UnderlineText from "./styled/UnderlineText";

const ReadMoreLink = ({ id, colorMode }) => (
  <Link as={NextLink} href={`/blog/${id}`}>
    <a>
      <UnderlineText
        color={
          colorMode === "light"
            ? APP_COLORS.secondaryLight
            : APP_COLORS.secondaryDark
        }
        style={{ cursor: "pointer" }}
      >
        Read more
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ marginLeft: "10px", width: "20px" }}
        />
      </UnderlineText>
    </a>
  </Link>
);

export const PostCard1 = ({ post }) => {
  const { colorMode }: { colorMode: colorMode } = useColorMode();
  const {
    id,
    published_at: published,
    title,
    summary,
    readTime,
  }: PostWithReadingTime = post;

  return (
    <Flex m="10px 0" align="center" maxWidth="800px" w="100%" zIndex="1">
      <Flex direction="column">
        <Flex direction="row">
          <Flex
            align="start"
            direction="column"
            mr="30px"
            w="20%"
            maxWidth="200px"
          >
            <Text mb="5px">
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
          <Flex direction="column" flex="1">
            <Link as={NextLink} href={`/blog/${id}`}>
              <Text
                cursor="pointer"
                fontSize="20px"
                fontWeight="bold"
                color={APP_COLORS.fontHighlight}
                mb="5px"
              >
                {title}
              </Text>
            </Link>
            <Text mb="20px">{summary.split("|")[1]}</Text>
            <ReadMoreLink id={id} colorMode={colorMode} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const PostCard2 = ({ post }) => {
  const { colorMode }: { colorMode: colorMode } = useColorMode();
  const {
    id,
    published_at: published,
    title,
    summary,
    readTime,
  }: PostWithReadingTime = post;

  return (
    <Flex
      m="10px 0"
      align="center"
      maxWidth="550px"
      width="100%"
      p="15px"
      zIndex="1"
    >
      <Flex direction="column" w="100%" align="start">
        <Flex align="start" direction="column" mr="30px" w="100%">
          <Flex direction="row" justify="space-between" w="100%" wrap="wrap">
            <Link as={NextLink} href={`/blog/${id}`}>
              <Text
                cursor="pointer"
                fontSize="24px"
                fontWeight="bold"
                color={APP_COLORS.fontHighlight}
                mb="5px"
              >
                {title}
              </Text>
            </Link>
            <Flex direction="column" mb="10px">
              <Text mb="5px">
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
          </Flex>
        </Flex>
        <Text mb="10px" textAlign="justify">
          {summary.split("|")[1]}
        </Text>
        <ReadMoreLink id={id} colorMode={colorMode} />
      </Flex>
    </Flex>
  );
};
