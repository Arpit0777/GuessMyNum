'use strict';
const gussedValue = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const val = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const message = document.querySelector('.message');
console.log(secretNumber);
checkButton.addEventListener('click', function clickHandler() {
  document.querySelector('.number').innerText = '?';
  if (score < 1) {
    document.querySelector('.message').innerText = '😒 You Lost';
    return;
  }
  if (!gussedValue.value) {
    document.querySelector('.message').innerText = '⛔ Please Guess a number';
  } else if (gussedValue.value == secretNumber) {
    val.innerText = secretNumber;
    // console.log(typeof gussedValue.value);
    document.querySelector('.message').innerText =
      '🥇 Congratulations u guessed it';
    console.log('guessed it');

    // changing the styling
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (gussedValue.value < secretNumber) {
    document.querySelector('.message').innerText = '📉 too low';
    score--;
    document.querySelector('.score').innerText = score;
  } else if (gussedValue.value > secretNumber) {
    document.querySelector('.message').innerText = '📈 too High';
    score--;
    document.querySelector('.score').innerText = score;
  }
});

const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  message.innerText = 'start guessing...';
  val.innerText = '?';
  gussedValue.value = '';
  document.querySelector('.score').innerText = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(secretNumber);
});
