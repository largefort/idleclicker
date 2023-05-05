let money = 0;
let autoclickers = 0;
let upgradeCost = 50;
let upgrades = [
    {name: "Faster Clicking", cost: 100, effect: function() {
        setInterval(function() {
            click();
        }, 1000);
    }},
    {name: "Double Money", cost: 200, effect: function() {
        document.addEventListener("click", function() {
            click();
            click();
        });
    }}
];

function click() {
    money += autoclickers + 1;
    document.getElementById("money").innerHTML = money;
    document.getElementById("moneySound").play();
}

function getFreeAutoclicker() {
    autoclickers++;
    document.getElementById("autoclickers").innerHTML = autoclickers;
    document.getElementById("buyAutoclickerBtn").innerHTML = "Click for Money";
    document.getElementById("buyAutoclickerBtn").removeEventListener("click", getFreeAutoclicker);
    document.getElementById("buyAutoclickerBtn").addEventListener("click", click);
}

function buyUpgrade() {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        document.getElementById("money").innerHTML = money;
        upgradeCost = Math.round(upgradeCost * 1.5);
        document.getElementById("upgradeCost").innerHTML = upgradeCost;
        let upgrade = upgrades[Math.floor(Math.random() * upgrades.length)];
        let li = document.createElement("li");
        li.innerHTML = upgrade.name + " (costs " + upgrade.cost + " money)";
        li.addEventListener("click", function() {
            if (money >= upgrade.cost) {
                money -= upgrade.cost;
                document.getElementById("money").innerHTML = money;
                upgrade.effect();
                li.parentNode.removeChild(li);
            }
        });
        document.getElementById("upgrades").appendChild(li);
    }
}

document.getElementById("buyAutoclickerBtn").addEventListener("click", getFreeAutoclicker);
document.getElementById("buyUpgradeBtn").addEventListener("click", buyUpgrade);
