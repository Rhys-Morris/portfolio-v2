import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import APP_COLORS from "../style/colorTheme";

const Logo = () => {
  return (
    <Flex align="center" justify="center" cursor="pointer">
      <Text display="inline-block" fontWeight="bolder" fontSize="2xl">
        {"{"}
      </Text>
      <Text
        display="inline-block"
        color={APP_COLORS.fontHighlight}
        p="0 5px"
        fontWeight="normal"
        fontSize="2xl"
      >
        RM
      </Text>
      <Text display="inline-block" fontWeight="bolder" fontSize="2xl">
        {"}"}
      </Text>
    </Flex>
  );
};

Logo.displayName = "Logo";

export default Logo;
