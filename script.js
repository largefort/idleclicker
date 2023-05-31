// Initialize variables
var money = 0;
var products = 0;
var workers = 0;

// Get HTML elements
var moneyElement = document.getElementById("money");
var productsElement = document.getElementById("products");
var workersElement = document.getElementById("workers");
var produceButton = document.getElementById("produceButton");
var sellButton = document.getElementById("sellButton");
var hireButton = document.getElementById("hireButton");
var fullscreenButton = document.getElementById("fullscreenButton");

// Add event listeners
produceButton.addEventListener("click", function() {
  if (workers > 0) {
    products++;
    updateDisplay();
  }
});

sellButton.addEventListener("click", function() {
  if (products > 0) {
    products--;
    money++;
    updateDisplay();
  }
});

hireButton.addEventListener("click", function() {
  if (money >= 10) {
    money -= 10;
    workers++;
    updateDisplay();
  }
});

fullscreenButton.addEventListener("click", function() {
  toggleFullscreen();
});

// Export and import save functions
function exportSave() {
  var saveData = JSON.stringify({money: money, products: products, workers: workers});
  var saveFile = new Blob([saveData], {type: "application/json"});
  var saveURL = URL.createObjectURL(saveFile);
  var saveLink = document.createElement("a");
  saveLink.href = saveURL;
  saveLink.download = "game-save.json";
  document.body.appendChild(saveLink);
  saveLink.click();
  document.body.removeChild(saveLink);
  URL.revokeObjectURL(saveURL);
}

function importSave(file) {
  var reader = new FileReader();
  reader.onload = function(event) {
    var saveData = JSON.parse(event.target.result);
    money = saveData.money;
    products = saveData.products;
    workers = saveData.workers;
    updateDisplay();
  };
  reader.readAsText(file);
}

// Toggle fullscreen function
function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

// Force fullscreen function
function forceFullscreen() {
  document.documentElement.requestFullscreen();
}

// Update display function
function updateDisplay() {
  moneyElement.innerText = money;
  productsElement.innerText = products;
  workersElement.innerText = workers;

  // Produce money if there are workers
  if (workers > 0) {
    money += workers;
    updateDisplay();
  }
}
