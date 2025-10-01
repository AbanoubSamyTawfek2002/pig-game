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

btnRoll.addEventListener('click', () => {
  const random = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${random}.png`;
  if (random !== 1) {
    currentscore0 += random;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentscore0;
  } else {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentscore0 = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentscore0;
  }
});
