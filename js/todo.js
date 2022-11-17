const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];
function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(e){
  const li = e.target.parentElement;
  li.remove();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(e){
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(todos);
if(savedToDos !== null){
  const parsedToDos = JSON.stringify(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo)
}
