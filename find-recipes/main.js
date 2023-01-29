const form = document.getElementById('form');
const input = document.getElementById('input')
const main = document.getElementById('main')
const btnSubmit = document.getElementById('btn-submit')

const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`


const renderRecipes = (meals) => {
    for (let i = 0; i < meals.length; i++){
        let name = meals[i].strMeal
        let img = meals[i].strMealThumb
        let instructions = meals[i].strInstructions

        
        let element = document.createElement('div')

        element.innerHTML = `
        <div class="card m-3">
            <div class="row g-0">
            <div class="col-md-4 p-auto">
                <img src="${img}" class="img-fluid rounded-start" alt="final result of the meal">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h2 class="card-title">${name}</h2>
                    <p class="card-text">${instructions}</p>
                </div>
            </div>
            </div>
        </div>
        `
        main.appendChild(element)

    }
}

const fetchingMeals = (keyword = 'pizza') => {
    fetch(`${URL}${keyword}`)
    .then(response => response.json())
    .then(data => renderRecipes(data.meals))
    .catch(err => main.innerText = 'Meal not found :"(')
}

form.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter') {
        main.innerHTML = ''
        if (input.value == '') false
        fetchingMeals(input.value)
        input.value = ''
    } false
    
})

btnSubmit.addEventListener('click', (e) =>{
    e.preventDefault()
    main.innerHTML = ''
    if (input.value == '') false
    fetchingMeals(input.value)
    input.value = ''
})

