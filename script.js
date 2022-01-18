function add(...values) {
  return values.reduce((sum, currentValue) => sum + +currentValue, 0);
}

function subtract(a, b) {
  return a - b;
}

function multiply(...values) {
  return values.reduce((product, currentValue) => product * +currentValue, 1);
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

function addDigitToCalculation() {
  const leftSideNumber = document.querySelector("#left-side");
  const operator = document.querySelector("#calc-operator");
  const rigthSideNumber = document.querySelector("#right-side");
  const display = document.querySelector(".calculator-display");

  if (
    !leftSideNumber.textContent ||
    (leftSideNumber.textContent.length < 9 && !operator.textContent)
  ) {
    leftSideNumber.textContent += this.textContent;
    display.textContent += this.textContent;
  } else if (!rigthSideNumber.textContent) {
    display.textContent = this.textContent;
    rigthSideNumber.textContent = this.textContent;
  } else {
    display.textContent += this.textContent;
    rigthSideNumber.textContent += this.textContent;
  }
}

function addOperatorToCalculation() {
  const leftSideNumber = document.querySelector("#left-side");
  const operator = document.querySelector("#calc-operator");
  const rigthSideNumber = document.querySelector("#right-side");
  const operators = document.querySelectorAll(".operator");

  if (!operator.textContent && !leftSideNumber.textContent) {
    operator.textContent = this.textContent;
    operators.forEach(op => op.classList.remove("active"));
    this.classList.add("active");
  } else if (leftSideNumber.textContent && rigthSideNumber.textContent) {
    doCalculation();
    operator.textContent = this.textContent;
    operators.forEach(op => op.classList.remove("active"));
    this.classList.add("active");
  }
}

function doCalculation() {
  const leftSideNumber = document.querySelector("#left-side");
  const operator = document.querySelector("#calc-operator");
  const rigthSideNumber = document.querySelector("#right-side");
  const display = document.querySelector(".calculator-display");

  const result = operate(operator.textContent, 
    leftSideNumber.textContent, rigthSideNumber.textContent);
  clearCalculation();
  leftSideNumber.textContent = result;
  display.textContent = result;
}

function clearCalculation() {
  const leftSideNumber = document.querySelector("#left-side");
  const operator = document.querySelector("#calc-operator");
  const rigthSideNumber = document.querySelector("#right-side");
  const display = document.querySelector(".calculator-display");
  const operators = document.querySelectorAll(".operator");
  operators.forEach(op => op.classList.remove("active"));

  display.textContent = "";
  leftSideNumber.textContent = "";
  operator.textContent = "";
  rigthSideNumber.textContent = "";
}

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) =>
  digit.addEventListener("click", addDigitToCalculation)
);

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) =>
  operator.addEventListener("click", addOperatorToCalculation)
);

const equalButton = document.querySelector("#equal-sign");
equalButton.addEventListener("click", doCalculation);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearCalculation);
