let addbtn=document.getElementById('addbtn');
let new_task=document.getElementById('new-task');

let todolist=document.getElementById('incomplete-tasks');
let donelist=document.getElementById('completed-tasks');

addbtn.addEventListener('click',function(){
    let input_text=new_task.value;
    //console.log(inputtext);

    let checkbox=document.createElement('input');
    checkbox.type='checkbox';

    let label=document.createElement('label');
    label.innerText=input_text;

    let editBtn=document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText="Edit";

    let deleteBtn=document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText="Delete";

    //input type textbox
    let inputtext=document.createElement('input');
    inputtext.type="text";

    let li=document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(inputtext);//hide input box
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todolist.appendChild(li);
    new_task.value='';


    checkbox.onchange=change;
    editBtn.onclick=edit;
    deleteBtn.onclick=deletetask;

})

function change(){
    if(this.checked){
        let li=this.parentNode;
        let ul=this.parentNode.parentNode;
        ul.removeChild(li);

        donelist.appendChild(li);
    }
    else if(!this.checked){
        let li=this.parentNode;
        let ul=this.parentNode.parentNode;
        ul.removeChild(li);

        todolist.appendChild(li);
    }
}

function edit(){
    let li=this.parentNode;
    if(!li.classList.contains('editMode'))
    {
        li.classList.add('editMode');

        let label=li.querySelector('label');

        let text_element=li.querySelector('input[type=text]');
        text_element.value=label.innerText;
    }
    else{
        li.classList.remove('editMode');
        let label=li.querySelector('label');

        let text_element=li.querySelector('input[type=text]');
        label.innerText=text_element.value;
    }
}

function deletetask()
{
    let li=this.parentNode;
    let ul=this.parentNode.parentNode;
    ul.removeChild(li);
}

let checkboxes_todo=document.querySelectorAll('input[type=text]');
console.log(checkboxes_todo);
for(let i=0;i<checkboxes_todo.length;i++){
    checkboxes_todo[i].onchange=change;
}

let checkboxes_edit=document.querySelectorAll('button.edit');
console.log(checkboxes_edit);
for(let i=0;i<checkboxes_edit.length;i++){
    checkboxes_edit[i].onclick=edit;
}

let checkboxes_delete=document.querySelectorAll('button.delete');
console.log(checkboxes_delete);
for(let i=0;i<checkboxes_delete.length;i++){
    checkboxes_delete[i].onclick=deletetask;
}

