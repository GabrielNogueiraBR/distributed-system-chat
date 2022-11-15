import { VStack } from "@chakra-ui/react";
import React from "react";
import Message from "../../types/Message";
import ChatMessage from "../ChatMessage";

const message: Message = {
  author: "Fulano",
  content: "teste",
};

const ChatBody = () => {
  return (
    <VStack w="100%" maxH="24rem" overflowY="auto">
      <ChatMessage message={message} />
      <ChatMessage message={message} align="right" />
      <ChatMessage message={message} />
      <ChatMessage message={message} isInitial={false} />
      <ChatMessage message={message} isInitial={false} />
      <ChatMessage message={message} isInitial={false} />
      <ChatMessage message={message} isInitial={false} />
      <ChatMessage message={message} isInitial={false} />
      <ChatMessage message={message} isInitial={false} />
    </VStack>
  );
};

export default ChatBody;
