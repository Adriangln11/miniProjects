let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(() => { return Math.random() - 0.5 });

let showMoves = document.getElementById("moves");
let showHits = document.getElementById("hits");
let showTimer = document.getElementById("time");


let visibleCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hits = 0;
let tempo = false;
let initialTimer = 30;
let timer = 60;
let countdown = null;

const counting = () => {
    countdown = setInterval(() => {
        timer--;
        showTimer.innerHTML = `Time: ${timer}s left` ;
        if (timer === 0) {
            clearInterval(countdown);
            cardBloquer();
        }
    }, 1000);
}

const cardBloquer = () => {
    for (let i = 0; i <= 15; i++) {
        
        let blockedCard = document.getElementById(i);
        blockedCard.innerHTML = numbers[i]
        // `<img src="./assets/${numbers[i]}.png" alt=""/>`;
        blockedCard.disabled = true;
    }
}

const show = (id) => {

    if (tempo === false) {
        counting();
        tempo = true;
    }

    visibleCards++;
    console.log(visibleCards);
    if(visibleCards === 1){
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult
        // `<img src="./assets/${firstResult}.png" alt=""/>`;

        card1.disabled = true;
    }else if(visibleCards === 2){

        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult
        // `<img src="./assets/${secondResult}.png" alt=""/>`;

        card2.disabled = true;
        
        moves++;
        showMoves.innerHTML = `Movements: ${moves}`;

        if (firstResult == secondResult) {
            visibleCards = 0;
            hits++;
            showHits.innerHTML = `Hits: ${hits}`;

            if (hits == 8) {

                clearInterval(countdown);
                showHits.innerHTML = `Hits: ${hits}  `;
                showTimer.innerHTML = `Great, you did it!!`;
                showMoves.innerHTML = `Movements: ${moves} `;
            }
        }else{
            setTimeout(() =>{
                card1.innerHTML = "";
                card2.innerHTML = "";
                card1.disabled = false;
                card2.disabled = false;
                visibleCards = 0;
            }, 800)
        }
    }
};