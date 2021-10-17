'use strict';

const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

const addTask = task =>{
    const listItem = document.createElement('li');
    listItem.innerText = task;


    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.addEventListener('click' , () =>{
        removeTask(removeButton);
    });

    listItem.append(removeButton);

    taskList.appendChild(listItem);

}

taskSubmit.addEventListener('click', evt =>{
    const task = taskValue.value;
    addTask(task);
    taskValue.value = '';
})

