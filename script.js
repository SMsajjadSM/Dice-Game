'use strict';

//عمومی
let imgDice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
let currentScore, activePlayer, score, playing;
//بازیکن اول
const player1Sec = document.querySelector('.player--0');
let scoreCurrentPlayer1 = document.querySelector('#current--0');
let scorePlayer1 = document.querySelector('#score--0');

//بازیکن دوم
const player2Sec = document.querySelector('.player--1');
let scorecurrentPlayer2 = document.querySelector('#current--1');
let scorePlayer2 = document.querySelector('#score--1');
////////////////////

function init() {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;
  scoreCurrentPlayer1.textContent = 0;
  scorecurrentPlayer2.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  imgDice.classList.add('hidden');
  player1Sec.classList.remove('player--winner');
  player2Sec.classList.remove('player--winner');
  player1Sec.classList.add('player--active');
  player2Sec.classList.remove('player--active');
}
init();

const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Sec.classList.toggle('player--active');
  player2Sec.classList.toggle('player--active');
};

//ساخت عدد رندوم و عکس
let randomNumber = btnRoll.addEventListener('click', () => {
  if (playing) {
    randomNumber = Math.trunc(Math.random() * 6 + 1);
    imgDice.src = `dice-${randomNumber}.png`;

    if (randomNumber != 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    score[activePlayer] += currentScore;
    currentScore = 0;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      imgDice.classList.add('hidden');
    }
    switchplayer();
  }
});

btnNewGame.addEventListener('click', init);
