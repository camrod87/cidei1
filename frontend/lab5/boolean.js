var verdadero= true;
var flaso=false;
/*Elementos de comparación*/

/*igualdad sencillo*/
console.log(1==1);
//Corrección de tipos
console.log("1"==1);//Convierte "1" a 1
console.log(1==true);
console.log(0==false);
console.log(""==0);//Convierte "" a 0
console.log(0=="");//convierte ""  A 0 
console.log("  "==0);

//declarar
var x={};
var y=x;

//comparo los objetos
console.log("La comparación de los objetos es: "+ (x==y));

/*Igualdad estricta (===)*/
console.log("1"===1);