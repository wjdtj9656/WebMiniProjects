'use strict';
import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();

const game = new Game(20,5,5);
game.setGameStopListener((reason) => {
    let message;
    switch(reason){
        case 'cancel':
            message = 'REPLAY ?';
            break;
        case 'win':
            message = "YOU WON !";
            break;
        case 'lose':
            message = "YOU LOSE !";
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})

gameFinishBanner.setClickListener( ()=> {
    game.start();
})

