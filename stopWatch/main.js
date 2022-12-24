const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
const  resetBtn = document.querySelector("#resetBtn")
const secondsElement = document.querySelector("#secondsElement")
const milisecondsElement = document.querySelector("#milisecondElement")
const buttons = document.querySelectorAll(".btn")
let seconds = 00
let miliseconds = 00
let interval



const startCounter = () => {
    miliseconds++

    if (miliseconds <= 9) {
        milisecondsElement.innerHTML = 0 + miliseconds
    }
    if (miliseconds > 9) {
        milisecondsElement.innerHTML = miliseconds
    }
    if (miliseconds > 99) {
        
        seconds++
        secondsElement.innerHTML = "0" + seconds
        miliseconds = 0
        milisecondsElement.innerHTML = 0 + miliseconds
        
        
    }
    if(seconds > 9){
        secondsElement.innerHTML = seconds
    }

}



buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        if (e.target.id == "startBtn") {
            clearInterval(interval)
            interval = setInterval(startCounter, 10)
            console.log("startbutton")
        }
        if (e.target.id == "stopBtn") {
            clearInterval(interval)
            console.log("stopBtn")
        }
        if (e.target.id == "resetBtn") {
            seconds = 0
            miliseconds = 0
            secondsElement.innerText = "00"
            milisecondsElement.innerText = "00"
            console.log("resetBtn")
        }
    })
})