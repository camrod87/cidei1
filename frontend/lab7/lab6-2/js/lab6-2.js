$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(){
		var data = $('.infobox').val();
		var len = data.length;
		var c;
		for (var i = 0; i < len; i++) {
			c = data.charAt(i).charCodeAt(0);
			if(c<48 || c>57){
				$('.error').show();
				//Evitar que ocurran eventos
				event.preventDefault();
				break;
			}else{
				$('.error').hide();
			}
		};

		
	});
});