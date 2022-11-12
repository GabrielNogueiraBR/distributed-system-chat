import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { TextArea } from "../Form/TextArea";

const ChatForm = () => {
  return (
    <HStack flex="1" mt="8" justify={"flex-end"} spacing="4">
      <TextArea
        name="message-input"
        placeholder="Here is a sample placeholder"
        size="md"
        resize="none"
      />
      <Button type="submit" colorScheme={"pink"} px="12" py="2.5">
        Enviar
      </Button>
    </HStack>
  );
};

export default ChatForm;
