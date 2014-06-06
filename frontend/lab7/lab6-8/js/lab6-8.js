$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();

	$('.submit').bind('click',function(event){
		var count=$('select option:selected').val();//dentro del nodo select busca los nodos option que estén seleccionados
		if(count==="0"){
			$('p.result').hide();
			$('.error').show();
			$('.error').text('debe seleccionar algun elemento');
		}
		else
		{
			var selecOptions="";
			$('select option:selected').each(function(){
				selecOptions+=$(this).text()+",";
			});
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('Ud. selecciona el alimento: '+selecOptions);
		}
		event.preventDefault();
	});
});
