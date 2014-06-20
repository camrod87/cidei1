var socket = io.connect('http://127.0.0.1:8585');

//En conexión con el servidor, pregunta al respectivo nombre de usuario y una devolución anónima del llamado

socket.on('connect',function(){
	//Llamando al evento, funcion 'adduser' y le enviamos un parámetro ingresado por el prompt
	socket.emit('adduser',prompt('Cual es sun nombre de usuario'));	 
});

//Evento que está escuchando la invocación de 'updatechat' y actualiza el cuerpo del chat

socket.on('updatechat',function(username,data){
	$('#conversation').append('<b>'+username+':</b>'+data+'<br/>');
});

//Evento que está escuchando la invocación de 'updateusers', este actualiza la lista de usuarios

socket.on('updateusers',function(data){
	$('#users').empty();
	$.each(data,function(key,value){
		$('#users').append('<div>'+key+'</div>');
	});
});

$(document).ready(function(){
	$('#datasend').click(function(){
		var message =$('#data').val();
		//Indicarle al servidor que ejcute el evento sendchat y se le envian dos parámetros
		socket.emit('sendchat',message);
	});

	$('#data').keypress(function(event){
		if(event.which == 13){
			$(this).blur();
			$('#datasend').focus().click();
		}
	});

});