import { VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useChat } from "../../context/ChatContext";
import { useLogin } from "../../context/LoginContext";
import ChatMessage from "../ChatMessage";

const ChatBody = () => {
  const { login } = useLogin();
  const { messages } = useChat();

  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatRef.current?.scrollTo({
      behavior: "smooth",
      top: chatRef.current.scrollHeight,
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <VStack ref={chatRef} w="100%" maxH="24rem" minH="24rem" overflowY="auto">
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
