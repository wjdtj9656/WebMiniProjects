const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bug_pull = new Audio('./sound/bug_pull.mp3');
const game_win = new Audio('./sound/game_win.mp3');

export function playCarrot() {
    playSound(carrotSound);
}
export function playAlert() {
    playSound(alertSound);
}
export function playBg() {
    playSound(bgSound);
}
export function playBugpull() {
    playSound(bug_pull);
}
export function playWin() {
    playSound(game_win);
}
export function stopBackground() {
    stopSound(bgSound);
}
function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}
function stopSound(sound){
    sound.pause();
}