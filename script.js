let content = document.getElementById('addTask');

document.getElementById('saveTask').onclick = function() {

    if(document.getElementById('addTask').value == ""){
        document.getElementById('add-new-todo').style.border  = 'solid red';
    }else{
        document.getElementById('add-new-todo').style.border  = 'none';
        
        let addTask = document.getElementById('add-task').innerHTML += 
        `<div onclick="taskDone()" id="added-todo" class="added-new-todo"><p class="saved-task-text" type="text">${content.value}</p><button id="taskDone" class="added-task-done">✓</button></div>`;
    
        document.getElementById('addTask').value = '';
    }

}

//Remove Task
function taskDone(){
    let task = document.getElementById('added-todo');
    task.remove();
}
