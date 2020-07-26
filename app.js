var list=document.getElementById("list");



function addTodo(){
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement('li');
    var liText=document.createTextNode(todo_item.value)

var delBtn=document.createElement("button");
var delText=document.createTextNode("DELETE");
delBtn.appendChild(delText);
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onclick","deleteItem(this)")

var editBtn= document.createElement("button");
var editText=document.createTextNode("EDIT");
editBtn.setAttribute("class","editn")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)




    li.appendChild(liText)
    list.appendChild(li)
    li.appendChild(delBtn);
    li.appendChild(editBtn)
    todo_item.value=""
    console.log(li);
}
function deleteItem(e){
e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML="";
}
function editItem(e){
var val=e.parentNode.firstChild.nodeValue;
var editValue=prompt("enter new task",val);
e.parentNode.firstChild.nodeValue=editValue;
}