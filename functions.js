let taskArray = [];

function add() {
    let taskList = document.getElementById('task-list');
    let div = document.createElement('div');
    let deleteText = document.getElementById('new-task');
    let delBtn = document.createElement('button');

    delBtn.setAttribute('onclick', '');
    delBtn.onclick = deleteTask;
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('class', 'delete-btn');
    taskArray.push(document.getElementById('new-task').value);
    div.append(taskArray[taskArray.length-1]);
    div.setAttribute('id', taskArray.length);
    div.setAttribute('class', 'my-task');
    div.append(delBtn);
    div.insertAdjacentHTML('beforeend', '<br/>');
    
    taskList.append(div);

    // delete text inside input box
    deleteText.value = '';

    console.log(taskArray);
}
function deleteTask() {
    taskArray.splice(this.parentNode.id - 1, 1);
    this.parentNode.remove();

    console.log(taskArray);
}