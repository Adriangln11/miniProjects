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
    if (newTask.value == "") {
        newTask.value = "Ingresa una tarea valida"
        setTimeout(() => (
            newTask.value = ""
            ), 1000)
    }else{
    showTask(newTask.value)
    newTask.value = ""}
})

const showTask = (task) => {
    idCounter++
    tasksContainer.innerHTML += `
        <div class="taskNode" id="${idCounter}" > 
            
            ${task} 
            
            <button class="buttonDelete" id="button${idCounter}">Delete</button>
            
        </div>
    `
}
tasksContainer.addEventListener("click", e => {
    if(e.target.nodeName == "BUTTON"){
        e.target.parentNode.remove()
    }
})


