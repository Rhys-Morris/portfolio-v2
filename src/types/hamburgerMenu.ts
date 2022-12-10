import { CSSProperties } from "react";

export interface HamburgerStyles {
  open: HamburgerElementStyles;
  closed: HamburgerElementStyles;
}

export interface HamburgerElementStyles {
  menu: CSSProperties;
  hamburger: CSSProperties;
  lineOne: CSSProperties;
  lineTwo: CSSProperties;
  lineThree: CSSProperties;
}
