import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Projeto de Sistemas Distribuídos - Chat NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flex='1'>
        <Text>Projeto de Sistemas Distribuídos - Chat NextJS</Text>
      </Flex>
    </Flex>
  );
}
