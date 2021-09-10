import React from "react";
import { useColorMode } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Footer from "../components/Footer";
import APP_COLORS from "../style/colorTheme";
import Contact from "../components/Contact";

const Home = () => {
  const { colorMode }: { colorMode: "light" | "dark" } = useColorMode();

  React.useEffect(() => {
    document.title = "Rhys Morris - Software Developer";
  });
  return (
    <main
      style={{
        background:
          colorMode === "light"
            ? APP_COLORS.primaryLight
            : APP_COLORS.primaryDark,
        scrollBehavior: "smooth",
      }}
    >
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
