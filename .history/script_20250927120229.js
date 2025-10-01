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
let currentscore0 = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  const random = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  score0El.textContent = random;
  diceEl.src = `dice-${random}.png`;
  if (random !== 1) {
    currentscore0 += random;
    current0.textContent = currentscore0;
  } else {
    switchPlayer;
  }
});

const switchPlayer = () => {
  currentscore0 = 0;
  playerActive0.classList.remove('player--active');
  playerActive1.classList.add('player--active');
  currentscore0 += random;
  current1.textContent = currentscore0;
};
