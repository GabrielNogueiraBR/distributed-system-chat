import { Divider, Heading } from "@chakra-ui/react";
import React from "react";

const ChatHeader = () => {
  return (
    <>
      <Heading flex="1" size="lg" fontWeight={"normal"}>
        Chat
      </Heading>
      <Divider my="6" borderColor={"gray.700"} w="100%" />
    </>
  );
};

export default ChatHeader;
