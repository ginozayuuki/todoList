'use strict';

const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const compList = document.getElementsByClassName('complet_task')[0];
const item = document.getElementsByClassName('todo_list_item')[0];
const taskValue = document.getElementsByClassName('value')[0];
let stockList = new Array();
let compTask = new Array();
if(stockList.length!=0){
    showList();
}

//追加ボタンを押したときの処理
taskSubmit.addEventListener('click',function(){
    let todo = taskValue.value;
    if(todo.length>0){
        stockList.push(todo);
        showList()
        alert("追加しました");
        todo="";
    }else{
        alert("リストを入力してください")
    }
});


//リストを表示させる時の処理
function showList(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    while(compList.firstChild){
        compList.removeChild(compList.firstChild);
    }
    for(let i = 0; i < stockList.length; i++){
        let className = "List";
        const taskLi = document.createElement('li');
        taskLi.innerText = stockList[i];
        taskLi.classList.add(className);
        
        //削除ボタンを作成
        const delButton = document.createElement('Button')
        delButton.classList.add('Del_Button');
        delButton.id = "Del";
        delButton.textContent = '削除';
        delButton.addEventListener('click', function(){
            const check = window.confirm('削除しますか?');
            
            if(check){
                stockList.splice(i,1);
                showList();
            }

        })

        //編集ボタンを作成
        const editButton = document.createElement('button');
        editButton.classList.add('Edit_Button');
        editButton.textContent = '編集';
        editButton.addEventListener('click', function(){
            let task = stockList[i];
            this.parentElement.remove();
            const text = document.createElement('input');
            text.type = 'text'
            text.classList.add('task');
            text.value = task;
            const button = document.createElement('button');
            button.classList.add('Edit_Button');
            button.textContent = '編集';

            taskList.appendChild(text);
            taskList.appendChild(button);

            button.addEventListener('click', function(){
                const value = document.getElementsByClassName('task')[0];
                let item = value.value;
                stockList[i] = item;
                showList();
            });
        });

        //タスク完了ボタンを作成
        const compButton = document.createElement('button');
        compButton.classList.add('comp_Button');
        compButton.textContent = '完了';
        compButton.addEventListener('click', function(){
            compTask.push(stockList[i]);
            stockList.splice(i,1);

            showList();
        });


        taskLi.appendChild(editButton);
        taskLi.appendChild(delButton);
        taskLi.appendChild(compButton);
        taskList.appendChild(taskLi);


        taskValue.value = "";
    }

    for(let j = 0; j < compTask.length; j++){
        let className = "List";
        const taskLi = document.createElement('li');
        taskLi.innerText = compTask[j];
        taskLi.classList.add(className);
        
        //削除ボタンを作成
        const delButton = document.createElement('Button')
        delButton.classList.add('Del_Button');
        delButton.id = "Del";
        delButton.textContent = '削除';
        delButton.addEventListener('click', function(){
            const check = window.confirm('削除しますか?');
            
            if(check){
                compTask.splice(j,1);
                showList();
            }
        });

        //タスク完了ボタンを作成
        const compButton = document.createElement('button');
        compButton.classList.add('comp_Button');
        compButton.textContent = '未完';
        compButton.addEventListener('click', function(){
            stockList.push(compTask[j]);
            compTask.splice(j,1);

            showList();
        });

        taskLi.appendChild(delButton);
        taskLi.appendChild(compButton);
        compList.appendChild(taskLi);


        taskValue.value = "";
    }
}


