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

