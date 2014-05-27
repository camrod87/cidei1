function algo(miCallBack){
	miCallBack();
}
algo(function(){
	console.log("Esto es un callback");
});

function otroCallBack(miCallBack){
	miCallBack("Un argumento");
}
otroCallBack(function(unValor){
	console.log("Esto es un callback con valor " +unValor);
});

/*Multipleas callbacks llamando en determinados casos*/
function algoOcurre(callback1, callback2, callback3){
	//Pasa la primera vez
	callback1("Primer paso");

	//Siguiente callback
	callback2("Segundo paso");

	//Y por último
	callback3("Tercer paso");
}

//Llamado y uso de los multiples callbaks
algoOcurre(
	function(paso1){
		console.log(paso1);
	},
	function(paso2){
		console.log(paso2);
	},
	function(paso3){
		console.log(paso3);
	}
);