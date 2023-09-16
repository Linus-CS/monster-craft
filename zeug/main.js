let header_element = document.getElementById("header");
let button_element = document.getElementById("btn");
let input_element = document.getElementById("input");
let checker_element = document.getElementById("checker");
let leisten_element = document.getElementById("leiste");

let fragen_cnt = 0;

let fragen = [
  { frage: "Was ist 1 + 1?", antwort: 2 },
  { frage: "Was ist 34 + 3?", antwort: 37 },
  { frage: "Was ist 2 / 2?", antwort: 1 },
  { frage: "Was ist 8 * 7?", antwort: 56 },
  { frage: "Was ist 100 + 100?", antwort: 200 },
];

header_element.textContent = fragen[0].frage;

let leisten_part = 500 / fragen.length;
let progress = 0;
function buttonClick() {
  if (input_element.value == fragen[fragen_cnt].antwort) {
    checker_element.textContent = "Richtig!";
    fragen_cnt++;

    progress += leisten_part;
    leisten_element.style.width = progress + "px";

    header_element.textContent = fragen[fragen_cnt].frage;
  } else {
    checker_element.textContent = "Falsch!";
  }
}
button_element.onclick = buttonClick;
