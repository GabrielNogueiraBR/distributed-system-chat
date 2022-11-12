import React from "react";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { LoginProvider } from "../context/LoginContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LoginProvider>
        <Component {...pageProps} />
      </LoginProvider>
    </ChakraProvider>
  );
}
