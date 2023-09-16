// 1. Aufgabe
// Schreibe "Hallo Welt" in die Konsole

// 2. Aufgabe
// Schreibe die Lösung für 514234 + 453411 in die Konsole

// 3. Aufgabe
// Schreibe die Lösung für (453 / 423) - 31 * 15 in die Konsole

// 4. Aufgabe
// Schreibe die ersten 50 Zahlen der Achterreihe in die Konsole

// 5. Aufgabe
// Schreibe eine Funktion, welche beim aufrufen diese drei Zeilen ausgibt:
// fizz
// buzz
// fizzbuzz

// 6. Aufgabe
// Schreibe eine Funktion, die einen Parameter (n) nimmt, welche beim aufrufen mit einer Zahl diese Zahl + 1 ausgibt

// function aufgabe6(n) {

// }

// 7. Aufgabe
// Schreibe eine Funktion, die einen Parameter (n) nimmt, welche beim aufrufen mit einer Zahl fizz ausgibt, falls
// die eingegebene Zahl kleiner als 10 ist und sonst buzz ausgibt

function aufgabe7(n) {
  if (n < 10) {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

// 8.
// Erkläre mir was Modulo ist und wie man es in javascript verwendet (Googeln)

// 9. Aufgabe
// Schreibe eine Funktion, die einen Parameter (n) nimmt, welche beim aufrufen mit einer Zahl fizz ausgibt, falls
// die eingegebene Zahl beim teilen durch 3 keinen Rest hat und sont buzz ausgibt

function aufgabe9(n) {
  if (n % 3 == 0) {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

// 10. Aufgabe
// Schreibe eine Funktion, welche einene Parameter (n) nimmt und beim aufrufen mit einer Zahl fizz ausgibt, falls die Zahl durch 3 teilbar ist,
// buzz ausgibt, wenn die Zahl durch 5 teilbar ist, fizzbuzz ausgibt, wenn die Zahl durch 3 und 5 teilbar ist und sonst die Zahl selbst ausgibt.

function fizzbuzz(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("fizzbuzz");
  } else if (n % 5 == 0) {
    console.log("buzz");
  } else if (n % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(n);
  }
}

// Zum testen die funktion in einer schleife mit 100 Zahlen aufrufen.

for (let i = 1; i <= 100; i++) {
  fizzbuzz(i);
}

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz
// fizz
// 22
// 23
// fizz
// buzz
// 26
// fizz
// 28
// 29
// fizzbuzz
// 31
// 32
// fizz
// 34
// buzz
// fizz
// 37
// 38
// fizz
// buzz
// 41
// fizz
// 43
// 44
// fizzbuzz
// 46
// 47
// fizz
// 49
// buzz
// fizz
// 52
// 53
// fizz
// buzz
// 56
// fizz
// 58
// 59
// fizzbuzz
// 61
// 62
// fizz
// 64
// buzz
// fizz
// 67
// 68
// fizz
// buzz
// 71
// fizz
// 73
// 74
// fizzbuzz
// 76
// 77
// fizz
// 79
// buzz
// fizz
// 82
// 83
// fizz
// buzz
// 86
// fizz
// 88
// 89
// fizzbuzz
// 91
// 92
// fizz
// 94
// buzz
// fizz
// 97
// 98
// fizz
// buzz

// NOCH NICHT LÖSEN

// Fibonacci
