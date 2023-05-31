// Initialize variables
var money = 0;
var products = 0;
var workers = 0;
var resolution = 100;

// Get HTML elements
var moneyElement = document.getElementById("money");
var productsElement = document.getElementById("products");
var workersElement = document.getElementById("workers");
var produceButton = document.getElementById("produceButton");
var sellButton = document.getElementById("sellButton");
var hireButton = document.getElementById("hireButton");
var fullscreenButton = document.getElementById("fullscreenButton");
var exportButton = document.getElementById("exportButton");
var importButton = document.getElementById("importButton");
var resolutionSlider = document.getElementById("resolutionSlider");

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

exportButton.addEventListener("click", function() {
  exportSave();
});

importButton.addEventListener("change", function(evt) {
  importSave(evt.target.files[0]);
});

resolutionSlider.addEventListener("input", function() {
  resolution = resolutionSlider.value;
  updateDisplay();
});

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
  document.body.style.zoom = resolution + "%";

  // Produce products if there are workers
  if (workers > 0) {
    products += workers;
    updateDisplay();
  }

  // Sell products if there are products
  if (products > 0) {
    products--;
    money++;
    updateDisplay();
  }
}
