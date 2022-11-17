import { Server, Socket } from "socket.io";
import Message from "../types/Message";

interface Props {
  io: Server;
  socket: Socket;
}

const serverReceiveMessageListener = ({ io, socket }: Props) => {
  const emitMessage = (data: Message) => {
    io.emit("receiveIncomingMessage", data);
  };

  socket.on("sendMessage", emitMessage);
};

export default serverReceiveMessageListener;
