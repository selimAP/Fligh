const content = document.getElementById('addTask');
const saveTaskBtn = document.getElementById('saveTask');
const lastDeletedTodoContainer = document.getElementById('add-task');
const deletedTaskContainer = document.getElementById('deleted-task');
let taskId = 0;

content.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("saveTask").click();
      }
    });

    saveTaskBtn.addEventListener('click', function () {

        const addTaskInput = document.getElementById('addTask');
        const addNewTodo = document.getElementById('add-new-todo');
        const datetimeValue = document.getElementById('datetime').value;
    
    if (addTaskInput.value === '') {
        addNewTodo.style.border = 'solid red';
    }else{
        const currentTaskId = taskId;

        addNewTodo.style.border = 'none';

        const newTodoHTML  = document.getElementById('add-task').innerHTML += `
        <div id="added-todo-${currentTaskId}" class="added-new-todo">
            <p class="saved-task-text" type="text">${addTaskInput.value}</p>
            <span id="taskDate-${currentTaskId}" class="date-span">${datetimeValue}</span>
            <button id="taskDone-${currentTaskId}" class="added-task-done task-done-btn">🗑️</button>
        </div>`;

        taskId++;
        addTaskInput.value = '';

        const taskDate = document.getElementById(`taskDate-${currentTaskId}`);
        const savedTaskText = document.querySelector('.saved-task-text');

        if (taskDate && taskDate.innerHTML === '00:00') {
            taskDate.style.display = 'none';
            savedTaskText.style.minWidth = '85%';
        }
  }
});

lastDeletedTodoContainer.addEventListener('click', function (event) {
    const taskDoneBtn = event.target;
    if (taskDoneBtn.classList.contains('added-task-done')) {
      const task = taskDoneBtn.parentElement;
      const todoId = task.id.split('-')[2]; // Extract the taskId
  
      taskDoneBtn.remove();
      task.remove();
  
      deletedTaskContainer.innerHTML += `
        <div id="deleted-todo-${todoId}" class="added-new-todo">
          ${task.innerHTML}
          <button onclick="deleteTaskPermnt(event)" class="added-task-done task-done-btn">🗑️</button>
        </div>`;
    }
  });

function deleteTaskPermnt(event) {
  const deletePermBtn = event.target.parentElement;
  deletePermBtn.remove();
}