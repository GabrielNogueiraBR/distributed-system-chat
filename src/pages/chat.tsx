import { Box, Flex } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ChatBody from "../components/ChatBody";
import ChatForm from "../components/ChatForm";
import ChatHeader from "../components/ChatHeader";
import { useChat } from "../context/ChatContext";
import { useLogin } from "../context/LoginContext";

export default function Chat() {
  const { isLogged, login, name } = useLogin();
  const { sendMessage } = useChat();

  const router = useRouter();

  const handleSendMessage = async (content: string) => {
    if (!login) return;
    sendMessage({ author: login, content: content, name: name });
  };

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
          <ChatForm onSendMessage={handleSendMessage} />
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
