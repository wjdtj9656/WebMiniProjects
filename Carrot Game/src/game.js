import * as sound from './sound.js';
import Field from './Field.js';
export default class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onFiledClick);

        this.gameBtn = document.querySelector('.game__button');
        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn.addEventListener('click', () => {
            if(this.started){
                this.stop();
            } else {
                this.start();
            }
        });
        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }
    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
    stop(){
        this.started = false;
        this.stopGameTimer();
        this.hideStartButton();
        sound.playAlert();
        sound.stopBackground();
        this.onGameStop && this.onGameStop('cancel');
    }
    
    start(){
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBg();
    }

    finish(win) {
        this.started = false;
        clearInterval(this.timer);
        this.hideStartButton();
        if(win){
            sound.playWin();
        }
        else{
            sound.playBugpull();
        }
        sound.stopBackground();
        this.onGameStop && this.onGameStop(win? 'win' : 'lose');
    }

    onFiledClick = (item) =>{
    if(!this.started){
        return;
    }
    if(item === 'carrot'){
        this.score++;
        this.updateScoreBoard();
        if(this.score === this.carrotCount){
            this.finish(true);
        }
    } else if(item === 'bug'){
        this.finish(false);
    }
}

    showTimerAndScore() {
    this.gameTimer.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
}

    showStopButton(){
    const icon = this.gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameBtn.style.visibility = 'visible';
}

    startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
        if(remainingTimeSec <= 0){
            clearInterval(this.timer);
            this.finish(this.carrotCount === this.score);
            return;
        }
        this.updateTimerText(--remainingTimeSec);
    }, 1000);
}
    updateTimerText(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
}
    stopGameTimer() {
    clearInterval(this.timer);
}
    hideStartButton() {
        this.gameBtn.style.visibility = 'hidden';
}
    initGame() {
        this.score = 0;
        this.gameScore.innerText = this.carrotCount;
        this.gameField.init();
}

updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score;
}

}