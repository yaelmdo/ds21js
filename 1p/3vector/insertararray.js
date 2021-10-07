//Maldonado Mendoza Yael
console.log("arreglo antes de insertar");
var arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log(arreglo);
console.log("Acontinuacion ingresaras la posicion del array y el numero a insertar.");
var p=parseInt(prompt("ingresa la posicion del array:"));
var v=parseInt(prompt("ingresa el valor a insertar en el array:"));

console.log("arreglo despues de insertar");
arreglo[p]=v;
console.log(arreglo);

