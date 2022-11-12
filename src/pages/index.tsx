import React, { useEffect } from "react";
import Head from "next/head";

import io from "socket.io-client";

import { Button, Flex, Stack } from "@chakra-ui/react";
import api from "../services/api";
import { Input } from "../components/Form/Input";

export default function Home() {
  const socketConnection = async () => {
    await api.get("socket");

    const socket = io();
    console.log(socket);
  };

  useEffect(() => {
    socketConnection();
  }, []);

  return (
    <>
      <Head>
        <title>Projeto de Sistemas Distribuídos - Chat NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex width="100vw" height="100vh" align={"center"} justify={"center"}>
        <Flex
          as={"form"}
          width="100%"
          maxWidth={360}
          background="gray.800"
          padding={8}
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing={4}>
            <Input name="nome" type="text" label="Nome" />
          </Stack>

          <Button type="submit" marginTop={6} colorScheme="pink" size={"lg"}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
