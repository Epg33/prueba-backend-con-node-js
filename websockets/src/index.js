import app from './app';
import { Server as WebSocketServer } from 'socket.io';
import { createServer } from 'http';
import {connectDB} from './db';
import sockets from './sockets';

connectDB();

const server = createServer(app);
const httpServer = server.listen(3000);
console.log(`server is running on port ${3000}`);


const io = new WebSocketServer(httpServer);
sockets(io);