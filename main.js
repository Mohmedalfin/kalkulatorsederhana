let display = document.getElementById('display');
let currentInput = '';
let resultShown = false;

function appendNumber(number) {
  if (resultShown) {
    currentInput = '';
    resultShown = false;
  }
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '' || /[+\-*/.]$/.test(currentInput)) return;
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    resultShown = true;
    updateDisplay();
  } catch {
    display.innerText = 'Error';
  }
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}
