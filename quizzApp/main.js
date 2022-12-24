const startBtn = document.querySelector("#btn-start")
const questionContainer = document.querySelector(".question-container")
const question = document.querySelector(".question")
const optionContainer = document.querySelector(".options-container")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")

let questionsArr = [
    {
        question:"this is the question",
        options: ["option1", "option2", "option3"],
        answer: 1
    },
    {
        question:"this is another question",
        options: ["option4", "option5", "option6"],
        answer: 1
    },
]
let random = Math.floor(Math.random() * 2)
console.log(random)



const renderQuestion = () => {
    questionContainer.style = "transform: translate(50%, -50%);"
    // question.innerText = questionsArr[random].question
    // option1.textContent = questionsArr[random].options[0]
    // option2.innerText = questionsArr[random].options[1]
    // option3.innerText = questionsArr[random].options[2]
        
    console.log(option1)
}


startBtn.addEventListener("click", renderQuestion)

