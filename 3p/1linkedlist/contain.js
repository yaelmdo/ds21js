//Yael Maldonado Mendoza
//encontrar un elemento en una lista enlazada
function Node(data)
{
 this.data=data;
  this.next=this.next;
}
var n1=new Node('yael')
var n2=new Node('pedro')
var n3=new Node('pablo')
 
n1.next=n2;
n2.next=n3;
n3.next=n3;

const traverse =(n)=>{

   var existe=n
   if(existe){
       console.log(existe.data)
       existe=existe.next;
   }


}
traverse(n1);