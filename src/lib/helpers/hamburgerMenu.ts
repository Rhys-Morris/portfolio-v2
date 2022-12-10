import { ColorMode } from "@chakra-ui/react";
import { HamburgerStyles } from "../../types/hamburgerMenu";
import APP_COLORS from "../../style/colorTheme";

type HamburgerLine = "lineOne" | "lineTwo" | "lineThree";

const hamburgerStyles: HamburgerStyles = {
  open: {
    menu: { right: "-190px" },
    hamburger: { right: "0 " },
    lineOne: { transform: "rotate(0deg)", transformOrigin: "left center" },
    lineTwo: { opacity: "1" },
    lineThree: { transform: "rotate(0deg)", transformOrigin: "left center" },
  },
  closed: {
    menu: { right: "0" },
    hamburger: { right: "180px " },
    lineOne: { transform: "rotate(42deg)", transformOrigin: "left center" },
    lineTwo: { opacity: "0" },
    lineThree: { transform: "rotate(-42deg)", transformOrigin: "left center" },
  },
};

export const getHamburgerStyle = (open: boolean) => {
  return open
    ? hamburgerStyles.open.hamburger
    : hamburgerStyles.closed.hamburger;
};

export const getLineStyle = (
  line: HamburgerLine,
  open: boolean,
  colorMode: ColorMode
) => {
  return {
    ...(open ? hamburgerStyles.open[line] : hamburgerStyles.closed[line]),
    background:
      colorMode === "light" ? APP_COLORS.primaryDark : APP_COLORS.primaryLight,
  };
};

export const getMenuStyle = (open: boolean, colorMode: ColorMode) => {
  return {
    ...(open ? hamburgerStyles.open.menu : hamburgerStyles.closed.menu),
    background:
      colorMode === "light"
        ? APP_COLORS.fontHighlight
        : APP_COLORS.secondaryLight,
  };
};
