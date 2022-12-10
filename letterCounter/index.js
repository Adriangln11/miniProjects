const app = document.querySelector("#app")
const input = document.querySelector("#input")
const counter = document.querySelector("#counter")
let arr = []

input.addEventListener("keydown", e => {
    if(e.key.length === 1){
        arr.push(e.key)
        counter.innerHTML = 
        `
        <label for="inputText" id="counter">Letter Count: ${arr.length}</label>
        `
    }else if(e.key === "Backspace") {
        arr.pop()
        counter.innerHTML = 
        `
        <label for="inputText" id="counter">Letter Count: ${arr.length}</label>
        `
    }

})


