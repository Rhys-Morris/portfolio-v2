import React from "react";
import { Heading, Center, Flex, Divider } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../style/colorTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons/faTwitterSquare";
import { getBackgroundStyle } from "../lib/helpers/siteBackground";

const sectionStyle = {
  width: "98vw",
  height: "100vh",
  minHeight: "-webkit-fill-available",
};

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <section style={sectionStyle}>
      <DrifterStars
        style={getBackgroundStyle(colorMode)}
        color={
          colorMode === "light"
            ? APP_COLORS.dimCanvasLight
            : APP_COLORS.dimCanvasDark
        }
        motion={{ ratio: 0.03 }}
      />
      <Center height="100%">
        <Flex
          direction="column"
          align="center"
          w="90vw"
          maxWidth="420px"
          textAlign="center"
          color={
            colorMode === "light"
              ? APP_COLORS.secondaryLight
              : APP_COLORS.secondaryDark
          }
        >
          <Heading zIndex="2" as="h1" size="3xl" mb="10px">
            Rhys Morris
          </Heading>
          <Heading
            zIndex="2"
            as="h2"
            size="xl"
            fontFamily="iosevka"
            marginBottom="20px"
          >
            Software Developer
          </Heading>
          <Flex align="center" zIndex="2" width="100%">
            <Divider
              bg={APP_COLORS.fontHighlight}
              h="2px"
              mr="10px"
              maxWidth="40%"
            />
            <a
              href="https://au.linkedin.com/in/rhys-morris-37ba241b9"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ margin: "0 5px" }}
              />
            </a>
            <a
              href="https://twitter.com/rhysmorris91"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2x"
                style={{ margin: "0 5px" }}
              />
            </a>
            <a
              href="https://github.com/Rhys-Morris"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="2x"
                style={{
                  margin: "0 5px",
                }}
              />
            </a>
            <Divider
              bg={APP_COLORS.fontHighlight}
              h="2px"
              ml="10px"
              maxWidth="40%"
            />
          </Flex>
        </Flex>
      </Center>
    </section>
  );
};

export default Hero;
