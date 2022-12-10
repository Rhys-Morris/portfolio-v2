import { ColorMode } from "@chakra-ui/react";
import { CSSProperties } from "react";
import APP_COLORS from "../../style/colorTheme";

export const getBackgroundStyle = (colorMode: ColorMode): CSSProperties => ({
  background:
    colorMode === "light"
      ? `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryLight} 0%, ${APP_COLORS.primaryLight} 80%)`
      : `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryDark} 0%, ${APP_COLORS.primaryDark} 80%)`,
  display: "block",
  inset: 0,
  width: "100%",
  position: "fixed",
});
