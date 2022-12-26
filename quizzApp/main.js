const questionElement = document.querySelector("#question");
const listOptionsElement = document.querySelector("#list-options")
const hitsElement = document.querySelector("#hits")
const checkBtn = document.querySelector("#check-btn")
const resetBtn = document.querySelector("#reset-btn")
const correctAnswerElement = document.querySelector("#correct-answer")
const answerDiv = document.querySelector("#answer-div")
let correctAnswer
let questionCounter = 0
let score = 0
let totalQuestions = 2

function eventListeners(){
    checkBtn.addEventListener("click",checkingAnswer)
    resetBtn.addEventListener("click", resetGame)
}

document.addEventListener("DOMContentLoaded", ()=> {
    hitsElement.innerText = score + "/" + totalQuestions 
    fetching()
    eventListeners()
   
})



async function fetching() {
    const ApiUrl = "https://opentdb.com/api.php?amount=10"
    const result = await fetch(ApiUrl)
    const data = await result.json()
    
    renderQuestion(data.results[0])
}


function renderQuestion(data) {
    correctAnswer = data.correct_answer
    let incorrectAnswers = data.incorrect_answers
    let question = data.question
    let totalOptions = incorrectAnswers
    totalOptions.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, correctAnswer)

    questionElement.innerText =  question;
    correctAnswerElement.textContent = ""
    questionElement.style.display = "block"
    listOptionsElement.innerHTML =  `
        ${totalOptions.map((option,index) =>`
            <li> <span> ${index + 1}.</span> <small>${option}</small> </li>
            `).join("")
        }`
        selecting()
}

function selecting(){
    listOptionsElement.querySelectorAll("li").forEach(option => {
        option.addEventListener("click", () => {
            if (listOptionsElement.querySelector(".selected")) {
                const selected = listOptionsElement.querySelector(".selected")
                selected.classList.remove("selected")
            }else{
                option.classList.add("selected")
            }
        })
    })
}

function checkingAnswer () {

    if (listOptionsElement.querySelector(".selected")) {
        let selected = listOptionsElement.querySelector(".selected small").textContent
        if (selected == correctAnswer) {
            score++
            hitsElement.innerText = score + "/" + totalQuestions 
            correctAnswerElement.innerText = "Correct!!"
            answerDiv.style.display = "block"
        }else{
            correctAnswerElement.innerText = "Try Again :("
            answerDiv.style.display = "block"
        }
        
        checkCount()
    }else{
        correctAnswerElement.innerText = "Please Select An Option :( "
        answerDiv.style.display = "block"
    }
}

function checkCount() {
    questionCounter++
    if(questionCounter == totalQuestions){
        console.log("game has over")
        correctAnswerElement.innerText = "Game Over. Thanks for Play."
        correctAnswerElement.style.display = "block"
        listOptionsElement.style.display = "none"
        questionElement.style.display = "none"
        resetBtn.style.display = "inline-block"
        checkBtn.style.display = "none"
    }else{
        
        setTimeout(fetching, 500)
    }
}

function resetGame(){
    questionCounter = 0
    score = 0
    hitsElement.innerText = score + "/" + totalQuestions 
    
    correctAnswerElement.textContent = ""
    resetBtn.style.display = "none"
    
    checkBtn.style.display = "inline-block"
    listOptionsElement.style.display = "block"
    renderQuestion()
}
        



