import React from "react";
import { Heading, Center, Flex, Button, useColorMode } from "@chakra-ui/react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../style/colorTheme";
import Nav from "./Nav";
import "@fontsource/iosevka";

const sectionStyle = {
  width: "99vw",
  height: "100vh",
};

const Hero = () => {
  const { colorMode } = useColorMode();

  const bgStyle = {
    background:
      colorMode === "light"
        ? `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryLight} 0%, ${APP_COLORS.primaryLight} 50%)`
        : `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryDark} 0%, ${APP_COLORS.primaryDark} 70%)`,
    display: "block",
    inset: 0,
    width: "100%",
    position: "absolute",
  };

  return (
    <section style={sectionStyle}>
      <DrifterStars
        style={bgStyle}
        color={
          colorMode === "light"
            ? APP_COLORS.secondaryLight
            : APP_COLORS.secondaryDark
        }
        motion={{ ratio: 0.03 }}
      />
      <Nav />
      <Center height="100%">
        <Flex
          direction="column"
          color={
            colorMode === "light"
              ? APP_COLORS.secondaryLight
              : APP_COLORS.secondaryDark
          }
        >
          <Heading zIndex="2" as="h1" size="4xl" mb="10px">
            Rhys Morris
          </Heading>
          <Heading zIndex="2" as="h2" fontFamily="iosevka">
            Software Developer
          </Heading>
        </Flex>
      </Center>
    </section>
  );
};

export default Hero;
