var express=require('express'),
	app=express(),
	http=require('http'),
	server=http.createServer(app),
	io=require('socket.io').listen(server);

server.listen(8585);
app.use(express.static(__dirname));
//Ruta(s) que se manejaran
app.get('/',function(req,res){
	res.sendfile(__dirname+'/index.html');

});

//variable 'usernames' para los usuarios conectados
var usernames = {};

io.sockets.on('connection', function(socket){
	//Cuando el cliente, browser, emite el evento 'sendchat', este debe escuhcar y ejecutar
	socket.on('sendchat',function(data){
		io.sockets.emit('updatechat', socket.username,data);
	});
	//Cuando el cliente emite un evento adduser
	socket.on('adduser',function(username){
		//almacenamiento del nombre de usuario en la sesión de toma de info del cliente
		socket.username=username;
		//adicionamos el usuario 'socket.username' al objeto 'usernames'
		usernames[username]=username;
		//enviamos petición al mismo cliente de la petición con la conexión de el mismo		
		socket.broadcast.emit('updatechat','SERVER',socket.username+' Esta conectado');
		socket.emit('updatechat','SERVER','Usted está conectado');
		io.sockets.emit('updateusers',usernames);
	});

	socket.on('disconect',function(username){
		delete usernames[socket.username];
		//Actualizamos la de usuarios en el cliente
		io.sockets.emit('updateusers',usernames);
		socket.broadcast.emit('updatechat','SERVER',socket.username+' Esta desconectado');
	});
});
