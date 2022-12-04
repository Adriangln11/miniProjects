//GUARDAR EL VALOR  DEL EL INPUT (TAREA)
//REINICIAR EL INPUT
//AGREGAR TAREA EN #SECTIOSHOW 
//   


const newTask = document.querySelector("#newTask")
const buttonAdd = document.querySelector("#buttonAdd")
const tasksContainer = document.querySelector("#sectionShow")

let idCounter = 0

buttonAdd.addEventListener("click", e => {
    e.preventDefault()
    showTask(newTask.value)
    newTask.value = ""
})

const showTask = (task) => {
    idCounter++
    tasksContainer.innerHTML += `
        <div class="taskNode" id="${idCounter}" > 
            <input type="checkbox">
            ${task} 
            
            <button class="buttonDelete" id="button${idCounter}">-</button>
            
        </div>
    `
}
tasksContainer.addEventListener("click", e => {
    if(e.target.nodeName == "BUTTON"){
        deleteTask(e.target.parentNode)
    }
})

const deleteTask = (node) => {
    node.remove()
}
