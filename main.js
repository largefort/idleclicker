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
    autoClickers = savedGame.autoClickers;
    autoClickerCost = savedGame.autoClickerCost;
    quality = savedGame.quality;
    updateUI();
  }
}

// Save game state to local storage
function saveGame() {
  const gameSave = {
    money,
    clickValue,
    autoClickers,
    autoClickerCost,
    quality,
  };
  localStorage.setItem('idle-money-clicker-save', JSON.stringify(gameSave));
}

// Update the UI with the current game state
function updateUI() {
  document.getElementById('money').textContent = money.toFixed(2);
  document.getElementById('click-value').textContent = clickValue.toFixed(2);
  document.getElementById('auto-clickers').textContent = autoClickers;
  document.getElementById('auto-clicker-cost').textContent = autoClickerCost.toFixed(2);
  document.getElementById('quality').value = quality;
}

// Click for money button click handler
document.getElementById('click-for-money').addEventListener('click', () => {
  money += clickValue;
  updateUI();
});

// Buy auto-clicker button click handler
document.getElementById('buy-auto-clicker').addEventListener('click', () => {
  if (money >= autoClickerCost) {
    money -= autoClickerCost;
    autoClickers++;
    autoClickerCost *= 1.5; // increase cost of next auto-clicker
    updateUI();
  }
});

// Quality slider change handler
document.getElementById('quality').addEventListener('change', () => {
  quality = parseFloat(document.getElementById('quality').value);
  updateUI();
});

// Export save button click handler
document.getElementById('export-save').addEventListener('click', () => {
  const gameSave = localStorage.getItem('idle-money-clicker-save');
  const blob = new Blob([gameSave], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'idle-money-clicker-save.json';
  a.click();
  URL.revokeObjectURL(url);
});

// Import save input change handler
document.getElementById('import-save').addEventListener('change', () => {
  const file = document.getElementById('import-save').files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const gameSave = event.target.result;
    localStorage.setItem('idle-money-clicker-save', gameSave);
    loadGame();
  };
  reader.readAsText(file);
});

// Load the game state on page load
loadGame();
