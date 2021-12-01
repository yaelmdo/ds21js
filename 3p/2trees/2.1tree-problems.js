/**Name: Yael Maldonado Mendoza
 *  INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 */

let person ={
nombre:'yael',
apellidos:'maldonado mendoza',
correo:'ymaldonado@ucol.mx',
type:{
type1:'admin',
type2:'user'

},
active:true,
intereses:["futbol","leer","cantar","javascript"],
direccion:{
    calles:{
    calle1:'republica de colombia',
    calle2:'No. 1540'
},
ciudad:'colima',
codigopostal:'28047'
}};

const isObject = function(val){
   if(val===null){
       return false;
   }
    return(typeof val ==='object');
};

const objProps = function(obj,origProp){

    for(let val in obj){
     if (isObject(obj[val])){

        objProps(obj[val],val);
     }else{

        if(Array.isArray(obj)){
           console.log(origProp+ val, obj[val]);

        }else{

            console.log(val,obj[val]);
        }
     }




    };
};
objProps(person);








