
// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent = '🎊 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);


// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector('.message').textContent = '⛔ No Number';
//     }
// });

// document.querySelector('.message').textContent = "Hello"
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let topScore = 0;
console.log(randomNumber);

function generateRand() {
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    return randomNumber;
}

function wrongAnswer(text) {
    document.querySelector('.message').textContent = `${text}`;
    if (score <= 0) {
        score = 0;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.message').textContent = "You lose";
    }
    else
        score--;
    document.querySelector('.score').textContent = score;
}
function check() {
    document.querySelector('.check').addEventListener('click', () => {
        let userGuessedNum = parseInt(document.querySelector('.guess').value);
        if (!userGuessedNum) {
            document.querySelector('.message').textContent = 'Please enter a number';
        } else if (userGuessedNum === randomNumber) {
            document.querySelector('.message').textContent = 'Good Job!';
            document.querySelector("body").style.backgroundColor = 'green';
            document.querySelector('.guess').disabled = true;
            document.querySelector('.number').textContent = randomNumber;
            if (score >= 20)
                score = 20;
            else
                score++;
            document.querySelector('.highscore').textContent = topScore < score ? (score >= 20 ? 20 : score) : topScore;
            document.querySelector('.score').textContent = score;
        } else if (userGuessedNum > randomNumber) {
            wrongAnswer("Too High, try again");
        } else if (userGuessedNum < randomNumber) {
            wrongAnswer("Too Low, try again");
        }
    });
}
check();

document.querySelector(".again").addEventListener('click', () => {
    document.querySelector('.guess').disabled = false;
    document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
    document.querySelector('.message').textContent = "Start guessing...";
    randomNumber = generateRand();
    console.log(randomNumber);
    check();
});











