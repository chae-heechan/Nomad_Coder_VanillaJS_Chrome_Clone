const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  
}

toDoForm.addEventListener("submit", handleToDoSubmit);