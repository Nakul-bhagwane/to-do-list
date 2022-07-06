let add_Btn = document.getElementById("addBtn");
let add_input = document.getElementById("addInput");




add_Btn.addEventListener("click", () => {
    if (add_input.value == "") {
        alert("please write a task")
    }
    else {
        createElement();
        document.querySelector(".alert").remove();
    }
});

createElement = () => {

    let todo_value = add_input.value;

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.innerHTML = `
    <div class="taskText">
   ${todo_value}
</div>

<button class="edit" onclick="editTask(this);">edit</button>
<button class="delet" onclick="deletTask(this)">delet</button>`;

    console.log(todoDiv);
    document.querySelector(".todosBox").appendChild(todoDiv);
    add_input.value = "";
}

editTask = (e) => {

    if (e.textContent == "done") {
        e.textContent = "edit";
        let createdDiv = document.createElement('div');
        createdDiv.className = "taskText"
        createdDiv.textContent = e.previousElementSibling.value;

        e.parentElement.replaceChild(createdDiv, e.previousElementSibling)
    }
    else {

        e.textContent = "done";
        let textValue = e.previousElementSibling.textContent;
        let editInput = document.createElement('input');
        editInput.className = "editInput";
        editInput.type = "text";
        editInput.value = textValue;
        editValue = editInput.value

        e.parentElement.replaceChild(editInput, e.previousElementSibling);
    }
}

deletTask = (e) => {
    e.parentElement.remove();

    if (document.querySelector(".todosBox").children.length == 0) {
        document.querySelector(".todosBox").innerHTML= `<div class="alert">
                                                            <h1>no task added..please add a task</h1>
                                                        </div>`
    }    
}