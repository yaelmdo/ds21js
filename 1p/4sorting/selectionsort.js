//Maldonado Mendoza Yael
      var arr=[1,9,2,3,7,6,4,5,7,8,56,34,33,12,5];
      console.log("array desordenado");
      console.log(arr);
     
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
      
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
        }
    }
 
      console.log("array ordenado");
      console.log(arr);
    