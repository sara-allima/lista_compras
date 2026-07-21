const btn = document.getElementById('button-submit-task')
const inputTask = document.getElementById('task')
const tasksList = document.getElementById('tasks-container')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    forbidBlankTask(inputTask.value)
})

function forbidBlankTask(taskValue) {
    if(taskValue.length <= 0) {
        alert('Insira o nome da tarefa')
    } else {
        tasksList.appendChild(addTask(inputTask.value))
    }
}

function addTask(taskValue) {
    const li = document.createElement('li')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const span = document.createElement('span')
    const i = document.createElement('i')

    label.classList.add('custom-checkbox')
    input.classList.add('checkbox')
    input.type = 'checkbox'
    i.classList.add('hgi', 'hgi-stroke', 'hgi-rounded', 'hgi-delete-02')

    label.appendChild(input)
    label.appendChild(span)
    label.appendChild(document.createTextNode(taskValue))

    removeTask(i)

    li.appendChild(label)
    li.appendChild(i)

    return li
}

function removeTask(icon) {
    icon.addEventListener('click', (e) => {
        icon.parentElement.remove()
    })
}