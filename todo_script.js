let input = document.getElementById('input');
let inputbtn = document.getElementById('inputbtn');
let todo = document.getElementById('todo');

let todoVals = [];
let html = ``;

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
                <input type="text" class="form-control" aria-label="Text input with radio button" value="${todoVals[0][i]}" disabled>
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
    todo.innerHTML = "";
    todoVals = []
    localStorage.setItem('todos',todoVals)
}
input.addEventListener("keyup", function(event) {
    
    if (event.keyCode === 13) {
      
      event.preventDefault();
      
      document.getElementById("inputbtn").click();
    }
  }); 


