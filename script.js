function addTask() {

    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    li.querySelector("span").onclick = function(){
        this.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);

    input.value="";
}

function deleteTask(button){
    button.parentElement.remove();
}