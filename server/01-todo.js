const ulTodos = document.querySelector('#todos');
const txtInputTodo = document.querySelector('#todo');
const btnAddTodo = document.querySelector('.btn-add');

let todos = ['Hacer la comida'];
let count = 0;

const htmlTodo = (todo) => {
  count++;
  const htmlTodo = `
    <li>${count}. ${todo} <input type="checkbox" name="todo" id="todo">Hecho</li>
  `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  ulTodos.append(div.firstElementChild);

  return div.firstElementChild;
}

const init = () => {
  if (todos.length > 0) {
    todos.forEach((todo) => htmlTodo(todo));
  }
}

init();

btnAddTodo.addEventListener('click', (event) => {
  event.preventDefault();

  const newTodo = txtInputTodo.value.toString();
  if (newTodo !== "" && newTodo.length > 0) {
    todos.push(newTodo);
    htmlTodo(newTodo);
  }

  txtInputTodo.value = '';
}); 

