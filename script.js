const btn = document.getElementById('button-submit-task')
const input = document.getElementById('task')
const tasksList = document.getElementById('tasks-container')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = document.createElement('li')
    newTask.textContent = input.value
    
    tasksContainer.appendChild(newTask)
})
