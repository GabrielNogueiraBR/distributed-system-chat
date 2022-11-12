import { Flex } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
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
      <Flex
        width="100vw"
        height="100vh"
        align={"center"}
        justify={"center"}
      ></Flex>
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
