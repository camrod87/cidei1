$(document).ready(function(){
	$('.error').hide();
	var NOMBRE = 'NOMBRE';
	var EMAIL = 'EMAIL';
	var PASS = 'PASS';  
	var TOTAL = 'TOTAL';
	var TYPEPAID = 'TYPEPAID';
	//$('.result').hide();

	$('.submit').bind('click',function(event){
		debugger;
		var name=$('.name').val();//dentro del nodo select busca los nodos option que estén seleccionados
		var email=$('.email').val();
		var pass=$('.pass').val();
		var confpass=$('.confpass').val();
		if(valid_email(email)){
			if(pass===confpass){
				var resultado=sumar_precios();
				var tarjeta = detectar_tarjeta();
				
				$('.pruebas').show();
				$('.pruebas').text("Nombre: "+name+","+
								   "email: "+email+","+
								   "pass: "+pass+","+
								   "confpass: "+confpass+
								   "valor: "+resultado+
								   "tarjeta: "+tarjeta);
				almacenar_datos(NOMBRE, name);
				almacenar_datos(EMAIL, email);
				almacenar_datos(PASS, pass);
				almacenar_datos(TOTAL, resultado);
				almacenar_datos(TYPEPAID, tarjeta);
				event.preventDefault();
			}else{
				$('.pruebas').show();
				$('.pruebas').text("Sus contraseñas no coinciden. Digite de nuevo");
				event.preventDefault();
			}	
		}
		else{
			$('.pruebas').show();
			$('.pruebas').text("Digite un email valido");
			event.preventDefault();
		}
		
		
/*
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
*/		
	});
	$('.traer').bind('click',function(event){
		var data = localStorage.getItem(NOMBRE);
		$('.pruebas').text(data+"\n");
		data = localStorage.getItem(EMAIL);
		$('.pruebas').append(data+"\n");
		data = localStorage.getItem(PASS);
		$('.pruebas').append(data+"\n");
		data = localStorage.getItem(TOTAL);
		$('.pruebas').append(data+"\n");
		data = localStorage.getItem(TYPEPAID);
		$('.pruebas').append(data+"\n");
	});

	function valid_email(email){
		var pattern=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);

		var bool = pattern.test(email);
		$('.pruebas').text(bool);
		return bool;
	}

	function sumar_precios(){
		var resultado=0;
		$('select option:selected').each(function(){
			var cadena = $(this).text();
			var valor = cadena.split("$");
			resultado+=parseInt(valor[1]);
		});
		return resultado;
	}

	function detectar_tarjeta(){
		
		var amount=0;
		var tarjeta="";
		var count=$('input:checked').length;//Cuantos están con checked
		if(count===0){
			$('.pruebas').show();
			$('.pruebas').text("Debe seleccionar el tipo de tarjeta");
		}
		else{
			tarjeta=$('input:checked').attr("value");
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('Usted selecciona: '+
						       tarjeta+
						       " como medio de pago");
		}
		return tarjeta;
	}

	function almacenar_datos(key, value){
		localStorage.setItem(key,value);
	}
});
