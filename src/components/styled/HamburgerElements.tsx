import styled from "@emotion/styled";
import APP_COLORS from "../../style/colorTheme";

const HamburgerLine = styled.div`
  width: 100%;
  background: ${APP_COLORS.fontHighlight};
  border-radius: 5px;
  height: 4px;
  margin: 3px 0;
  transition: 0.2s all;
`;

const HamburgerBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.2s;
  z-index: 10;
  transition: 0.5s all;
`;

export { HamburgerBox, HamburgerLine };
