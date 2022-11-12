import React, { useEffect, useState } from "react";
import Head from "next/head";

import io from "socket.io-client";

import { Button, Flex, Stack } from "@chakra-ui/react";
import api from "../services/api";
import { Input } from "../components/Form/Input";

import * as yup from "yup";
import { useLogin } from "../context/LoginContext";
import { useRouter } from "next/router";

const formLoginSchema = yup.object().shape({
  login: yup.string().min(5).required(),
  name: yup.string().min(5).required(),
});

export default function Home() {
  const [login, setLogin] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const { singIn } = useLogin();
  const router = useRouter();

  const handleLoginChange = (e: any) => {
    const value: string = e.target.value;
    const newLogin = value.replace(/(( )|[^a-z])/, "");
    setLogin(newLogin);
  };

  const handleNameChange = (e: any) => {
    const value: string = e.target.value;
    setName(value);
  };

  const handleOnSubmitForm = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = { login, name };

    const isValid = await formLoginSchema.isValid(data);

    if (!isValid) {
      setIsError(true);
      return;
    }

    singIn(data);
    router.push("chat", "chat");
  };

  const socketConnection = async () => {
    await api.get("socket");

    const socket = io();
    console.log(socket);
  };

  useEffect(() => {
    socketConnection();
  }, []);

  useEffect(() => {
    setIsError(false);
  }, [login, name]);

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
          onSubmit={handleOnSubmitForm}
        >
          <Stack spacing={4}>
            <Input
              name="login"
              type="text"
              placeholder="Digite seu login (sem espaços)"
              label="Login"
              value={login}
              onChange={handleLoginChange}
              autoComplete="off"
            />
            <Input
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              label="Nome"
              value={name}
              onChange={handleNameChange}
              autoComplete="off"
              isInvalid={isError}
              errorMessage={"Formulário inválido"}
            />
          </Stack>

          <Button type="submit" marginTop={6} colorScheme="pink" size={"lg"}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
