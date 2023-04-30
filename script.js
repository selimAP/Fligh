let content = document.getElementById('addTask');
let taskId = 0;

content.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("saveTask").click();
      }
    });

document.getElementById('saveTask').onclick = function() {
    
    if(document.getElementById('addTask').value == ""){
        document.getElementById('add-new-todo').style.border  = 'solid red';
    }else{
        document.getElementById('add-new-todo').style.border  = 'none';

        const datetimeValue = document.getElementById('datetime').value;

        let addTask = document.getElementById('add-task').innerHTML += 
        `<div id="added-todo-${taskId}" class="added-new-todo"><p id="saved-task-text" class="saved-task-text" type="text">${content.value}</p><span id="taskDate-${taskId}" class="date-span">${datetimeValue}</span><button onclick="taskDone(event)" id="taskDone-${taskId}" class="added-task-done">🗑️</button></div>`;
    
        taskId++;
        document.getElementById('addTask').value = '';

        let taskDate = document.getElementById(`taskDate-${taskId-1}`);
        if(taskDate && taskDate.innerHTML === '00:00'){
            taskDate.style.display = "none"; 
            document.getElementById('saved-task-text').style.minWidth = "85%";
        }
    }
}

function taskDone(event){
    let task = event.target.parentElement;
    task.remove();
}
