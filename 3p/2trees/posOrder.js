//Yael Maldonado Mendoza 
//Recorrer arbol en posorder
let a = new Node(50)
let object1 = new Node(30)
let object2 = new Node(20)

function Node(object)
{
    this.data=object
    this.left=null
    this.right=null
}

function postorder(n)
{
    if (n!==null){
      postorder(n.left)
      postorder(n.right)
      console.log(n.data)
    }
}
  
  a.left = object1
  a.right = object2
  postorder(a)