//  Yael Maldonado Mendoza
// implementacion de una pila mediante lista enlazada
class Node{
constructor(data,next){
this.data=data;
this.Node=next;

};

};

class lista{
constructor(){
this.head=null;
this.size=0;

};

add(data){
const newNode = new Node(data,null);
if(!this.head){
this.head=newNode
}else{
  let current=this.head;
  while(current.next){
   current=current.next;


  };
  current.next=newNode;

};
this.size++

};

};

const Lista = new lista();
//console.log(Lista);
var start =Date.now();
var vector=[]
for(i=0;i<=9999;i++){
    vector[i]=(Math.floor((Math.random() * (10000 - 1 + 1)) + 1));
     }
    
     for(i=0;i<=9999;i++){
    Lista.add(vector[i]);
     }


class Stack{
constructor(){
    this.stack={};
    this.count=0;
}

push(element){
    this.stack[this.count]=element;
    this.count++;
    return  this.stack;
}

}
const stack = new Stack();
stack.push(Lista);

var end = Date.now();
 
console.log(end - start);
