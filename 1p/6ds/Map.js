//Maldonado Mendoza Yael
const names = new Map();
var lim = 100000,cont = 0,nombre = [], t = 0;
for(var i = 1; i < 7; i++) {
  for(var i = 0; i < lim; i++) {
    var inicio = new Date();
    nombre[i] = parseInt(Math.random()*lim)+1;
    }
  for(var r = 0; r < lim; r++) {
    names.set((r+1), 'name'+nombre[r]);
  }
  var fin = new Date() - inicio; 
  t = t + fin;
}
console.log("El tiempo promedio de 7 corridas  es: "+(t/7)+" ms");