//Maldonado Mendoza Yael
alert("programa para mostrar un numero aleatorio entre un rango de 1 hasta numero ingresado por el usuario");
n=parseInt(prompt("ingresa el rango maximo para imprimir un numero aleatorio:"));
var num = Math.floor((Math.random() * (n-1))+1);
console.log(num);