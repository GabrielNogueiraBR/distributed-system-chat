import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Message from "../../types/Message";

interface ChatMessageProps {
  message: Message;
  align?: "left" | "right";
  isInitial?: boolean;
}

const ChatMessage = ({
  message,
  isInitial = true,
  align = "left",
}: ChatMessageProps) => {
  return (
    <VStack
      w="100%"
      align={align === "left" ? "flex-start" : "flex-end"}
      px="4"
    >
      {isInitial && <Text>{message.author}</Text>}
      <Flex
        background={align === "left" ? "gray.700" : "pink.500"}
        w="25rem"
        p={["2", "4"]}
        borderRadius={
          isInitial
            ? align === "left"
              ? "0rem 1rem 1rem 1rem"
              : "1rem 0rem 1rem 1rem"
            : "1rem"
        }
      >
        <Text>{message.content}</Text>
      </Flex>
    </VStack>
  );
};

export default ChatMessage;
