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
const operations = document.querySelectorAll('.operator');
const equality = document.querySelector('#equal');
const value = {
    firstNum: '',
    secondNum: '',
    sum: '',
};
const displayVal = {
    value: '',
};
const opSelected = {
    matched: '',
};

const opArray = ['add', 'subtract', 'multiply', 'divide'];

function display(button) {
    if (opSelected.matched == '') {
        value['firstNum'] += button.target.id;
        displayVal['value'] = parseInt(value['firstNum']);  
        value['firstNum'] = parseInt(value['firstNum']);
    
        result.textContent = parseInt(displayVal.value);
    } else if (opSelected.matched != '') {
        value['secondNum'] += button.target.id;
        displayVal['value'] = parseInt(value['secondNum']);  
        value['secondNum'] = parseInt(value['secondNum']);
    
        result.textContent = parseInt(displayVal.value);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', display);
})

function getOp(operation) {
    opSelected.matched = opArray.find( element => {
        return element == operation.target.id;
    });
        resetDisplay();
}

operations.forEach(operation => {
    operation.addEventListener('click', getOp);
})

function resetDisplay() {
    if (opSelected.matched) {
        displayVal.value = 0;
        result.textContent = displayVal.value;
    }
}

equality.addEventListener('click', performOp);

function performOp(e) {
    if (value.firstNum && value.secondNum && opSelected.matched) {
        
    }
}