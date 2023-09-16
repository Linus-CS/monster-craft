let header_element = document.getElementById("checker");
let button_element = document.getElementById("btn");
let input_element = document.getElementById("input");
let Fragen_element = document.getElementById("header");
let Frage = 0;
let Fragen_List = [
  "Was ist 1 + 2?",
  "Baumbrücke?",
  "An?",
  "Aus?",
  "0101010010101010111010101010101001010101010101010101011110010101010101000001010101010010111010101001010101011010101010101010001010101110101010010101010101010101010101010101011010101010101010?",
];

Fragen_element.textContent = Fragen_List[Frage];

function Fragen() {
  if (Frage == 0) {
    if (input_element.value == 3) {
      header_element.textContent =
        "🚗🚗🚗🚗🚗🚗🚗🚗🚗Richtig!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
      Frage++;
      Fragen_element.textContent = Fragen_List[Frage];
    } else {
      header_element.textContent =
        "🤬🤬🤬🤬🤬🤬🤬!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Falsch!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!🤬🤬🤬🤬🤬🤬";
    }
  } else if (Frage == 1) {
    if (input_element.value == "ja") {
      header_element.textContent = "👍👍👍👍👍👍👍👍Gut👍👍👍👍👍👍👍";
      Frage++;
      Fragen_element.textContent = Fragen_List[Frage];
    } else {
      for (let i = 0; i < 1000; i++)
        header_element.textContent += "🤨🤨🤨🤨🤨🤨sus🤨🤨🤨🤨🤨🤨";
    }
  } else if (Frage == 2) {
    if (input_element.value == "ja") {
      header_element.textContent = "👍👍👍👍👍👍👍👍Gut👍👍👍👍👍👍👍";
      Frage++;
      Fragen_element.textContent = Fragen_List[Frage];
    } else {
      for (let i = 0; i < 1000; i++) {
        header_element.textContent += "🤨🤨🤨🤨🤨🤨sus🤨🤨🤨🤨🤨🤨";
      }
    }
  }
}
button_element.onclick = Fragen;
