import React from "react";
import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import APP_COLORS from "../style/colorTheme";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const listItemStyle = {
  marginRight: "3vw",
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
        pt="20px"
        pb="5px"
        bg={
          colorMode === "light"
            ? "rgba(255, 255, 255, .9)"
            : "rgba(0, 0, 0, .9)"
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
              p="0 5px"
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
              style={{ cursor: "pointer", fontSize: "30px" }}
              icon={colorMode === "light" ? faMoon : faSun}
            />
          </li>
        </ul>
      </Flex>
    </nav>
  );
};

export default Nav;
