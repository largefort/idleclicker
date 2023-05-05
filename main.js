let money = 0;
let clickValue = 1;
let autoClickers = 0;
let autoClickerCost = 50;
let quality = 1;

function loadGame() {
  const savedGame = JSON.parse(localStorage.getItem('save'));
  if (savedGame) {
    money = savedGame.money;
    clickValue = savedGame.clickValue;
    autoClickers = savedGame.autoClickers;
    autoClickerCost = savedGame.autoClickerCost;
    quality = savedGame.quality;
  }
}
