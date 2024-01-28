let calculatorState = "";

function appendCharacter(char) {
    calculatorState += char;
    updateDisplay();
}

function clearDisplay() {
    calculatorState = "";
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(calculatorState);
        calculatorState = result.toString();
        updateDisplay();
    } catch (error) {
        calculatorState = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = calculatorState;
}

document.getElementById("addBtn").addEventListener("click", function () {
    appendCharacter('+');
});

document.getElementById("subtractBtn").addEventListener("click", function () {
    appendCharacter('-');
});

document.getElementById("multiplyBtn").addEventListener("click", function () {
    appendCharacter('*');
});

document.getElementById("divideBtn").addEventListener("click", function () {
    appendCharacter('/');
});

document.getElementById("num7Btn").addEventListener("click", function () {
    appendCharacter('7');
});

document.getElementById("num8Btn").addEventListener("click", function () {
    appendCharacter('8');
});

document.getElementById("num9Btn").addEventListener("click", function () {
    appendCharacter('9');
});

document.getElementById("num4Btn").addEventListener("click", function () {
    appendCharacter('4');
});

document.getElementById("num5Btn").addEventListener("click", function () {
    appendCharacter('5');
});

document.getElementById("num6Btn").addEventListener("click", function () {
    appendCharacter('6');
});

document.getElementById("num1Btn").addEventListener("click", function () {
    appendCharacter('1');
});

document.getElementById("num2Btn").addEventListener("click", function () {
    appendCharacter('2');
});

document.getElementById("num3Btn").addEventListener("click", function () {
    appendCharacter('3');
});

document.getElementById("clearBtn").addEventListener("click", function () {
    clearDisplay();
});

document.getElementById("num0Btn").addEventListener("click", function () {
    appendCharacter('0');
});

document.getElementById("calculateBtn").addEventListener("click", function () {
    calculateResult();
});