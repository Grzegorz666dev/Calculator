// Zmienna globalna przechowująca aktualny stan kalkulatora
let calculatorState = "";

// Funkcja dodająca znak do wyświetlacza
function appendCharacter(char) {
    calculatorState += char;
    updateDisplay();
}

// Funkcja czyszcząca wyświetlacz
function clearDisplay() {
    calculatorState = "";
    updateDisplay();
}

// Funkcja obliczająca wynik i aktualizująca wyświetlacz
function calculateResult() {
    try {
        const result = eval(calculatorState);
        calculatorState = result.toString();
        updateDisplay();
    } catch (error) {
        // Obsługa błędów
        calculatorState = "Error";
        updateDisplay();
    }
}

// Funkcja aktualizująca wyświetlacz
function updateDisplay() {
    document.getElementById("display").value = calculatorState;
}