const monsterLebenElement = document.getElementById("monsterLeben");
const lootCounterElement = document.getElementById("lootCounter")

const kategorien = ["Legendär", "Episch", "Selten", "Gewöhnlich"]

const monster = {
    leben: 100,
    maxLeben: 100,
    level: 1,
    setzeLeben(value) {
        this.leben = value
        monsterLebenElement.style.width = ((this.leben / this.maxLeben) * 100) + "%";
    },
    schaden(value) {
        this.setzeLeben(this.leben - value);
    }
}

let lootCounter = 100;
setInterval(() => {
    lootCounterElement.textContent = lootCounter--
}, 1000)












