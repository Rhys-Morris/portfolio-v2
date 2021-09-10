import React from "react";
import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import APP_COLORS from "../style/colorTheme";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const listItemStyle = {
  marginRight: "30px",
  fontSize: "20px",
  paddingBottom: "3px",
  borderBottom: "2px solid transparent",
};

const Nav = () => {
  const {
    colorMode,
    toggleColorMode,
  }: {
    colorMode: "light" | "dark";
    toggleColorMode: (color: "light" | "dark") => void;
  } = useColorMode();

  return (
    <nav
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        padding: "30px 50px",
      }}
    >
      <Flex
        width="100%"
        justify="space-between"
        color={
          colorMode === "light"
            ? APP_COLORS.secondaryLight
            : APP_COLORS.secondaryDark
        }
      >
        <Link as={NextLink} href="/">
          <Flex align="center" justify="center" cursor="pointer">
            <Text fontSize="25px" display="inline-block" fontWeight="bolder">
              {"{"}
            </Text>
            <Text
              display="inline-block"
              fontSize="20px"
              color={APP_COLORS.fontHighlight}
              p="5px"
              fontWeight="normal"
            >
              RM
            </Text>
            <Text fontSize="25px" display="inline-block" fontWeight="bolder">
              {"}"}
            </Text>
          </Flex>
        </Link>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li style={listItemStyle}>
            <a href="#work">Work</a>
          </li>
          <li style={listItemStyle}>
            <a color="red" href="#contact">
              Contact
            </a>
          </li>
          <li style={listItemStyle}>
            <Link as={NextLink} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              onClick={toggleColorMode}
              style={{ cursor: "pointer" }}
              icon={colorMode === "light" ? faMoon : faSun}
              size="2x"
            />
          </li>
        </ul>
      </Flex>
    </nav>
  );
};

export default Nav;
