'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');
const scores = [0, 0];
let currentscore0 = 0;
let currentPlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentscore0 = 0;
  playerActive0.classList.toggle('player--active');
  playerActive1.classList.toggle('player--active');
};
let playerState = true;

btnRoll.addEventListener('click', () => {
  if (playerState) {
    const random = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;
    if (random !== 1) {
      currentscore0 += random;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentscore0;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playerState) {
    scores[currentPlayer] += currentscore0;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 20) {
      playerState = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  scores[0] = 0;
  scores[1] = 0;
  currentPlayer = 0;
  currentscore0 = 0;
  playerState = true;
  diceEl.classList.remove('hidden');
  current0.textContent = 0;
  current1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
});
