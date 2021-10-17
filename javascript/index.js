'use strict';

const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

const addTask = task =>{
    //入力したタスクをリストに追加
    const listItem = document.createElement('li');
    listItem.innerText = task;
    taskList.appendChild(listItem);
}

taskSubmit.addEventListener('click', evt =>{
    const task = taskValue.value;
    addTask(task);
    taskValue.value = '';
})

