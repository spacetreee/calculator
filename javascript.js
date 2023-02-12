function add(a, b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a,b);
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const operations = document.querySelectorAll('button operator');
let displayValue = 0;
let firstNum = 0;
const opArray = ['add', 'subtract', 'multiply', 'divide'];

function display(button) {
    displayValue += button.target.id;
    result.textContent = parseInt(displayValue);
    displayValue = parseInt(displayValue);
    firstNum = displayValue;
    return displayValue;
}

buttons.forEach(button => {
    button.addEventListener('click', display);
})

