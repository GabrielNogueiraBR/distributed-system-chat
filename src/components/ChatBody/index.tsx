import { VStack } from "@chakra-ui/react";
import React from "react";
import { useChat } from "../../context/ChatContext";
import { useLogin } from "../../context/LoginContext";
import ChatMessage from "../ChatMessage";

const ChatBody = () => {
  const { login } = useLogin();
  const { messages } = useChat();

  return (
    <VStack w="100%" maxH="24rem" minH="24rem" overflowY="auto">
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            message={message}
            isUserAuthor={login === message.author}
          />
        );
      })}
    </VStack>
  );
};

export default ChatBody;
