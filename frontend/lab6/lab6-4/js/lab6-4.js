$(document).ready(function(){
	$('.error').hide();
	$('.submit').click(function(event){
		var amount=0;
		var count=$('input:checked').length;//Cuantos están con checked
		if(count===0){
			$('p.result').hide();
			$('p.error').show();
			$('p.error').text("Error");
		}
		else{
			$('form').find(':checked').each(function(){
				if($(this).is(':checked')){
					amount+=parseInt($(this).val());
				}
				$('p.error').hide();
				$('p.result').show();
				$('p.result').text('La suma de los lenguajes que le gustan es: '+amount);
			});

		}
		event.preventDefault();
	});
});