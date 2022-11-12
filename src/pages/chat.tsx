import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { TextArea } from "../components/Form/TextArea";
import Message from "../components/Message";
import { useLogin } from "../context/LoginContext";

export default function Chat() {
  const { isLogged } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) router.push("/", "/");
  }, []);

  return (
    <>
      <Head>
        <title>Projeto de Sistemas Distribuídos - Chat NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex width="100vw" height="100vh" align={"center"} justify={"center"}>
        <Box flex="0.8" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading flex="1" size="lg" fontWeight={"normal"}>
            Chat
          </Heading>
          <Divider my="6" borderColor={"gray.700"} w="100%" />
          <VStack w="100%" maxH="24rem" overflowY="auto">
            <Message author="Fulano" message="Teste" />
            <Message author="Fulano" message="Teste" align="right" />
            <Message author="Fulano" message="Teste" />
            <Message author="Fulano" message="Teste" isInitial={false} />
            <Message author="Fulano" message="Teste" isInitial={false} />
            <Message author="Fulano" message="Teste" isInitial={false} />
            <Message author="Fulano" message="Teste" isInitial={false} />
            <Message author="Fulano" message="Teste" isInitial={false} />
            <Message author="Fulano" message="Teste" isInitial={false} />
          </VStack>
          <HStack flex="1" mt="8" justify={"flex-end"} spacing='4'>
            <TextArea
              name="message-input"
              placeholder="Here is a sample placeholder"
              size="md"
              resize="none"
            />
            <Button type="submit" colorScheme={"pink"} px="12" py="2.5">
              Enviar
            </Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      message: "olá mundo",
    },
  };
}
