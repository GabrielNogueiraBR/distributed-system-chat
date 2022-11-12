import { Socket } from "socket.io-client";

export const configureSocketClientFunctions = (socket: Socket) => {
  socket.on("connect", () => console.log("conectou ", socket.id));

  return socket;
};
