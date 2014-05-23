/*Arrays*/

var myArray = new Array();

var myArray = [];

myArray = [1,3,3,4,45,6,5,56,6,6];

console.log(myArray[4]);

//push agregar elemento al final de Array
myArray.push(10);
console.log(myArray);
myArray.push("Hola Mundo");
console.log(myArray);

//pop elimina el último elemento del Array
myArray.pop();
console.log(myArray);

//reverse invierte el orden del Array
console.log(myArray.reverse());

//shift elimina el primer elemento

myArray.shift();
console.log(myArray);

//Sort, organiza el Array
var myArray2 = myArray.sort();
console.log(myArray2);

//splice reemplaza un elemento en el arreglo