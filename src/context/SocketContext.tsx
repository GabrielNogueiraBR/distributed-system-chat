import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

import io, { Socket } from "socket.io-client";
import { configureSocketClientFunctions } from "../utils/SocketClientFunctions";

export interface SocketContextData {
  socket: Socket | undefined;
}

export const SocketContext = createContext({} as SocketContextData);

interface SocketProviderProps {
  children: ReactNode;
}

export default function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket>();

  const socketConnection = async () => {
    await api.get("socket");

    const newSocket = io();
    const configuredSocket = configureSocketClientFunctions(newSocket);
    setSocket(configuredSocket);
  };

  useEffect(() => {
    socketConnection();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
