const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');


function createTaskElement(taskTitle) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    taskElement.innerHTML = `
      <div class="task__title">${taskTitle}</div>
      <a href="#" class="task__remove">&times;</a>
    `;

    return taskElement;
}

function addTask(event) {
    event.preventDefault(); 

    const taskTitle = input.value.trim();
    if (taskTitle) {
      const newTask = createTaskElement(taskTitle);
      taskList.appendChild(newTask);
      input.value = '';
    }
  }

  form.addEventListener('submit', addTask);

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(event);
    }
  });

  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
      event.preventDefault();
      const taskElement = event.target.closest('.task');
      if (taskElement) {
        taskElement.remove();
      }
    }
  });