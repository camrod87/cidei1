$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(){
		var data = $('.infobox').val();
		var len = data.length;
		var c;
		var age =0;
		var flag=0;


		for (var i = 0; i < len; i++) {
			c = data.charAt(i).charCodeAt(0);

			if(c==45 && i==0){
				continue;
			}
			if(c<48 || c>57){
				$('.error').show();
				//Evitar que ocurran eventos
				event.preventDefault();
				break;
			}else{
				$('.error').hide();
			}

				if(flag===0){
					age = parseInt(data);
					if(age <18 || age>99){
						$('.error').show();
						$('.error').text('Edad invalida debes ser mayor de 18 años o menor de 99');
						event.preventDefault();
					}
				}
		};
	});
});