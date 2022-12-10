import { motion } from "framer-motion";
import React from "react";
import { memo } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { DiGit } from "@react-icons/all-files/di/DiGit";
import { DiNpm } from "@react-icons/all-files/di/DiNpm";
import { SiAmazonaws } from "@react-icons/all-files/si/SiAmazonaws";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku";

const MotionFlex = motion(Flex);

const ToolsAndDeployment = () => (
  <MotionFlex
    marginTop="40px"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    wrap="wrap"
    justify="center"
    align="center"
  >
    <Flex direction="column" m="5px 10px" align="center">
      <DiNpm size="40px" />
      <Text>NPM</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <DiGit size="40px" />
      <Text>Git</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiAmazonaws size="40px" />
      <Text>AWS</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiNetlify size="40px" />
      <Text>Netlify</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiHeroku size="40px" />
      <Text>Heroku</Text>
    </Flex>
  </MotionFlex>
);

export default memo(ToolsAndDeployment);
