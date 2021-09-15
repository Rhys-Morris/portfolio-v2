import styled from "@emotion/styled";
import APP_COLORS from "../../style/colorTheme";

const UnderlineText = styled.span`
  color: ${(props) => (props.color ? props.color : APP_COLORS.fontHighlight)};
  position: relative;
  font-weight: bold;

  &:after {
    content: "";
    width: 0px;
    transition: 0.3s all;
    height: 2px;
    background: ${APP_COLORS.fontHighlight};
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

export default UnderlineText;
