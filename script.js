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