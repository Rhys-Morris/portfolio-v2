import React from "react";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import APP_COLORS from "../style/colorTheme";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { HamburgerBox, HamburgerLine } from "./styled/HamburgerElements";
import Logo from "./Logo";

const Hamburger = () => {
  const [open, setOpen] = React.useState(false);
  const { colorMode }: { colorMode: colorMode } = useColorMode();

  const showMenu = () => {
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    const line1 = document.getElementById("line-1");
    const line2 = document.getElementById("line-2");
    const line3 = document.getElementById("line-3");

    if (open) {
      line2.style.opacity = "1";
      line1.style.transform = "rotate(0deg)";
      line3.style.transform = "rotate(0deg)";
      menu.style.right = "-190px";
      hamburger.style.right = "0";
    } else {
      line2.style.opacity = "0";
      line1.style.transform = "rotate(42deg)";
      line3.style.transform = "rotate(-42deg)";
      menu.style.right = "0";
      hamburger.style.right = "180px";
    }
    setOpen(!open);
  };

  return (
    <Flex flex="1" justify="flex-end">
      <HamburgerBox id="hamburger" onClick={showMenu}>
        <HamburgerLine
          id="line-1"
          style={{
            transformOrigin: "left center",
            background:
              colorMode === "light"
                ? APP_COLORS.primaryDark
                : APP_COLORS.primaryLight,
          }}
        />
        <HamburgerLine
          id="line-2"
          style={{
            background:
              colorMode === "light"
                ? APP_COLORS.primaryDark
                : APP_COLORS.primaryLight,
          }}
        />
        <HamburgerLine
          id="line-3"
          style={{
            transformOrigin: "left center",
            background:
              colorMode === "light"
                ? APP_COLORS.primaryDark
                : APP_COLORS.primaryLight,
          }}
        />
      </HamburgerBox>
      <nav>
        <Flex
          id="menu"
          position="fixed"
          direction="column"
          top="0"
          right="-190px"
          bg={
            colorMode === "light"
              ? APP_COLORS.secondaryDark
              : APP_COLORS.secondaryLight
          }
          transition=".5s all"
          height="100%"
          width="190px"
          p="15px"
          pl="30px"
        >
          <ul style={{ listStyle: "none" }}>
            <li style={{ padding: "5px" }}>
              <Link
                href="#home"
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
                Home
              </Link>
            </li>
            <NavList />
          </ul>
        </Flex>
      </nav>
    </Flex>
  );
};

const NavList = () => {
  const {
    colorMode,
    toggleColorMode,
  }: { colorMode: colorMode; toggleColorMode: () => void } = useColorMode();
  const [breakpoint600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <li style={{ padding: "5px" }}>
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
      <li style={{ padding: "5px" }}>
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
      <li style={{ padding: "5px" }}>
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
      <li style={{ padding: "5px" }}>
        <FontAwesomeIcon
          onClick={toggleColorMode}
          size="2x"
          style={{
            cursor: "pointer",
            marginLeft: !breakpoint600 ? "30px" : "0px",
          }}
          icon={colorMode === "light" ? faMoon : faSun}
        />
      </li>
    </>
  );
};

const Nav = () => {
  const {
    colorMode,
    toggleColorMode,
  }: {
    colorMode: colorMode;
    toggleColorMode: () => void;
  } = useColorMode();
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
