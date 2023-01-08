const setBudgetBtn = document.getElementById("budget-btn")
const setBudgetInput = document.getElementById("budget-input")

const tittleExpense = document.getElementById("tittle-expense-input")
const costExpense = document.getElementById("cost-expense-input")
const checkBtn = document.getElementById("check-btn")

const totalBudget = document.getElementById("total-budget")
const totalExpense = document.getElementById("total-expenses")
const totalBalance = document.getElementById("total-balance")

const expensesContainer = document.getElementById("expenses-container")
let itemContainers 

let budget = 0
let balance = 0
let expenses = 0

const setBudget = () => {
    let newAmount = Number(setBudgetInput.value)
    budget += newAmount
    balance += newAmount
    totalBudget.innerText = "$ " + budget
    setBudgetInput.value = ""
    totalBalance.innerText = "$ " + balance
}

const updateStats = (discount) => { 
    balance -= discount
    totalBalance.innerText = "$ " + balance
    expenses = expenses + Number(discount)
    totalExpense.innerText = "$ " + expenses
}

const checkingBalance = () => {
    if (tittleExpense.value == "" || costExpense.value == "") {
        alert("This Field is Required")
    }else{ 
    let tittle = tittleExpense.value
    let cost = costExpense.value
    expensesContainer.innerHTML +=   `
        <div class="item-container">
            <p> ${tittle} </p>
            <span> $ ${cost} </span>
            <div>
                <a href="#" id="edit-btn">Edit</a>
                <a href="#" id="delete-btn">Delete</a>
            </div>
        </div>
    `
    itemContainers = document.querySelectorAll(".item-container")
    console.log(itemContainers)
    tittleExpense.value = ""
    costExpense.value = ""
    
    updateStats(cost)
    }
    
}

setBudgetBtn.addEventListener("click", setBudget)
checkBtn.addEventListener("click", checkingBalance)
itemContainers.forEach(item => {
    item.addEventListener("click", () => console.log(item))
});
