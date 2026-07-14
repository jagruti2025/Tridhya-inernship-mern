
const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

type Task = {
    id: string, 
    title: string,
    completed: boolean,
    createdAt: Date
}

const tasks:Task[] = loadTaskfunction();
tasks.forEach(addListItem);


form?.addEventListener("submit",e =>{
    e.preventDefault()

    if(input?.value == "" || input?.value == null) return

    const newTask: Task = {
        id: crypto.randomUUID(),
        title: input?.value,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(newTask);
    addListItem(newTask);
    saveTask();
    input.value = "";
});

function addListItem(task: Task){
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const titleSpan = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    checkbox.type = "checkbox"
    checkbox.checked = task.completed;

     checkbox.addEventListener("change", ()=> {
        task.completed = checkbox.checked;
        saveTask();
    });
    
    titleSpan.textContent = task.title;

    label.append(checkbox, titleSpan);

    //edit button
    editBtn.textContent = "Edit";
    editBtn.type = "button";
    editBtn.addEventListener("click", ()=>{
        const newTitle = prompt("Edit task: ", task.title);
        if(newTitle == null || newTitle.trim() === "") return;

        task.title = newTitle.trim();
        titleSpan.textContent = task.title;
        saveTask();
    });

    //delete button
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.addEventListener("click", ()=>{
        const index = tasks.lastIndexOf(task);
        if(index !== -1) tasks.splice(index, 1);
        item.remove();
        saveTask();
    })
    item.append(label, editBtn, deleteBtn);
    list?.append(item);
   
}

function saveTask(){
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}

function loadTaskfunction(): Task[]{
    const taskJSON = localStorage.getItem("Tasks");
    if(taskJSON == null) return []
    return JSON.parse(taskJSON);
}