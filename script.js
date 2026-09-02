const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const btnWrapper = document.createElement("div");
let task = [];
let taskCounter = 1;

function render() {
  taskList.innerHTML = "";

  task.forEach(task => {
    let li = document.createElement("li");
    li.classList.add("task-item");

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent =`task: ${task.text} completed ${task.completed}`;


    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";

    completeBtn.addEventListener("click", ()=>{

      completeTask(task.id)
    }) 

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", ()=>{
        deleteTask(task.id)
    });

    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnWrapper);
    taskList.appendChild(li)

  })


}


function addTask(){
 
  let taskText = taskInput.value.trim();
  
  if(taskText === ""){
    return;
  }

  let newTask = {
    id: taskCounter++,
    text : taskText,
    completed: false
  };

  task.push(newTask);
  taskInput.value = "";
  render()

}

addBtn.addEventListener("click", addTask);

function completeTask(id) {
  let foundTask = task.find((task) => task.id === id);

  if (foundTask) {
    foundTask.completed = !foundTask.completed;
  }

  render();
}


function deleteTask (id){
  task = task.filter((task)=> task.id != id);
  render();
}