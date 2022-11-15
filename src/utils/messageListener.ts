import { Socket } from "socket.io-client";
import Message from "../types/Message";

const messageListener = (
  socket: Socket,
  callback: (message: Message) => void
) => {
  socket.on("receiveIncomingMessage", (message: Message) => callback(message));
};

export default messageListener;
