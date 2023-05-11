const form = document.querySelector('form');
const input = document.querySelector('#new-item');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.textContent = input.value;
    button.textContent = 'X';
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    input.value = '';
  }
});

todoList.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
  }
});
