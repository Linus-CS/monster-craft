let items = {};
let inventar = [];

let rezept_holz_spitzhacke = ["holz", "holz", "holz", "", "holz", "", "", "holz", ""];
function ereignis_holz_spitzhacke() {
    stein_bild.style.opacity = "";
}

let rezept_stein_spitzhacke = ["stein", "stein", "stein", "", "holz", "", "", "holz", ""];
function ereignis_stein_spitzhacke() {
    gold_bild.style.opacity = "";
}

let rezept_gold_schwert = ["", "gold", "", "", "gold", "", "", "holz", ""];
function ereignis_gold_schwert() {
}

let rezept_holz_schild = ["holz", "holz", "holz", "holz", "holz", "holz", "", "holz", ""];
function ereignis_holz_schild() {
}

items["holzSpitzhacke"] = [rezept_holz_spitzhacke, "assets/rezepte/holz_spitzhacke.png", ereignis_holz_spitzhacke];
items["steinSpitzhacke"] = [rezept_stein_spitzhacke, "assets/rezepte/stein_spitzhacke.png", ereignis_stein_spitzhacke];
items["goldSchwert"] = [rezept_gold_schwert, "assets/rezepte/gold_schwert.png", ereignis_gold_schwert];
items["holzSchild"] = [rezept_holz_schild, "assets/rezepte/holz_schild.png", ereignis_holz_schild];

