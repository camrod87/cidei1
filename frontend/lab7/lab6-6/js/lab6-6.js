$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){//$('input[type=submit]').click(function(event)
		$('.infobox').each(function(){
			
			var data=$(this).val();
			var len = data.length;
			var mostrar="Password incorrecto";
			if($(this).attr('name')=="userid"){
				mostrar="Usuario incorrecto";
			}
			if(len<1){
				$(this).parent().find('.error').show().text(mostrar);
			}else{
				$(this).parent().find('.error').hide();
			}
		});
		event.preventDefault();
	});
});