let money = 0;
let clickValue = 1;
let autoClickers = 0;
let autoClickerCost = 50;
let quality = 1; // default quality level

// Load saved game state from local storage
function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem('idle-money-clicker-save'));
  if (savedGame !== null) {
    money = savedGame.money;
    clickValue = savedGame.clickValue;
    autoClickers = savedGame
