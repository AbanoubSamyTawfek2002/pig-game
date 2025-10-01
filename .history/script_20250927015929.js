'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  const random = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  score0El.textContent = random;
  diceEl.src = `dice-${random}.png`;
});
