const btn = document.getElementById('button-submit-task')
const inputTask = document.getElementById('task')
const tasksList = document.getElementById('tasks-container')
const main = document.querySelector('main')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    forbidBlankTask(inputTask.value)

    inputTask.value = '';
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
        
        const removeContainer = document.createElement('div')
        const iconMessageContainer = document.createElement('div')
        const warningIcon = document.createElement('i')
        const p = document.createElement('p')
        const closeIcon = document.createElement('i')

        removeContainer.classList.add('remove-warning')
        iconMessageContainer.classList.add('remove-warning-message')
        closeIcon.classList.add('hgi', 'hgi-stroke', 'hgi-rounded', 'hgi-cancel-01')
        warningIcon.classList.add('hgi', 'hgi-stroke', 'hgi-rounded', 'hgi-alert-circle')

        main.appendChild(removeContainer)
        iconMessageContainer.appendChild(warningIcon)
        iconMessageContainer.appendChild(document.createTextNode('O item foi removido da lista'))
        removeContainer.appendChild(iconMessageContainer)
        removeContainer.appendChild(closeIcon)

        closeIcon.addEventListener('click', (e) => closeIcon.parentElement.remove())
    })
}
/*
    <div class="remove-warning">
        <div class="remove-warning-message">
            <i class="hgi hgi-stroke hgi-rounded hgi-alert-circle"></i>
            <p>O item foi removido da lista</p>
        </div>
        <i class="hgi hgi-stroke hgi-rounded hgi-cancel-01"></i>
    </div>
*/