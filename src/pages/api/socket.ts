import { Server } from "socket.io";
import serverReceiveMessageListener from "../../utils/serverReceiveMessageListener";

export default function SocketServer(req: any, res: any) {
  if (res.socket.server.io) {
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket: any) => {
    console.log('conectou ao servidor')
    serverReceiveMessageListener({ io, socket });
  };

  io.on("connection", onConnection);

  res.end();
}
