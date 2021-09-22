import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import APP_COLORS from "../style/colorTheme";

const Footer = () => {
  return (
    <footer
      style={{
        zIndex: 0,
        width: "100%",
        fontSize: "12px",
      }}
    >
      <Flex direction="column" justify="center" align="center" zIndex="inherit">
        <Text mb="3px" zIndex="inherit">
          &copy; 2021 Rhys Morris
        </Text>
        <Flex zIndex="inherit">
          <span>Made with</span>
          <FontAwesomeIcon
            icon={faHeart}
            color={APP_COLORS.fontHighlight}
            style={{ margin: "0 3px" }}
          />
          <span>in Melbourne, Australia</span>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
