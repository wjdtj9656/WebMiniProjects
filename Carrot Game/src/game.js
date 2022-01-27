
import {Field, ItemType} from './Field.js';
import * as sound from './sound.js';
export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
})
//builder pattern
export class GameBuilder {
    withGameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    withCarrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    withBugCount(num) {
        this.bugCount =num;
        return this;
    }

    build(){
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        );
    }
}
class Game {
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
                this.stop(Reason.cancel);
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

    
    start(){
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBg();
    }

    stop(reason){
        this.started = false;
        this.stopGameTimer();
        this.hideStartButton();
        sound.playAlert();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(reason);
        
    }
    onFiledClick = (item) =>{
    if(!this.started){
        return;
    }
    if(item === ItemType.carrot){
        this.score++;
        this.updateScoreBoard();
        if(this.score === this.carrotCount){
            this.stop(Reason.win);
        }
    } else if(item === ItemType.bug){
        this.stop(Reason.lose);
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
            this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose);
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