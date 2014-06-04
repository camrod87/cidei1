$(document).ready(function(){
	$('.error').hide();
	//$('.result').hide();

	$('.submit').bind('click',function(event){
		var data=$('.infobox').val();//dentro del nodo select busca los nodos option que estén seleccionados
		if(valid_email(data)){
			$('.error').hide();
			localStorage.setItem('email',data);
		}
		else
		{
			
			$('.error').show();
			$('.error').html('<h1>Ingrese una dirección de correo valida</h1>');
			event.preventDefault();
		}
		
	});
	$('.traer').bind('click',function(event){
		var data = localStorage.getItem('email');
		$('.pruebas').text(data);
	});

	function valid_email(email){
		var pattern=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);

		var bool = pattern.test(email);
		$('.pruebas').text(bool);
		return bool;
	}
});
