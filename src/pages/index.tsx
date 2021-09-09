import React from "react";
import { color, useColorMode } from "@chakra-ui/react";
import Hero from "../components/Hero";
import APP_COLORS from "../style/colorTheme";
import Contact from "../components/Contact";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <main
      style={{
        background:
          colorMode === "light"
            ? APP_COLORS.primaryLight
            : APP_COLORS.primaryDark,
      }}
    >
      <Hero />
      <Contact />
    </main>
  );
};

export default Home;
