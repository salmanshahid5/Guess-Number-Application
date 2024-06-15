const guessNumber = Math.ceil(Math.random() * 20);
console.log(guessNumber);

const input = document.querySelector('#input');
const check = document.querySelector('#check');
const display = document.querySelector('#display');
const highScore = document.querySelector('#hs');
const score = document.querySelector('#score');
const paigham = document.querySelector('#paigham');
const body = document.querySelector('body');

function checkHandler() {
    const userinput = +(input.value);
    if (guessNumber == userinput) {
        display.innerHTML = guessNumber;
        paigham.innerHTML = 'oh! "You Won"';
        highScore.innerHTML = guessNumber;
        document.body.style.backgroundColor = "green";
        score.innerHTML = +score.innerHTML + 1;
        input.value = "";
        setInterval(()=>{
            document.body.style.backgroundColor = "black"
        },3000)
    }
    else if (userinput < guessNumber) {
        display.innerHTML = '?';
        paigham.innerHTML = 'Oops, "very Low"';
        score.innerHTML = +score.innerHTML - 1;
        document.body.style.backgroundColor = "red";
        input.value = "";
        setInterval(()=>{
            document.body.style.backgroundColor = "black"
        },3000)
    }
    else
        {
            display.innerHTML = '?';
            paigham.innerHTML = 'Oops, "very High"';
            score.innerHTML = +score.innerHTML - 1;
            document.body.style.backgroundColor = "red";
        };
    }
function Again() {
    display.innerHTML = '?';
    paigham.innerHTML = 'Start guessing . . . ';
    score.innerHTML = '20';
    document.body.style.backgroundColor = "black";
    highScore.innerHTML = '0';
    input.value = '';
}