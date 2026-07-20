const btn = document.getElementById('button-submit-task')
const inputTask = document.getElementById('task')
const tasksList = document.getElementById('tasks-container')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    tasksList.appendChild(addTask(inputTask.value))
})

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

    li.appendChild(label)
    li.appendChild(i)

    return li
}
/*
<li>
    <label class="custom-checkbox">
        <input type="checkbox" />
        <span></span>Coisa
    </label> 
    
    <i class="hgi hgi-stroke hgi-rounded hgi-delete-02"></i>
</li>
 */