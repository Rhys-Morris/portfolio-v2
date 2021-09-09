import React from "react";
import {
  Heading,
  Center,
  Flex,
  Link,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import APP_COLORS from "../style/colorTheme";
import Nav from "./Nav";
import "@fontsource/iosevka";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const sectionStyle = {
  width: "99vw",
  height: "100vh",
};

const Hero = () => {
  const { colorMode } = useColorMode();
  const [dimCanvas, setDimCanvas] = React.useState(false);

  const bgStyle = {
    background:
      colorMode === "light"
        ? `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryLight} 0%, ${APP_COLORS.primaryLight} 50%)`
        : `radial-gradient(ellipse at center, ${APP_COLORS.tertiaryDark} 0%, ${APP_COLORS.primaryDark} 70%)`,
    display: "block",
    inset: 0,
    width: "100%",
    position: "fixed",
  };

  const debounce = (func, wait) => {
    let timeout;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(func, wait);
    };
  };

  const onScroll = debounce(() => {
    console.log("scroll");
    if (window.scrollY > window.innerHeight / 2 && !dimCanvas)
      setDimCanvas(true);
    if (window.scrollY <= window.innerHeight / 2 && dimCanvas)
      setDimCanvas(false);
  }, 200);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
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
      <Nav />
      <Center height="100%">
        <Flex
          direction="column"
          align="center"
          color={
            colorMode === "light"
              ? APP_COLORS.secondaryLight
              : APP_COLORS.secondaryDark
          }
        >
          <Heading zIndex="2" as="h1" size="4xl" mb="10px">
            Rhys Morris
          </Heading>
          <Heading zIndex="2" as="h2" fontFamily="iosevka" marginBottom="20px">
            Software Developer
          </Heading>
          <Flex align="center" zIndex="2" width="100%">
            <Divider bg={APP_COLORS.fontHighlight} h="2px" mr="20px" />
            <Link
              href="https://au.linkedin.com/in/rhys-morris-37ba241b9"
              isExternal
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ marginRight: "10px" }}
              />
            </Link>
            <Link href="https://twitter.com/rhysmorris91" isExternal>
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2x"
                style={{ marginRight: "10px" }}
              />
            </Link>
            <Link href="https://github.com/Rhys-Morris" isExternal>
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </Link>
            <Divider bg={APP_COLORS.fontHighlight} h="2px" ml="20px" />
          </Flex>
        </Flex>
      </Center>
    </section>
  );
};

export default Hero;
