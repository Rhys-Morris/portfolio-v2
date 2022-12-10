import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../../theme";
import "../style/global.css";
import "@fontsource/raleway";
import "@fontsource/cabin";
import { AppProps } from "next/dist/shared/lib/router/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
