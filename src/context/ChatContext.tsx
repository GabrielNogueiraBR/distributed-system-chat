import { createContext, ReactNode, useContext, useState } from "react";
import Message from "../types/Message";
import { useSocket } from "./SocketContext";

interface ChatContextData {
  messages: Message[];
  sendMessage: (message: Message) => void;
}

export const ChatContext = createContext({} as ChatContextData);

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState<Message[]>([] as Message[]);
  const { socket } = useSocket();

  const sendMessage = async (message: Message) => {
    socket?.emit("receiveMessage", message);
    setMessages([...messages, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
