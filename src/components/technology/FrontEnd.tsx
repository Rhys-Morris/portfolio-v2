import { Flex, Text } from "@chakra-ui/layout";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { DiJsBadge } from "@react-icons/all-files/di/DiJsBadge";
import { DiReact } from "@react-icons/all-files/di/DiReact";
import { DiSass } from "@react-icons/all-files/di/DiSass";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { motion } from "framer-motion";
import React from "react";
import { memo } from "react";

const MotionFlex = motion(Flex);

const FrontEnd = () => (
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
      <DiJsBadge size="40px" />
      <Text>JavaScript</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiTypescript size="40px" />
      <Text>TypeScript</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <DiReact size="40px" />
      <Text>React</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <DiHtml5 size="40px" />
      <Text>HTML 5</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <DiCss3 size="40px" />
      <Text>CSS 3</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <DiSass size="40px" />
      <Text>Sass</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiNextDotJs size="40px" />
      <Text>Next.JS</Text>
    </Flex>
  </MotionFlex>
);

export default memo(FrontEnd);
