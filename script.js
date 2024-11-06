let currentInput = '';
let operator = null;
let firstOperand = null;

const display = document.getElementById('display');

// Append a number to the current input
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Set the operator (+, -, *, /)
function setOperator(selectedOperator) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
    currentInput = '';
  }
  operator = selectedOperator;
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  operator = null;
  firstOperand = null;
  updateDisplay();
}

// Calculate the result
function calculateResult() {
  if (operator === null || firstOperand === null) return;
  
  let result;
  const secondOperand = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  firstOperand = null;
  updateDisplay();
}

// Update the display with the current input
function updateDisplay() {
  display.value = currentInput || '0';
}
