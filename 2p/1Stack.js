


function Stack() {
    this.dataStore = [];
   

this.top = 0;
 this.push = push;
 this.pop = pop;
 this.peek = peek;
 this.clear = clear;
 this.length = length;
}
function push(element) {
 this.dataStore[this.top++] = element;
}
function peek() {
 return this.dataStore[this.top-1];
}
function pop() {
 return this.dataStore[--this.top];
}
function clear() {
 this.top = 0;
}
function length() {
 return this.top;
}

var s = new Stack();
s.push("Yael");
s.push("Oscar");
s.push("Joaquin");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("nemesio");
console.log(s.peek());
s.clear();
console.log("luis: " + s.length());
console.log(s.peek());
s.push("zlatan");
console.log(s.peek());