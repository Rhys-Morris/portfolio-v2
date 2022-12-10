import React from "react";
import { Flex, Link } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import APP_COLORS from "../../style/colorTheme";
import Logo from "../Logo";
import { Hamburger } from "./Hamburger";

export const NavList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [breakpoint600] = useMediaQuery("(max-width: 600px)");

  const linkColor =
    colorMode === "light"
      ? APP_COLORS.dimCanvasLight
      : APP_COLORS.dimCanvasDark;

  return (
    <>
      <li style={{ padding: "10px 0" }}>
        <Link
          href="#work"
          mr="30px"
          fontSize="large"
          _hover={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          Work
        </Link>
      </li>
      <li style={{ padding: "10px 0" }}>
        <Link
          href="#contact"
          mr="30px"
          fontSize="large"
          _hover={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          Contact
        </Link>
      </li>
      <li style={{ padding: "10px 0" }}>
        <Link
          href="/blog"
          fontSize="large"
          _hover={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          Blog
        </Link>
      </li>
      <li style={{ padding: "10px 0" }}>
        <FontAwesomeIcon
          onClick={toggleColorMode}
          style={{
            cursor: "pointer",
            marginLeft: !breakpoint600 ? "30px" : "0px",
            width: "30px",
          }}
          size="2x"
          icon={colorMode === "light" ? faMoon : faSun}
        />
      </li>
    </>
  );
};

const Nav = () => {
  const { colorMode } = useColorMode();
  const [breakpoint600] = useMediaQuery("(max-width: 600px)");

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
        <NextLink href="/">
          <a>
            <Logo />
          </a>
        </NextLink>
        {breakpoint600 && <Hamburger />}
        {!breakpoint600 && (
          <ul style={{ listStyle: "none", display: "flex" }}>
            <NavList />
          </ul>
        )}
      </Flex>
    </nav>
  );
};

export default Nav;
