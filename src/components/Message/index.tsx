import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface MessageProps {
  author: string;
  message: string;
  align?: "left" | "right";
  isInitial?: boolean;
}

const Message = ({
  author,
  message,
  isInitial = true,
  align = "left",
}: MessageProps) => {
  return (
    <VStack
      w="100%"
      align={align === "left" ? "flex-start" : "flex-end"}
      px="4"
    >
      {isInitial && <Text>{author}</Text>}
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
        <Text>{message}</Text>
      </Flex>
    </VStack>
  );
};

export default Message;
