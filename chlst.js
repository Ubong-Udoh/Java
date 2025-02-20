const taskInput = document.getElementById('input');
const createTaskBtn = document.querySelector('.add-btn');
const clearAllTasksBtn = document.querySelector('.clear-btn');
const filterTodoElement = document.getElementById('filter-todos');
const taskContainer = document.querySelector('.task-box');


let todos = []

taskInput.addEventListener('keyup', (e) => {
    const input = e.target.value;
    const newTask = {
        content: input,
        isCompleted: false
    }

    // If Enter key is pressed then add the new task to the todos array
    if(e.keyCode === 13){
        addTask(newTask);
        taskInput.value = '';
    }    
})

const addTask = (task) => {
    todos.push(task);
    // console.log({todos})
    updateScreen();
}

const deleteTask = (index) => {
    console.log(index)
    console.log('todos before slicing >>', todos)
    todos.splice(index, 1);
    console.log('todos after slicing >>', todos)
    updateScreen()
}

const updateScreen = () => {
    taskContainer.innerHTML = '';
    if(todos.length < 1){
        taskContainer.innerHTML = '<h1>No tasks to display</h1>';        
    }else{
        for(let index = 0; index < todos.length; index++){
            // console.log(`todo item at index ${index} >>`, todos[index])
            taskContainer.innerHTML += `
             <li class="task">
                <div class="content">
                    <input type="checkbox">
                    <div class="spans">
                        <span class="text">${todos[index].content}</span>
                        <span class="settings">
                            <button><i class="fa fa-pencil" aria-hidden="true"></i>Edit</button>
                            <button onClick="deleteTask(${index})"><i class="fa fa-trash"></i>Delete</button>
                        </span>
                    </div>
                </div>                
            </li>       
            `
        }
    }    
}

updateScreen();
clearAllTasksBtn.addEventListener('click', () => {
    todos = [];
    updateScreen();
})