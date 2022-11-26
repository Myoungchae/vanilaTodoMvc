const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event){
  const removeToDo = event.target.parentElement; 
  removeToDo.remove();
}

function createToDo(newTodo) {
  const text1 = document.createElement("li");
  const text2 = document.createElement("span");
  text2.innerText = newTodo;
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", deleteTodo);
  text1.appendChild(text2);
  text1.appendChild(deleteButton);
  toDoList.appendChild(text1);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  createToDo(newTodo);
}