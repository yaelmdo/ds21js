//Maldonado Mendoza Yael
var arr=[1,9,2,3,7,6,4,5,5];
console.log("array desordenado");
console.log(arr);
var len = arr.length;

for (var i = 0; i < len ; i++) {
  for(var j = 0 ; j < len - i - 1; j++){ // this was missing
  if (arr[j] > arr[j + 1]) {
    // swap
    var temp = arr[j];
    arr[j] = arr[j+1];
    arr[j + 1] = temp;
  }
 }
}
console.log("array ordenado");
console.log(arr);