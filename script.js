// Get the display element
var display = document.getElementsByName('display')[0];

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    var displayValue = display.value;
    display.value = displayValue.slice(0, -1);
}

// Function to append a symbol to the display
function appendSymbol(symbol) {
    var displayValue = display.value;

    // Check if the last character is not already an operator
    var lastChar = displayValue.slice(-1);
    if (!isOperator(lastChar)) {
        display.value = displayValue + symbol;
    }
}

// Function to append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to evaluate and display the result of the expression
function calculate() {
    var expression = display.value;

    try {
        // Use eval to calculate the result of the expression
        var result = eval(expression);

        // Display the result
        display.value = result;
    } catch (error) {
        // Handle any errors that may occur during evaluation
        display.value = 'Error';
    }
}

// Function to check if a character is an operator (+, -, *, /)
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to handle the addition of a decimal point
function handleDecimal() {
    var displayValue = display.value;

    // Check if the last part of the expression already contains a decimal point
    var lastPart = displayValue.split(/[\+\-\*\/]/).pop();
    if (!lastPart.includes('.')) {
        display.value += '.';
    }
}
