$(document).ready(function(){
	//Función que hace que jquery espere a que cargue todo el dom
	//$ Es el objeto jquery. Contiene todo jquery
	$('body').append('<ul class = "ul"></ul>');
	$('body').append('<li>1</li>'+
					 '<li>2</li>'+
					 '<li>3</li>');	
});