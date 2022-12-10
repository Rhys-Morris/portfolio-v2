import { Flex, Link, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  getHamburgerStyle,
  getLineStyle,
  getMenuStyle,
} from "../../lib/helpers/hamburgerMenu";
import APP_COLORS from "../../style/colorTheme";
import { HamburgerBox, HamburgerLine } from "../styled/HamburgerElements";
import { NavList } from "./Nav";

export const Hamburger = () => {
  const [open, setOpen] = React.useState(false);
  const { colorMode } = useColorMode();

  return (
    <Flex flex="1" justify="flex-end">
      <HamburgerBox
        onClick={() => setOpen(!open)}
        style={getHamburgerStyle(open)}
      >
        <HamburgerLine style={getLineStyle("lineOne", open, colorMode)} />
        <HamburgerLine style={getLineStyle("lineTwo", open, colorMode)} />
        <HamburgerLine style={getLineStyle("lineThree", open, colorMode)} />
      </HamburgerBox>
      <nav>
        <Flex
          style={getMenuStyle(open, colorMode)}
          position="fixed"
          direction="column"
          top="0"
          right="-190px"
          transition=".5s all"
          height="100vh"
          width="190px"
          p="15px"
          pl="30px"
        >
          <ul style={{ listStyle: "none" }}>
            <li style={{ padding: "10px 0" }}>
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
