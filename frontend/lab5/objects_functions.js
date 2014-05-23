/*Objetos y funciones*/

var myObject = new Object();

var myObject= {};

//Los Array también son Objetos
var lotter = [4,6,7,7,7,8];

profile = {
	firstName : "Camilo",
	lastName : "Rodríguez",
	phone : "1112122"
}

console.log(profile.firstName);
console.log(profile["lastName"]);

for(key in profile){
	console.log(profile[key]);
}

/*Funciones*/
function test(){
	console.log("Hola Mundo");
}
test();

chao = function(){
	console.log("Chao");
}

chao();
