import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer style={{ zIndex: 0, width: "100%", fontSize: "12px" }}>
      <Flex direction="column" justify="center" align="center" zIndex="inherit">
        <Text zIndex="inherit">&copy; 2021 Rhys Morris</Text>
        <Flex zIndex="inherit">
          <span>Made with</span>
          <FontAwesomeIcon icon={faHeart} style={{ margin: "0 3px" }} />
          <span>in Melbourne, Australia</span>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
