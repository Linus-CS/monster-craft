// 5. Aufgabe
// Schreibe eine Funktion, welche beim aufrufen diese drei Zeilen ausgibt:
// fizz
// buzz
// fizzbuzz

function simpleFizzBuzz() {
  console.log("fizz");
  console.log("buzz");
  console.log("fizzbuzz");
}

// 6. Aufgabe
// Schreibe eine Funktion, die einen Parameter (n) nimmt, welche beim aufrufen mit einer Zahl diese Zahl + 1 ausgibt

function plusEins(n) {
  console.log(n + 1);
}

// 7. Aufgabe
// Schreibe eine Funktion, die einen Parameter (n) nimmt, welche beim aufrufen mit einer Zahl fizz ausgibt, falls
// die eingegebene Zahl kleiner als 10 ist und sonst buzz ausgibt

function kleinerAlsZehn(n) {
  if (n < 10) {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

// 8.
// Erkläre mir was Modulo ist und wie man es in javascript verwendet (Googeln)

let rest1 = 24 % 3; // 0
let rest2 = 23 % 3; // 2
let rest3 = 22 % 3; // 1

// 9. Aufgabe
// Schreibe eine Funktion, die einen Parameter (n) nimmt, welche beim aufrufen mit einer Zahl fizz ausgibt, falls
// die eingegebene Zahl beim teilen durch 3 keinen Rest hat und sont buzz ausgibt

function fizzOrBuzz(n) {
  if (n % 3 == 0) {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

// 10. Aufgabe
// Schreibe eine Funktion, welche einene Parameter (n) nimmt und beim aufrufen mit einer Zahl fizz ausgibt, falls die Zahl durch 3 teilbar ist,
// buzz ausgibt, wenn die Zahl durch 5 teilbar ist, fizzbuzz ausgibt, wenn die Zahl durch 3 und 5 teilbar ist und sonst die Zahl selbst ausgibt.

function fizzBuzz(n) {
  if (n % 3 == 0 && n % 5 == 0) console.log("fizzbuzz");
  else if (n % 3 == 0) console.log("fizz");
  else if (n % 5 == 0) console.log("buzz");
  else console.log(n);
}

function alternativeFizzBuzz(n) {
  let output = "";
  if (n % 3 == 0) output = "fizz";
  if (n % 5 == 0) output += "buzz";
  if (output == "") output = n;
  console.log(output);
}

for (let i = 1; i <= 100; i++) {
  fizzBuzz(i);
}
