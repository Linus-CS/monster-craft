const monsterLebenElement = document.getElementById("monsterLeben");
const lootCounterElement = document.getElementById("lootCounter")

const monsterHeadElement = document.getElementById("monsterHead");

const kategorien = ["Legendär", "Episch", "Selten", "Gewöhnlich"]

const monster = {
    _leben: 100,
    get leben() {
        return this._leben;
    },
    set leben(value) {
        this._leben = value;
        monsterLebenElement.style.width = ((this.leben / this.maxLeben) * 100) + "%";
    },
    maxLeben: 100,
    level: 1,
}

let lootCounter = 100;
setInterval(() => {
    if (lootCounter > 1) lootCounterElement.textContent = --lootCounter;
}, 1000)

setInterval(() => {
    if (monsterHeadElement.style.marginTop != "5%")
        monsterHeadElement.style.marginTop = "5%"
    else
        monsterHeadElement.style.marginTop = "0"
}, 800)











