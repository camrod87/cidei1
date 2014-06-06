$(document).ready(function(){

	$('.buttonv').bind('click',function(event){
		$('.labelv').addClass('aplicarverde');
		console.log("Botón verde");
	});
	$('.buttonr').bind('click',function(event){
		$('.labelr').addClass('aplicarrojo');
		console.log("Botón rojo");
	});
	
});