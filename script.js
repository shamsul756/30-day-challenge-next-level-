const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("taskInput");

addBtn.addEventListener("click", () => {
   console.log("your click is counted", taskInput.value);
});

taskInput.addEventListener("keydown", (e)=>{
    if(e === "Enter"){
      console.log("EnterPressed", taskInput.value);
    }
   
})
