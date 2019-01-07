const {io}=require('../server')

io.on('connection',(client)=>{

    console.log('Usuario conectado');

    //mensaje para el cliente   

    client.emit('enviarMensaje',{
        usuario:'Admin',
        mensaje:'Bienvenido al Himalaya'
    })


    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data);

        //enviar mensaje a todos
        client.broadcast.emit('enviarMensaje',data)
        //if(mensaje.usuario){
        //    callback({
        //        res: 'TODO SALIO BIEN'
        //    });
        //    
        //}else{
        //    callback({
        //        res: 'TODO SALIO MAL'
        //    });
        //    
        //}
//
    });


});
