const moves = document.getElementById('moves-count');
const time = document.getElementById('time');
const stopButton = document.getElementById('stop');
const gameContainer = document.getElementById('game-container');


const controls = document.querySelector('.controls-container');
const result = document.getElementById('result');
const startButton = document.getElementById('start');

let cards;
let interval;
let firstCard = false;
let secondCard = false;
let firstCardValue;
const emojis = ["😘", "😘", "❤️", "❤️", "🦋", "🦋", "😁", "😁", "😈", "😈", "👻", "👻", "🐸", "🐸", "🌸", "🌸"];


window.addEventListener('load', renderLayout(emojis));
gameContainer.addEventListener('click', handelGame);

function shuffle(array) {
  return array.sort(() => (Math.random() > 0.5) ? 1 : -1);
}

function renderLayout(array) {
  const cards = shuffle(array);
  gameContainer.innerHTML = cards.map((item) => (
    `<div class="item">${item}</div>`
  )).join(' ');
}

function handelGame(event) {
  if ((event.target.classList.contains('item')) && (!event.target.classList.contains('boxMatch'))) {
    event.target.classList.add('boxOpen');
    movesCounter();
    setTimeout(function () {
      if (document.querySelectorAll('.boxOpen').length > 1) {
        if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
          document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
          document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

          wonCount += 1;

          if (document.querySelectorAll('.boxMatch').length == emojis.length) {
            result.innerHTML = `<h2>You Won</h2>
          <h4>Moves: ${movesCount}</h4>`;
            stopGame();
          }
        } else {
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
        }
      }
    }, 800)
  }
}

let seconds = 0;
let minutes = 0;

let movesCount = 0;
let wonCount = 0;

const handelTime = () => {
  seconds += 1;
  if (seconds > 60) {
    minutes += 1;
    seconds = 0;
  }

  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  time.innerHTML = `<span>Time: </span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves: </span>${movesCount}`
};

const stopGame = () => {
  controls.classList.remove("state_close");
  stopButton.classList.add("state_close");
  startButton.classList.remove("state_close");
  clearInterval(interval);
}

startButton.addEventListener('click', () => {
  renderLayout(emojis);
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  controls.classList.add("state_close");
  stopButton.classList.remove("state_close");
  startButton.classList.add("state_close");
  interval = setInterval(handelTime, 1000);
  moves.innerHTML = `<span>Moves: </span> ${movesCount}`;
  time.innerHTML = `<span>Time: </span>00:00`;
  result.innerHTML = "";
});

stopButton.addEventListener('click', stopGame);

function saveUsersData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsersData(key) {
  return JSON.parse(localStorage.getItem(key));
}
