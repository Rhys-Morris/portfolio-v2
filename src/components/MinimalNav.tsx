import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import Logo from "./Logo";

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
      <NextLink href="/" passHref>
        <a>
          <Logo />
        </a>
      </NextLink>
      <FontAwesomeIcon
        onClick={toggleColorMode}
        style={{ cursor: "pointer", width: "20px" }}
        icon={colorMode === "light" ? faMoon : faSun}
        size="2x"
      />
    </Flex>
  );
};

export default MinimalNav;
