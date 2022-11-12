import { Server } from "socket.io";

export default function SocketServer(req: any, res: any) {
  if (res.socket.server.io) {
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket: any) => {
    console.log(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  res.end();
}
