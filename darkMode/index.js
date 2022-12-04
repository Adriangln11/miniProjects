const app = document.querySelector("#app")
const body = document.querySelector("body")
const btn = document.querySelector("#btn")

btn.addEventListener("click", e => {
    if(e.target.classList == "light"){
        toDarkMode()        
    }else{
        toLightMode()
    }
})

const toDarkMode = () => {
    btn.className = "dark"

    body.style = "background-color: rgb(0, 37, 86);"
}

const toLightMode = () => {
    btn.className = "light"

    body.style = "background-color: lightsteelblue;"
}
