import React from "react";
import { Heading, Center, Flex, useColorMode, Divider } from "@chakra-ui/react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../style/colorTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { debounce } from "../lib/helpers";

const sectionStyle = {
  width: "98vw",
  height: "100vh",
  minHeight: "-webkit-fill-available",
};

const Hero = () => {
  const { colorMode } = useColorMode();
  const [dimCanvas, setDimCanvas] = React.useState(false);

  const bgStyle: Background = {
    background:
      colorMode === "light"
        ? `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryLight} 0%, ${APP_COLORS.primaryLight} 80%)`
        : `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryDark} 0%, ${APP_COLORS.primaryDark} 80%)`,
    display: "block",
    inset: 0,
    width: "100%",
    zIndex: 0,
    position: "fixed",
  };

  const onScroll = () => {
    console.log("scroll");
    if (window.scrollY > window.innerHeight / 2) {
      setDimCanvas(true);
    }
    if (window.scrollY <= window.innerHeight / 2) {
      setDimCanvas(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", debounce(onScroll));
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <section style={sectionStyle}>
      <DrifterStars
        style={bgStyle}
        color={
          colorMode === "light" && !dimCanvas
            ? APP_COLORS.secondaryLight
            : colorMode === "dark" && !dimCanvas
            ? APP_COLORS.secondaryDark
            : colorMode === "light" && dimCanvas
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
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ margin: "0 5px" }}
              />
            </a>
            <a href="https://twitter.com/rhysmorris91" target="_blank">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2x"
                style={{ margin: "0 5px" }}
              />
            </a>
            <a href="https://github.com/Rhys-Morris" target="_blank">
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
