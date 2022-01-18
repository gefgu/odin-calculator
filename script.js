function add(...values) {
  return values.reduce((sum, currentValue) => sum + +currentValue, 0);
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(...values) {
  return values.reduce((product, currentValue) => product * +currentValue, 1);
}

function divide(a, b) {
  return +a / +b;
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
  const digitToAdd = +this.textContent;
  if (!operator.textContent) {
    leftSideNumber.textContent = +leftSideNumber.textContent * 10 + digitToAdd;
  } else if (operator.textContent && !rigthSideNumber.textContent) {
    display.textContent = "";
    rigthSideNumber.textContent = +digitToAdd;
  } else if (operator.textContent && rigthSideNumber.textContent) {
    rigthSideNumber.textContent =
      +rigthSideNumber.textContent * 10 + digitToAdd;
  }
  display.textContent = +display.textContent * 10 + digitToAdd;
}

function addOperatorToCalculation() {
  if (!operator.textContent && leftSideNumber.textContent) {
    operator.textContent = this.textContent;
    operators.forEach((op) => op.classList.remove("active"));
    this.classList.add("active");
  } else if (leftSideNumber.textContent && rigthSideNumber.textContent) {
    doCalculation();
    operator.textContent = this.textContent;
    operators.forEach((op) => op.classList.remove("active"));
    this.classList.add("active");
  }
}

function doCalculation() {
  if (
    !(
      leftSideNumber.textContent &&
      rigthSideNumber.textContent &&
      operator.textContent
    )
  ) {
    return;
  }

  let result = operate(
    operator.textContent,
    leftSideNumber.textContent,
    rigthSideNumber.textContent
  );
  result = result.toFixed(3);
  clearCalculation();
  leftSideNumber.textContent = result;
  display.textContent = result;
}

function clearCalculation() {
  const operators = document.querySelectorAll(".operator");
  operators.forEach((op) => op.classList.remove("active"));

  display.textContent = "";
  leftSideNumber.textContent = "";
  operator.textContent = "";
  rigthSideNumber.textContent = "";
}

function addFloatingPoint() {
  if (display.textContent.includes(".")) {
    return;
  }
  display.textContent += ".";
  if (operator.textContent) {
    rigthSideNumber.textContent += ".";
  } else {
    leftSideNumber.textContent += ".";
  }
}

function removeLastDigit() {
  // remove from display
  // check for operator
  // if there is operator
  // remove from right side
  // remove from left side
  display.textContent = Math.floor(+display.textContent / 10);
  if (operator.textContent) {
    rigthSideNumber.textContent = Math.floor(+rigthSideNumber.textContent / 10);
  } else {
    leftSideNumber.textContent = Math.floor(+leftSideNumber.textContent / 10);
  }
}

const leftSideNumber = document.querySelector("#left-side");
const operator = document.querySelector("#calc-operator");
const rigthSideNumber = document.querySelector("#right-side");
const display = document.querySelector(".calculator-display");

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

const pointButton = document.querySelector("#floating-point");
pointButton.addEventListener("click", addFloatingPoint);

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", removeLastDigit);
