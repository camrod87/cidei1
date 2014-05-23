/*Alcance de las variabkles en las funciones*/

var a ="a";

function levelb(){
	var b="b";
	function levelc(){
		var c="c";
		function leveld(){
			var d="d";
			console.log(a+b+c+d);
		}
		leveld();
	}
	levelc();
	//console.log(a+c);
}

levelb();