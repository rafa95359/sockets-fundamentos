 //tener una conexion entre back y front
 var socket = io();

 //on es para escuchar
 //saber si el servidor esta conectado
 socket.on('connect',function(){
     console.log('conectado al servidor');

 });
 socket.on('disconnect',function(){
     console.log('Perdimos conexion con el servidor');
 })

 //emit es para enviar informacion,en este caso al cliente
 socket.emit(
     'enviarMensaje',
     {usuario:'Rafael',mensaje:'Hola mundo'},
     function(resp){console.log('Respuesta server: ',resp);}        
 );

 //escuchar informacion
 socket.on('enviarMensaje',function(mensaje){
     console.log('Servidor:',mensaje);

 })
