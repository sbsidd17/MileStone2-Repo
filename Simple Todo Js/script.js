document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    todoForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        addTodoToList(todoText);
        todoInput.value = "";
      }
    });
  
    function addTodoToList(todoText) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const completeButton = document.createElement("button");
      const removeButton = document.createElement("button");
  
      span.textContent = todoText;
      completeButton.textContent = "Complete";
      removeButton.textContent = "Remove";
  
      completeButton.addEventListener("click", function () {
        li.classList.toggle("completed");
      });
  
      removeButton.addEventListener("click", function () {
        todoList.removeChild(li);
      });
  
      li.appendChild(span);
      li.appendChild(completeButton);
      li.appendChild(removeButton);
  
      todoList.appendChild(li);
    }
  });
  