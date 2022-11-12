import { VStack } from "@chakra-ui/react";
import React from "react";
import Message from "../Message";

const ChatBody = () => {
  return (
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
  );
};

export default ChatBody;
