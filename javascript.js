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

buttons.forEach(button => {
    button.addEventListener('click', callback(button.id));
})

function callback(num) {
    result.textContent = num;
    console.log(num);
}