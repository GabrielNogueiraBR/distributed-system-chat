import { Button, HStack } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { TextArea } from "../Form/TextArea";

import * as yup from "yup";

const formMessageSchema = yup.object().shape({
  message: yup.string().required(),
});

const ChatForm = () => {
  const [message, setMessage] = useState<string>();
  const [isError, setIsError] = useState<boolean>(false);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleOnSubmitForm = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = { message };

    const isValid = await formMessageSchema.isValid(data);

    if (!isValid) {
      setIsError(true);
      return;
    }

    //TODO: CRIAR LOGICA PARA ENVIAR NOVA MENSAGEM AO SOCKET
    //TODO: CRIAR CONTEXT PARA CONEXAO COM O SOCKET PARA COMPARTILHAR O SOCKET ENTRE VARIAS TELAS
  };

  useEffect(() => {
    setIsError(false);
  }, [message]);

  return (
    <HStack
      as="form"
      flex="1"
      mt="8"
      justify={"flex-end"}
      spacing="4"
      onSubmit={handleOnSubmitForm}
    >
      <TextArea
        name="message-input"
        placeholder="Digite uma mensagem..."
        size="md"
        resize="none"
        value={message}
        onChange={handleMessageChange}
        isInvalid={isError}
        errorMessage={"Formulário inválido"}
      />
      <Button type="submit" colorScheme={"pink"} px="12" py="2.5">
        Enviar
      </Button>
    </HStack>
  );
};

export default ChatForm;
