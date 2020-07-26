
 var list = document.getElementById("list");
 

 function addToDo(){

 var input = document.getElementById("todo-item");

 var li = document.createElement('li')
 var liText = document.createTextNode(input.value )
 li.setAttribute("class","li1")
 
li.appendChild(liText)
 
 var delBtn =document.createElement('button')
 var delText =document.createTextNode("DELETE") 
 delBtn.setAttribute("class","btn1")
 delBtn.setAttribute("onclick","deleteItem(this)")
 
 var editBtn = document.createElement("button");
 var editText = document.createTextNode("EDIT")
  editBtn.setAttribute("class","btn2")
 editBtn.appendChild(editText)
 li.appendChild(editBtn)

 delBtn.appendChild(delText)
 editBtn.setAttribute("onclick","editItem(this)")
 li.appendChild(delBtn)

 list.appendChild(li)
 


 input.value =""
 //console.log(li )
}


 function deleteItem(e){

    e.parentNode.remove()

 }

 function deleteAll(){

  list.innerHTML= ""
 }

 function editItem(e){
  
 var val = e.parentNode.firstChild.nodeValue;
 var editValue = prompt("Enter Edit Value",val)
 
 e.parentNode.firstChild.nodeValue  =editValue
 }