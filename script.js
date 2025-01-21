let display = document.getElementById("display");

// Zeichen zur Anzeige hinzufügen
function appendCharacter(char) {
    display.value += char;
}

// Anzeige löschen
function clearDisplay() {
    display.value = '';
}

// Berechnung durchführen
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Fehler';
    }
}

// Prozentrechnung
function calculatePercentage() {
    try {
        display.value = parseFloat(display.value) / 100;
    } catch (e) {
        display.value = 'Fehler';
    }
}

// Wurzelberechnung
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(parseFloat(display.value));
    } catch (e) {
        display.value = 'Fehler';
    }
}

// Letztes Zeichen löschen
function backspace() {
    display.value = display.value.slice(0, -1);
}
