import { Box, Flex } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ChatBody from "../components/Chat/ChatBody";
import ChatForm from "../components/Chat/ChatForm";
import ChatHeader from "../components/Chat/ChatHeader";
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
          <ChatHeader />
          <ChatBody />
          <ChatForm />
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