const setBudgetBtn = document.getElementById("budget-btn")
const setBudgetInput = document.getElementById("budget-input")

const tittleExpense = document.getElementById("tittle-expense-input")
const costExpense = document.getElementById("cost-expense-input")
const checkBtn = document.getElementById("check-btn")

const totalBudget = document.getElementById("total-budget")
const totalExpense = document.getElementById("total-expenses")
const totalBalance = document.getElementById("total-balance")

const expensesContainer = document.getElementById("expenses-container")

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
            <span>  ${cost} </span>
            <div class="btn-container">
                <i id="edit-btn" class="bi bi-pencil-square"></i>
                <i id="delete-btn" class="bi bi-trash"></i>
            </div>
        </div>
    `
    tittleExpense.value = ""
    costExpense.value = ""
    
    updateStats(cost)
    }
    
}

const deleteExpense = (target) => { 
    let toDiscount = target.parentNode.previousSibling.previousSibling.innerText
    expenses = expenses - Number(toDiscount)
    balance = balance + Number(toDiscount)

    totalBalance.innerText = "$ " + balance
    totalExpense.innerText = "$ " + expenses
}
const editExpense = (target) => { 
    let costToEdit = Number(target.parentNode.previousSibling.previousSibling.innerText)
    costExpense.value = costToEdit
    let tittleToEdit = target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    tittleExpense.value = tittleToEdit

    expenses -= costToEdit
    balance += costToEdit
    totalBalance.innerText = "$ " + balance 
    totalExpense.innerText = "$ " + expenses

}

setBudgetBtn.addEventListener("click", setBudget)
checkBtn.addEventListener("click", checkingBalance)
expensesContainer.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.id == "delete-btn") {
        deleteExpense(e.target)
        e.target.parentNode.parentNode.remove()
    }
    if (e.target.id == "edit-btn") {
        editExpense(e.target)
        e.target.parentNode.parentNode.remove()
    }
})