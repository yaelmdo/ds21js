//Maldonado Mendoza Yael
//programa para imprimir hasta n elemnto maximo los numero primos.
var maximo=prompt ("ingresa el numero maximo  a analizar:");
var primos =[];

for (var i=0;i<maximo;i++) {
    primos[i]=1;
}
for (var i=2;i<maximo;i++) {
    for (var j=2*i;j<maximo;j+=i) {
        primos[j]=0;
    }
}

var cad="[";
for (var i=0;i<maximo;i++) {
    if (primos[i]==1) {
        if (i!=0) {
            cad+=", ";
        }
        cad+=i;
    }
}
cad+="]";

alert ("Primos: " + cad);