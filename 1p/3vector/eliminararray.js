//Maldonado Mendoza Yael
console.log("arreglo antes de insertar");
var arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log(arreglo);
console.log("Acontinuacion ingresaras la posicion del array a eliminar.");
var p=parseInt(prompt("ingresa la posicion del array(0-9):"));



if(p>9){alert('ingresaste una posicion no valida solo puedes ingresar de (0 a 9)');}
else{
  console.log("arreglo despues de eliminar");
arreglo.splice(p, 1,);

console.log(arreglo);

}