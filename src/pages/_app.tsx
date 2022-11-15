import React from "react";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { LoginProvider } from "../context/LoginContext";
import SocketProvider from "../context/SocketContext";
import { ChatProvider } from "../context/ChatContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LoginProvider>
        <SocketProvider>
          <ChatProvider>
            <Component {...pageProps} />
          </ChatProvider>
        </SocketProvider>
      </LoginProvider>
    </ChakraProvider>
  );
}
