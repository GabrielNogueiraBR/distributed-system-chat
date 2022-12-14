import { Button, HStack } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { TextArea } from "../Form/TextArea";

import * as yup from "yup";

const formMessageSchema = yup.object().shape({
  message: yup.string().required(),
});

interface ChatFormProps {
  onSendMessage: (content: string) => void;
}

const ChatForm = ({ onSendMessage }: ChatFormProps) => {
  const [message, setMessage] = useState<string>();
  const [isError, setIsError] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement & HTMLFormElement>(null);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleOnSubmitForm = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = { message };

    const isValid = await formMessageSchema.isValid(data);

    if (!isValid || !message) {
      setIsError(true);
      return;
    }

    onSendMessage(message);
    setMessage("");
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey == false) {
      e.preventDefault();
      ref.current?.requestSubmit();
    }
  };

  useEffect(() => {
    setIsError(false);
  }, [message]);

  return (
    <HStack
      as="form"
      ref={ref}
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
        onKeyDown={onEnterPress}
      />
      <Button type="submit" colorScheme={"pink"} px="12" py="2.5">
        Enviar
      </Button>
    </HStack>
  );
};

export default ChatForm;
