let taskCounter = document.getElementById('task-counter-span');
let completedCounter = 0;

document.getElementById('completed-counter-span').innerText = completedCounter;

function add() {
    if (document.getElementById('new-task').value == '' || document.getElementById('new-task').value.trim().length == 0) {
        document.getElementById('new-task').value = '';
        return;
    }
    let div = document.createElement('div');
    let taskList = document.getElementById('task-list');

    // add delete button
    let delBtn = document.createElement('button');
    delBtn.setAttribute('onclick', '');
    delBtn.onclick = deleteBtn;
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');

    // add complete button
    let compBtn = document.createElement('button');
    compBtn.setAttribute('onclick', '');
    compBtn.onclick = completeBtn;
    compBtn.innerText = 'Complete';
    compBtn.classList.add('complete');

    // task name container
    let taskName = document.createElement('span');
    taskName.classList.add('task-name');
    taskName.innerText = document.getElementById('new-task').value;

    div.append(taskName);
    div.append(delBtn);
    div.append(compBtn);
    taskList.append(div);
    div.setAttribute('id', div.parentNode.childNodes.length);
    div.classList.add('task');
    document.getElementById('new-task').value = '';

    // count task
    taskCounter.innerText = ' ' + document.getElementById('task-list').childElementCount;
}
function deleteBtn() {
    this.parentNode.remove();
    taskCounter.innerText = ' ' + document.getElementById('task-list').childElementCount;
}
function completeBtn() {
    completedCounter += 1;
    document.getElementById('completed-counter-span').innerText = completedCounter;
    this.parentNode.remove();
    taskCounter.innerText = ' ' + document.getElementById('task-list').childElementCount;
}