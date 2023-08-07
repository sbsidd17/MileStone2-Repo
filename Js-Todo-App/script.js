// Todo App
const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', addTodo);

function addTodo() {
  const task = taskInput.value.trim();
  if (task !== '') {
    const todo = createTodoElement(task);
    todoList.appendChild(todo);
    taskInput.value = '';
  }
}

function createTodoElement(task) {
  const todo = document.createElement('div');
  todo.classList.add('todo');
  todo.dataset.status = 'Pending'; // Set initial status

  const taskElement = document.createElement('span');
  taskElement.classList.add('task');
  taskElement.textContent = task;
  todo.appendChild(taskElement);

  const status = document.createElement('p');
  status.innerHTML = "Status : Pending";
  status.classList.add('status');
  todo.appendChild(status);

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Remove';
  deleteBtn.addEventListener('click', deleteTodo);
  actions.appendChild(deleteBtn);

  const statusBtn = document.createElement('button');
  statusBtn.classList.add('status-btn');
  statusBtn.textContent = 'Mark Completed';
  statusBtn.addEventListener('click', updateStatus);
  actions.appendChild(statusBtn);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit Task';
  editBtn.addEventListener('click', showEditModal);
  actions.appendChild(editBtn);

  todo.appendChild(actions);

  return todo;
}

function deleteTodo() {
  const todo = this.parentNode.parentNode;
  todoList.removeChild(todo);
}

function updateStatus() {
  const todo = this.parentNode.parentNode;
  const status = todo.dataset.status;

  if (status === 'Pending') {
    todo.dataset.status = 'Completed';
    this.textContent = 'Mark Pending';
    document.querySelector(".status-btn").classList.add('yellow');
    document.querySelector(".status").textContent = "Status : Completed"
    todo.classList.add('completed');
  } else {
    todo.dataset.status = 'Pending';
    this.textContent = 'Mark Completed';
    todo.classList.remove('completed');
    document.querySelector(".status-btn").classList.remove('yellow');
    document.querySelector(".status").textContent = "Status : Pending"
  }
}

// Edit Modal
const editModal = document.getElementById('edit-modal');
const editTaskInput = document.getElementById('edit-task-input');
const updateBtn = document.getElementById('update-btn');
const cancelBtn = document.getElementById('cancel-btn');
let todoToEdit = null;

function showEditModal() {
  const todo = this.parentNode.parentNode;
  todoToEdit = todo;
  editTaskInput.value = todo.querySelector('.task').textContent;
  editModal.style.display = 'block';
}

updateBtn.addEventListener('click', updateTodo);
cancelBtn.addEventListener('click', closeEditModal);

function updateTodo() {
  const task = editTaskInput.value.trim();
  if (task !== '') {
    todoToEdit.querySelector('.task').textContent = task;
    closeEditModal();
  }
}

function closeEditModal() {
  editTaskInput.value = '';
  editModal.style.display = 'none';
}
