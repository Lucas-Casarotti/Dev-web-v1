// function que adiciona tarefa
function addTask(){
    const taskTitle = document.getElementById("task-title").value;

    if(taskTitle){

        // clona template
        const template = document.querySelector(".template");

        // clona o html em uma nova variável
        const newTask = template.cloneNode(true);

        // adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.getElementById("task-list");

        // adicionar elemento na lista
        list.appendChild(newTask);

        // adicionar o evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })

        // limpando o texto
        document.querySelector("#task-title").value = "";
    }
}

// function de remover a tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

// function de completar a tarefa
function completeTask(task){
    
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

// evento de adicionar tarefa
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function(e){

    // faz com que não seja enviado nada ao servidor, ou seja, apenas realize as alterações no front-end.
    e.preventDefault();

    addTask();
})
