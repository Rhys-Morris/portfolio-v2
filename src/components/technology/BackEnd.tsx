import { Flex, Text } from "@chakra-ui/react";
import { DiPostgresql } from "@react-icons/all-files/di/DiPostgresql";
import { DiRuby } from "@react-icons/all-files/di/DiRuby";
import { SiRails } from "@react-icons/all-files/si/SiRails";
import { SiStrapi } from "@react-icons/all-files/si/SiStrapi";
import { motion } from "framer-motion";
import React from "react";
import { memo } from "react";

const MotionFlex = motion(Flex);

const BackEnd = () => (
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
      <DiRuby size="40px" />
      <Text>Ruby</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiRails size="40px" />
      <Text>Rails</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <DiPostgresql size="40px" />
      <Text>PostgreSQL</Text>
    </Flex>
    <Flex direction="column" m="5px 10px" align="center">
      <SiStrapi size="40px" />
      <Text>Strapi</Text>
    </Flex>
  </MotionFlex>
);

export default memo(BackEnd);
