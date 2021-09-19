import React from "react";
import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import APP_COLORS from "../style/colorTheme";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const {
    colorMode,
    toggleColorMode,
  }: {
    colorMode: "light" | "dark";
    toggleColorMode: () => void;
  } = useColorMode();

  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: 3,
      }}
    >
      <Flex
        width="100%"
        justify="space-between"
        align="center"
        color={
          colorMode === "light"
            ? APP_COLORS.secondaryLight
            : APP_COLORS.secondaryDark
        }
        p="0 3.5vw"
        pt="15px"
        pb="5px"
        bg={
          colorMode === "light"
            ? "rgba(255, 255, 255, .9)"
            : "rgba(0, 0, 0, .9)"
        }
      >
        <Link as={NextLink} href="/">
          <Flex align="center" justify="center" cursor="pointer">
            <Text display="inline-block" fontWeight="bolder" fontSize="2xl">
              {"{"}
            </Text>
            <Text
              display="inline-block"
              color={APP_COLORS.fontHighlight}
              p="0 5px"
              fontWeight="normal"
              fontSize="2xl"
            >
              RM
            </Text>
            <Text display="inline-block" fontWeight="bolder" fontSize="2xl">
              {"}"}
            </Text>
          </Flex>
        </Link>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li>
            <Link
              href="#work"
              mr="30px"
              fontSize="large"
              _hover={{
                textDecoration: "none",
                color:
                  colorMode === "light"
                    ? APP_COLORS.dimCanvasLight
                    : APP_COLORS.dimCanvasDark,
              }}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              mr="30px"
              fontSize="large"
              _hover={{
                textDecoration: "none",
                color:
                  colorMode === "light"
                    ? APP_COLORS.dimCanvasLight
                    : APP_COLORS.dimCanvasDark,
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              fontSize="large"
              _hover={{
                textDecoration: "none",
                color:
                  colorMode === "light"
                    ? APP_COLORS.dimCanvasLight
                    : APP_COLORS.dimCanvasDark,
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              onClick={toggleColorMode}
              size="2x"
              style={{ cursor: "pointer", marginLeft: "30px" }}
              icon={colorMode === "light" ? faMoon : faSun}
            />
          </li>
        </ul>
      </Flex>
    </nav>
  );
};

export default Nav;
