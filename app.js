var aleatoryNumber = Math.floor(Math.random() * 100) + 1;
var answer = document.querySelector(".answer");
var count = document.querySelector(".count");
var number = document.getElementById("number");
var space = document.getElementById("last-hint");
var button = document.querySelector(".hintBtn");
var guessCount = 0;

number.focus();

function hint() {
    space.innerHTML += ` ${number.value} `;
    number.focus();

    validation();

    number.value = "";
}

function validation() {
    if (number.value == aleatoryNumber) {
        endGame();
    } else if (number.value < aleatoryNumber) {
        answer.innerHTML = `${number.value} é menor. Digite um número maior.`;
        answer.style.backgroundColor = "red";
        guessCount += 1;
        count.innerHTML = `Jogada número: ${guessCount}`;
        count.style.backgroundColor = "blue";
        guess();
    } else if (number.value > aleatoryNumber) {
        answer.innerHTML = `${number.value} é maior. Digite um número menor.`;
        answer.style.backgroundColor = "red";
        guessCount += 1;
        count.innerHTML = `Jogada número: ${guessCount}`;
        count.style.backgroundColor = "blue";
        guess();
    }
}

function guess() {
    if (guessCount === 10) {
        gameError();
    }
}

function gameError() {
    answer.innerHTML = `Suas chances acabaram!`;
    answer.style.backgroundColor = "red";
    count.innerHTML = `Tente de novo!`;
    count.style.backgroundColor = "blue";
    number.value = "";
    button.disabled = true;
}

function endGame() {
    answer.innerHTML = `Acertou`;
    answer.style.backgroundColor = "green";
    number.value = "";
    button.disabled = true;
}

function newGame() {
    count.innerHTML = "";
    answer.innerHTML = "";
    guessCount = 0;
    space.innerHTML = "";
    aleatoryNumber = Math.floor(Math.random() * 100) + 1;
    button.disabled = false;
}