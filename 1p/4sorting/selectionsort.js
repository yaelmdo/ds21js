//Maldonado Mendoza Yael
      var pasos=0;
    var arr=[1,9,2,3,7,6,4,5,7,8,56,34,33,12,5];
      console.log("array desordenado");
      console.log(arr);
     
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
       var e = new Date();
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }pasos++;
    }    
 var t = new Date() - e;
console.log("array ordenado");
console.log(arr);
console.log('pasos:'+pasos);
console.log('tiempo: '+t);
