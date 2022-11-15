import { createContext, ReactNode, useContext, useState } from "react";
import Message from "../types/Message";

interface ChatContextData {
  messages: Message[];
}

export const ChatContext = createContext({} as ChatContextData);

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState<Message[]>([] as Message[]);

  return (
    <ChatContext.Provider value={{ messages }}>{children}</ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
