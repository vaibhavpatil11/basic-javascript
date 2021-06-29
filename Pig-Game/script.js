'use strict';



let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let playing = true;



score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;



btnRoll.addEventListener('click', () => {

    if (playing) {
        let rollNum = Math.trunc(Math.random() * 6) + 1;

        console.log(rollNum);
        dice.classList.remove('hidden');

        dice.src = `dice-${rollNum}.png`;


        if (rollNum !== 1) {

            currentScore = currentScore + rollNum;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {

            swithcPlayer();

        }
    }
});


btnHold.addEventListener('click', () => {


    if (playing) {
        scores[activePlayer] += currentScore;

        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            playing = false;
            dice.classList.add('hidden');

        } else {
            swithcPlayer();
        }

    }
});

document.querySelector('.btn--new').addEventListener('click', () => {

    dice.classList.add('hidden');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    playing = true;
    scores[0] = 0; scores[1] = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.current--0`).textContent = 0;
    document.querySelector(`.current--1`).textContent = 0;


});



function swithcPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
