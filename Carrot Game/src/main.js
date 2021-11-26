'use strict';
import PopUp from './popup.js';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 7;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bug_pull = new Audio('./sound/bug_pull.mp3');
const game_win = new Audio('./sound/game_win.mp3');

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener( ()=> {
    startGame();
})
gameBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    } else {
        startGame();
    }
});
field.addEventListener('click', onFiledClick)

function stopGame(){
    started = false;
    stopGameTimer();
    hideStartButton();
    gameFinishBanner.showWithText("REPLAY ?");
    playSound(alertSound);
    stopSound(bgSound);
}

function startGame(){
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function showStopButton(){
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}
function updateTimerText(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}
function stopGameTimer() {
    clearInterval(timer);
}
function hideStartButton() {
    gameBtn.style.visibility = 'hidden';
}
function initGame() {
    score = 0;
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    console.log(fieldRect);
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFiledClick(event){
    if(!started){
        return;
    }
    const target = event.target;
    if(target.matches('.carrot')){
        target.remove();
        score++;
        playSound(carrotSound);
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    } else if(target.matches('.bug')){
        stopGameTimer();
        finishGame(false);
    }
}

function finishGame(win) {
    started = false;
    clearInterval(timer);
    hideStartButton();
    if(win){
        playSound(game_win);
    }
    else{
        playSound(bgSound);
    }
    stopSound(bgSound);
    gameFinishBanner.showWithText(win ? "YOU WIN" : "YOU LOSE");
}

function updateScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}
function stopSound(sound){
    sound.pause();
}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    for(let i = 0; i<count; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
