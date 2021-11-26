'use strict';
import PopUp from './popup.js';
import Field from './Field.js';
import * as sound from './sound.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 7;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener( ()=> {
    startGame();
})
const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onFiledClick);
function onFiledClick(item){
    if(!started){
        return;
    }
    if(item === 'carrot'){
        score++;
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    } else if(item === 'bug'){
        stopGameTimer();
        finishGame(false);
    }
}

gameBtn.addEventListener('click', () => {
    if(started){
        stopGame();
    } else {
        startGame();
    }
});
function stopGame(){
    started = false;
    stopGameTimer();
    hideStartButton();
    gameFinishBanner.showWithText("REPLAY ?");
    sound.playAlert();
    sound.stopBackground();
}

function startGame(){
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    sound.playBg();
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
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
}



function finishGame(win) {
    started = false;
    clearInterval(timer);
    hideStartButton();
    if(win){
        sound.playWin();
    }
    else{
        sound.playBugpull();
    }
    sound.stopBackground();
    gameFinishBanner.showWithText(win ? "YOU WIN" : "YOU LOSE");
}

function updateScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;
}




