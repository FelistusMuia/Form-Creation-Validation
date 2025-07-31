function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Get input values and validate them
function getInputValues() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;

    if (num1 === '' || num2 === '') {
        return { valid: false };
    }

    return {
        valid: true,
        number1: parseFloat(num1),
        number2: parseFloat(num2)
    };
}

// Show result or error
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Handle operation with validation
function handleOperation(operationFunc) {
    const input = getInputValues();

    if (!input.valid) {
        displayResult("Please enter both numbers.");
        return;
    }

    const result = operationFunc(input.number1, input.number2);
    displayResult(result);
}

// Add event listeners
document.getElementById('add').addEventListener('click', () => handleOperation(add));
document.getElementById('subtract').addEventListener('click', () => handleOperation(subtract));
document.getElementById('multiply').addEventListener('click', () => handleOperation(multiply));
document.getElementById('divide').addEventListener('click', () => handleOperation(divide));