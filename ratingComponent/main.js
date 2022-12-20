
const app = document.querySelector(".app")
const submit = document.querySelector("#submit")
const overlay = document.querySelector("#overlay")
const rate = document.querySelector("#rate")
const advice = document.querySelector(".advice")
const adviceContainer = document.querySelector(".advice-container")
const closeBtn = document.querySelector(".close-btn")

let value 

app.addEventListener("click", function(e) {
    

    if(e.target.className == "btn") {
        value = e.target.value
    }
})

submit.addEventListener("click", function() {
    if(value == undefined) {
        adviceContainer.style = "display: block"
    }else{
        rate.innerText = `You Selected ${value} of 5`
        overlay.classList.add("show")
    }

   
})
closeBtn.addEventListener("click", function () {
    adviceContainer.style = "display: none"
})