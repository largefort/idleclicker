// Initialize game state
let money = 0;
let products = 0;
let workers = 0;

// Get DOM elements
const produceButton = document.getElementById("produceButton");
const sellButton = document.getElementById("sellButton");
const hireButton = document.getElementById("hireButton");
const moneyDisplay = document.getElementById("money");
const productsDisplay = document.getElementById("products");
const workersDisplay = document.getElementById("workers");

// Hide buttons until loaded
produceButton.style.display = "none";
sellButton.style.display = "none";
hireButton.style.display = "none";

// Show buttons when loaded
window.addEventListener("load", function() {
    produceButton.style.display = "inline-block";
    sellButton.style.display = "inline-block";
    hireButton.style.display = "inline-block";
});

// Update displays
function updateDisplays() {
    moneyDisplay.innerHTML = `Money: $${money}`;
    productsDisplay.innerHTML = `Products: ${products}`;
    workersDisplay.innerHTML = `Workers: ${workers}`;
}

// Produce a product
produceButton.addEventListener("click", function() {
    if (workers <= 0) {
        products++;
    } else {
        products += workers;
    }
    updateDisplays();
});

// Sell a product
sellButton.addEventListener("click", function() {
    if (products > 0) {
        money += products;
        products--;
        updateDisplays();
    }
});

// Hire a worker
hireButton.addEventListener("click", function() {
    if (money >= 10) {
        money -= 10;
        workers++;
        updateDisplays();
    }
});

// Start worker production and selling
setInterval(function() {
    if (workers > 0) {
        products += workers;
        money += workers;
        updateDisplays();
    }
}, 1000);
