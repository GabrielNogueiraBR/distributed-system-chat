import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Message from "../../types/Message";

interface ChatMessageProps {
  message: Message;
  isInitial?: boolean;
  isUserAuthor?: boolean;
}

const ChatMessage = ({
  message,
  isInitial = true,
  isUserAuthor,
}: ChatMessageProps) => {
  return (
    <VStack w="100%" align={isUserAuthor ? "flex-end" : "flex-start"} px="4">
      {isInitial && <Text>{message.name || message.author}</Text>}
      <Flex
        background={isUserAuthor ? "pink.500" : "gray.700"}
        w="25rem"
        p={["2", "4"]}
        borderRadius={
          isInitial
            ? isUserAuthor
              ? "1rem 0rem 1rem 1rem"
              : "0rem 1rem 1rem 1rem"
            : "1rem"
        }
      >
        <Text>{message.content}</Text>
      </Flex>
    </VStack>
  );
};

export default ChatMessage;
