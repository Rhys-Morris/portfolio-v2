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
