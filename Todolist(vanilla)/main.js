const todos = document.querySelector(".main__body");
const input = document.querySelector(".main__input");
const todoInput = document.querySelector(".main__input__text");
const API_URL = "http://localhost:3000/todos";

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
  fetch(API_URL)
    .then((resopnse) => resopnse.json())
    .then((data) => renderAllTodos(data))
    .catch((e) => console.log(e));
};
const addTodo = (event) => {
  event.preventDefault();
  // console.log(todoInput.value);
  let todo = {
    content: todoInput.value,
    completed: false,
  };
  fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then(() => {
      todoInput.value = "";
      todoInput.focus();
    })
    .catch((e) => console.log(e));
};
const toggleTodo = (event) => {
  console.log(event.target.className);
  if (event.target.className !== "todo_checkbox") return;
  console.log(event.target.className);
  const item = event.target.closest(".item");
  const id = item.dataset.id;
  const completed = event.target.checked;

  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
};
const changeEditMode = (event) => {
  const item = event.target.closest(".item");
  const label = item.querySelector("label");
  const editInput = item.querySelector('input[type="text"]');
  const contentButton = item.querySelector(".content_buttons");
  const editButton = item.querySelector(".edit_buttons");
  const value = editInput.value;
  if (
    event.target.className === "todo_edit_button" ||
    event.target.className === "far fa-edit"
  ) {
    label.style.display = "none";
    editInput.style.display = "flex";
    contentButton.style.display = "none";
    editButton.style.display = "flex";
    editInput.focus();
    editInput.value = "";
    editInput.value = value;
  }
  if (
    event.target.className === "todo_edit_cancel_button" ||
    event.target.className === "fas fa-times"
  ) {
    label.style.display = "flex";
    editInput.style.display = "none";
    contentButton.style.display = "flex";
    editButton.style.display = "none";
    editInput.value = "";
    editInput.value = label.innerText;
  }
};
const editTodo = (event) => {
  if (
    event.target.className !== "todo_edit_confirm_button" &&
    event.target.className !== "fas fa-check"
  )
    return;
  const item = event.target.closest(".item");
  const id = item.dataset.id;
  const editInput = item.querySelector('input[type="text"]');
  const content = editInput.value;
  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
};

const removeTodo = (event) => {
  if (
    event.target.className !== "todo_remove_button" &&
    event.target.className !== "far fa-trash-alt"
  )
    return;

  const item = event.target.closest(".item");
  const id = item.dataset.id;
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
input.addEventListener("submit", addTodo);
todos.addEventListener("click", toggleTodo);
todos.addEventListener("click", changeEditMode);
todos.addEventListener("click", editTodo);
todos.addEventListener("click", removeTodo);
getTodos();
todoInput.focus();
