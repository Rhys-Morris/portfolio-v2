import React from "react";
import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import APP_COLORS from "../style/colorTheme";

const MinimalNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      p="0 3.5vw"
      pt="15px"
      pb="5px"
      position="absolute"
      top="0"
      left="0"
      justify="space-between"
      align="center"
      width="100%"
    >
      <Link as={NextLink} href="/">
        <Flex align="center" justify="center" cursor="pointer">
          <Text fontSize="2xl" display="inline-block" fontWeight="bolder">
            {"{"}
          </Text>
          <Text
            display="inline-block"
            fontSize="2xl"
            color={APP_COLORS.fontHighlight}
            p="5px"
            fontWeight="normal"
          >
            RM
          </Text>
          <Text fontSize="2xl" display="inline-block" fontWeight="bolder">
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
  );
};

export default MinimalNav;
