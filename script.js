function add(...values) {
    return values.reduce((sum, currentValue) => sum + (+currentValue), 0);
}

function subtract(a, b) {
    return a - b;
}

function multiply(...values) {
    return values.reduce((product, currentValue) => product * (+currentValue), 1);
}

function divide(a, b) {
    return a/b;
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