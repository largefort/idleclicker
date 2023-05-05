// Initialize variables
var money = 0;
var workers = 0;
var products = 0;
var productValue = 1;
var workerCost = 10;
var workerEfficiencyLevel = 0;
var productValueBonusLevel = 0;
var produce1000ProductsStatus = "Not Started";
var hire10WorkersStatus = "Not Started";
var firstAchievementStatus = "Not Earned";

// Update stats on screen
function updateStats() {
  document.getElementById("money").innerText = money;
  document.getElementById("workers").innerText = workers;
  document.getElementById("products").innerText = products;
  document.getElementById("product-value").innerText = productValue;
}

// Add worker to factory
function hireWorker() {
  if (money >= workerCost) {
    workers++;
    money -= workerCost;
    workerCost = Math.ceil(workerCost * 1.1); // Increase cost for next worker
    updateStats();
  }
}

// Create products using workers
function produce() {
  var efficiency = 1 + workerEfficiencyLevel * 0.1; // Calculate worker efficiency
  products += Math.floor(workers * efficiency);
  updateStats();
}

// Sell products for money
function sellProducts() {
  money += Math.floor(products * productValue * (1 + productValueBonusLevel * 0.1));
  products = 0;
  updateStats();
}

// Buy worker efficiency upgrade
function buyWorkerEfficiency() {
  var cost = Math.ceil(10 * Math.pow(1.1, workerEfficiencyLevel));
  if (money >= cost) {
    workerEfficiencyLevel++;
    money -= cost;
    updateStats();
    document.getElementById("worker-efficiency-level").innerText = workerEfficiencyLevel;
  }
}

// Buy product value bonus upgrade
function buyProductValueBonus() {
  var cost = Math.ceil(10 * Math.pow(1.1, productValueBonusLevel));
  if (money >= cost) {
    productValueBonusLevel++;
    money -= cost;
    updateStats();
    document.getElementById("product-value-bonus-level").innerText = productValueBonusLevel;
  }
}

// Check quest status
function checkQuestStatus() {
  if (products >= 1000) {
    produce1000ProductsStatus = "Complete";
    updateQuests();
  }
  if (workers >= 10) {
    hire10WorkersStatus = "Complete";
    updateQuests();
  }
}

// Update quest status on screen
function updateQuests() {
  document.getElementById("produce-1000-products-status").innerText = produce1000ProductsStatus;
  document.getElementById("hire-10-workers-status").innerText = hire10WorkersStatus;
}

// Check achievement status
function checkAchievementStatus() {
  if (money >= 1000) {
    firstAchievementStatus = "Earned";
    updateAchievements();
  }
}

// Update achievement status on screen
function updateAchievements() {
  document.getElementById("first-achievement-status").innerText = firstAchievementStatus;
}

// Set up event listeners
document.getElementById("hire-worker").addEventListener("click", hireWorker);
document.getElementById("produce").addEventListener("click", produce);
document.getElementById("sell-products").addEventListener("click", sellProducts);
document.getElementById("buy-worker-efficiency").addEventListener("click", buyWorkerEfficiency);
document.getElementById("buy-product-value-bonus").addEventListener("click", buyProductValueBonus);

// Start game loop
setInterval(function() {
  money += Math.floor(workers * 0.1); // Add passive income
  updateStats();
  checkQuestStatus();
  checkAchievementStatus();
}, 1000);

// Update quests and achievements on screen
updateQuest
