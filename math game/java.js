//selectam elementele html

const scoreDisplay =document.getElementById("score");
const problemDiplay =document.getElementById("problem");
const playerInput =document.getElementById("result");

let gameScore=0;
let a, b;
let gameLevel=10;

function getRandomNr(level) {
    return Math.floor(Math.random() *level)+1
}

function newProblem(level) {
    a = getRandomNr(level);
    b=  getRandomNr(level);

    problemDiplay.style.color= "black";

    return a + "+" + b 
}

function NewGame(level) {
    //setam valorile initiale
    gameScore=0;
    gameLevel=level;
    newProblem(level);

    //Afisam in html
    scoreDisplay.textContent= gameScore;
    problemDiplay.textContent= newProblem(level);
}
// Verificarea rezultatului

function verifyResult() {
    const sumeLenght=(a + b).toString().length;

    if (playerInput.value == a + b) {
        gameScore++;

        scoreDisplay.textContent=gameScore;
        problemDiplay.textContent= newProblem(gameLevel);
        playerInput.value="";
    }
    else if (playerInput.value.length== sumeLenght) {
        problemDiplay.style.color="red";
    }
}

playerInput.addEventListener("input", verifyResult);
NewGame(gameLevel)