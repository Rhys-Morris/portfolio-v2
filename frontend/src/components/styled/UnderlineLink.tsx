import styled from "@emotion/styled";
import APP_COLORS from "../../style/colorTheme";

const UnderlineLink = styled.a`
  color: ${APP_COLORS.fontHighlight};
  position: relative;
  font-weight: bold;

  &:after {
    content: "";
    width: 0%;
    transition: 0.3s all;
    background: ${APP_COLORS.fontHighlight};
    height: 2px;
    position: absolute;
    top: 100%;
    left: 0;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export default UnderlineLink;
