const express = require('express');

const socketIO = require('socket.io');

const http = require('http');

const path = require('path');

const app = express();


//de esta manera el servidor ya tiene todas las configuraciones de express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

//IO = esta es la comunicacion del backend.IO es el que nos dice de los cambios
//let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket')


//client contine toda la informacion de la computadora
//Para ver si un usuario esta conectado


server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});