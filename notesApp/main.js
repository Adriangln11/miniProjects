const addBtn = document.getElementById("add-btn")
const deleteBtns = document.querySelectorAll("#delete-btn")
const notesContainerElement = document.getElementById("notes-container")
const inputElement = document.getElementById("input")

// function eventListeners(){

// }

// document.addEventListener("DOMContentLoaded", eventListeners)



addBtn.addEventListener("click", renderNote)

notesContainerElement.addEventListener("click", deleteNote)

function renderNote(e) {
    if(input.value) {
        let newNote = input.value
        notesContainerElement.innerHTML += `
        <div class="note">
            <p> ${newNote} </p>
            <button class="btn delete-btn" id="delete-btn">Delete</button>
        </div>
        `
        input.value = ""
    }
}

function deleteNote(e) {
    if (e.target.id == "delete-btn") {
        e.target.parentNode.remove()
    }
}