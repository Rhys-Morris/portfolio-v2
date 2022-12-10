import { ColorMode } from "@chakra-ui/react";
import BackEnd from "../../components/technology/BackEnd";
import FrontEnd from "../../components/technology/FrontEnd";
import ToolsAndDeployment from "../../components/technology/ToolsAndDeployment";
import APP_COLORS from "../../style/colorTheme";
import { TechnologyCategory } from "../../types/technologyCategory";

export const getButtonHoverStyle = (
  isActive: boolean,
  colorMode: ColorMode
) => ({
  bg: isActive
    ? ""
    : colorMode === "dark"
    ? "rgba(255, 255, 255, 0.16)"
    : "#E2E8F0",
});

export const getButtonBackgroundStyle = (isActive: boolean) =>
  isActive ? APP_COLORS.fontHighlight : "";

export const renderActiveTechnologies = (active: TechnologyCategory) => {
  switch (active) {
    case TechnologyCategory.BACK_END:
      return <BackEnd />;
    case TechnologyCategory.FRONT_END:
      return <FrontEnd />;
    case TechnologyCategory.TOOLS_AND_DEPLOYMENT:
      return <ToolsAndDeployment />;
    default:
      throw "Unreachable code";
  }
};
