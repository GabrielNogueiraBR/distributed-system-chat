import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import Message from "../types/Message";
import messageListener from "../utils/messageListener";
import { useSocket } from "./SocketContext";

interface ChatContextData {
  messages: Message[];
  sendMessage: (message: Message) => void;
  receiveMessage: (message: Message) => void;
}

export const ChatContext = createContext({} as ChatContextData);

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState<Message[]>([] as Message[]);
  const { socket } = useSocket();

  const receiveMessage = async (message: Message) => {
    setMessages([...messages, message]);
  };

  const sendMessage = async (message: Message) => {
    socket?.emit("sendMessage", message);
    setMessages([...messages, message]);
  };

  useEffect(() => {
    if (socket) messageListener(socket, receiveMessage);
  }, [socket, messages]);

  return (
    <ChatContext.Provider value={{ messages, sendMessage, receiveMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
