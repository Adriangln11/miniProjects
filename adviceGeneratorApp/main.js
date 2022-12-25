const adviceIdElemet = document.getElementById("advice-id")
const adviceElement = document.getElementById("advice")
const dice = document.getElementById("dice-btn")
let url = "https://api.adviceslip.com/advice"
let id
let advice
const fetching = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        id = data.slip.id
        advice = data.slip.advice
        adviceIdElemet.innerText = "Advice  #" + id
        adviceElement.innerText = `\"${advice}\" `
    })}

dice.addEventListener("click", function(e) {
    fetching(url)
   
})