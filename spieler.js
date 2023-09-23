const herzen_element = document.getElementById("herzen");

const spieler = {
    _leben: 8,
    get leben() {
        return this._leben;
    },
    set leben(value) {
        this._leben = value;
        herzen_element.innerHTML = ""
        for (let i = 0; i < value; i++) {
            const img = document.createElement("img");
            img.classList.add("herz")
            img.src = "assets/monster/herz.png";
            herzen_element.appendChild(img);
        }
    }
}

