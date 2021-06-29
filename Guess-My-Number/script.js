'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', () => {
    let guessNum = document.querySelector('.guess').value;

    if (!guessNum) {

        document.querySelector('.message').textContent = 'enter valid number';
    } else if (number == guessNum) {


        document.querySelector('.message').textContent = 'Correct Number ! ';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '25rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


    } else if (score > 1) {

        if (number > guessNum) {

            document.querySelector('.score').textContent = --score;
            document.querySelector('.message').textContent = 'Too Small';
        } else {
            document.querySelector('.score').textContent = --score;
            document.querySelector('.message').textContent = 'Too Big';
        }
    }
    else {
        document.querySelector('.score').textContent = --score;
        document.querySelector('.message').textContent = 'You lost the game .. ';
    }

}
);


document.querySelector('.again').addEventListener('click', () => {

    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';


});
