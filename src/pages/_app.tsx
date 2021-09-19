import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import "../style/global.css";
import "@fontsource/raleway";
import "@fontsource/cabin";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
