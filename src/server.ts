import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';
import { routes } from './routes';

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
  console.log('Connected', socket.id);
});

app.use(express.json());
app.use(routes);

http.listen(3333, () => console.log('Go to http://localhost:3333/'));
