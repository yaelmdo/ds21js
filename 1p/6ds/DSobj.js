//Maldonado Mendoza Yael
var obj = {},n=100000,arreglo =[],c = 0,t = 0;
  for(i=1;i<=7;i++){
    var e = new Date();
    for (var i=0; i<n; i++){
      arreglo[i] = parseInt(Math.random() * n);
       const add    = (key, value) => obj[key] = value
            add("nombre"+arreglo[i]);  
    }
    var t = new Date() - e;
    t+= t;
   
  }
 
 var t = new Date() - e;
  console.log("El tiempo promedio  en  7 corridas fue: " + t/7 + " ms");