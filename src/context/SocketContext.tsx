import { createContext, ReactNode, useContext } from "react";

export interface SocketContextData {
  socket: any;
}

export const SocketContext = createContext({} as SocketContextData);

interface SocketProviderProps {
  children: ReactNode;
}

export default function SocketProvider({ children }: SocketProviderProps) {
  return (
    <SocketContext.Provider value={{} as SocketContextData}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
