let input = document.getElementById('input');
let inputbtn = document.getElementById('inputbtn');
let todo = document.getElementById('todo');

let todoVals = [];
let html = ``;


function editTodo(todoId) {
    let a = localStorage.getItem('todos');
    
    
    if (document.getElementById(todoId).firstChild.data == 'Edit') {
        window.m = document.getElementById(`${todoId}d2`).value
        document.getElementById(`${todoId}d2`).disabled = false;
        document.getElementById(`${todoId}d2`).focus()
        
        document.getElementById(todoId).firstChild.data = 'Save';
    }
    
    else{
        document.getElementById(`${todoId}d2`).disabled = true;
        
        
        
        let old = a.indexOf(m)
        n = document.getElementById(`${todoId}d2`).value
        document.getElementById(`${todoId}d2`).value = n
        
        console.log(n.length,n,old)
        let b = a.replace(m,n)
        console.log(b);
        localStorage.setItem('todos',b)
        
        document.getElementById(todoId).firstChild.data = 'Edit';
    }
   
}

window.onload = function() {
    input.focus();
  }

    if (localStorage.getItem('todos')[0] != null && localStorage.getItem('todos')[0] != "") {
        todoVals.push(localStorage.getItem('todos').split(','))
        
        for (let i = 0; i < todoVals[0].length; i++) {
            console.log(i);
            html = `<div class="body container mt-2" id='${todoVals[0][i]}id'>
            <div class="input-group">
                <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" value=""
                        aria-label="Radio button for following text input" id="${todoVals[0][i]}" onClick="deleteToDo(this.id)">
                </div>
                <input type="text" class="form-control" aria-label="Text input with radio button" value="${todoVals[0][i]}" id="${todoVals[0][i]}id2" disabled><button type="button" id="${todoVals[0][i]}i" class="btn btn-primary" onClick="editTodo(this.id)">Edit</button>
            </div>
            </div>`;  
            todo.innerHTML += html;
        }
    
    }


function getToDoVal() {
    let todoVal = input.value;
    if (todoVal != "") {
        
        html = `<div class="body container mt-2" id='${todoVal}id'>
    <div class="input-group">
        <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" value=""
        aria-label="Radio button for following text input" id="${todoVal}" onClick="deleteToDo(this.id)">
        </div>
        <input type="text" class="form-control" aria-label="Text input with radio button" value="${todoVal}" disabled>
        </div>
</div>`;
    todo.innerHTML += html;
    
    todoVals.push(todoVal);
    
    localStorage.setItem(`todos`, todoVals);
    input.value = "";
    location.reload();
    }
    else{
        input.focus();
    }
}

function deleteToDo(todoValue) {
    console.log(todoValue);
    document.getElementById(`${todoValue}id`).style.visibility = "hidden";
    todoVals = todoVals[0].filter(function(item) {
        return item !== todoValue
    })
    localStorage.setItem('todos',todoVals);
    location.reload();
}
function deleteAllToDo(){
    let confirmation = confirm('Do You Want To Delete All Tasks')
    if (confirmation == true) {
        
        todo.innerHTML = "";
        todoVals = []
        localStorage.setItem('todos',todoVals)
    }
}
input.addEventListener("keyup", function(event) {
    
    if (event.keyCode === 13) {
      
      event.preventDefault();
      
      document.getElementById("inputbtn").click();
    }
  }); 
