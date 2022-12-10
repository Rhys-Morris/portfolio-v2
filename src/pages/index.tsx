import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import APP_COLORS from "../style/colorTheme";
import Contact from "../components/Contact";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Nav from "../components/navigation/Nav";

const Home = () => {
  const { colorMode }: { colorMode: "light" | "dark" } = useColorMode();

  useDocumentTitle("Rhys Morris - Software Engineer");

  return (
    <main
      style={{
        background:
          colorMode === "light"
            ? APP_COLORS.primaryLight
            : APP_COLORS.primaryDark,
        scrollBehavior: "smooth",
      }}
      id="home"
    >
      <Nav />
      <Hero />
      <About />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
