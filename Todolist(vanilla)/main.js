const todos = document.querySelector(".main__body");
const input = document.querySelector("main__input");
const todoInput = document.querySelector("main__input__text");
const API_URL = "http://localhost:3000/todolist";

const createTodoElement = (item) => {
  const { id, content, completed } = item;
  const isChecked = completed ? "checked" : "";
  const todoItem = document.createElement("div");
  todoItem.classList.add("item");
  todoItem.dataset.id = id;
  todoItem.innerHTML = `
    <div class="content">
    <input
      type="checkbox"
      class='todo_checkbox' 
      ${isChecked}
    />
    <label>${content}</label>
    <input type="text" value="${content}" />
  </div>
  <div class="item_buttons content_buttons">
    <button class="todo_edit_button">
      <i class="far fa-edit"></i>
    </button>
    <button class="todo_remove_button">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
  <div class="item_buttons edit_buttons">
    <button class="todo_edit_confirm_button">
      <i class="fas fa-check"></i>
    </button>
    <button class="todo_edit_cancel_button">
      <i class="fas fa-times"></i>
    </button>
  </div>

    `;
  return todoItem;
};

const renderAllTodos = (todolist) => {
  todos.innerHTML = "";
  todolist.forEach((item) => {
    const todoElement = createTodoElement(item);
    todos.appendChild(todoElement);
  });
};
const getTodos = () => {
  fetch("http://localhost:3000/todos")
    .then((resopnse) => resopnse.json())
    .then((data) => renderAllTodos(data))
    .catch((e) => console.log(e));
};

getTodos();
