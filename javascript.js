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
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

const buttons = document.querySelectorAll('button');
const resultDisplay = document.querySelector('.result');
const operations = document.querySelectorAll('.operator');
const equality = document.querySelector('#equal');
const value = {
    firstNum: '',
    secondNum: '',
    result: '',
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
    
        resultDisplay.textContent = parseInt(displayVal.value);
    } else if (opSelected.matched != '') {
        value['secondNum'] += button.target.id;
        displayVal['value'] = parseInt(value['secondNum']);  
        value['secondNum'] = parseInt(value['secondNum']);
    
        resultDisplay.textContent = parseInt(displayVal.value);
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
    if (opSelected.matched && value.firstNum && value.secondNum) {
        value.result = operate(opSelected.matched, value.firstNum, value.secondNum);
        resultDisplay.textContent = parseInt(value.result);
    }
}

operations.forEach(operation => {
    operation.addEventListener('click', getOp);
})

function resetDisplay() {
    if (opSelected.matched) {
        displayVal.value = 0;
        resultDisplay.textContent = displayVal.value;
    }
}

equality.addEventListener('click', performOp);

function performOp() {
    console.log(value.firstNum + ' and ' + value.secondNum);
    if (value.firstNum && value.secondNum && opSelected.matched) {
        value.result = operate(opSelected.matched, value.firstNum, value.secondNum);
        resultDisplay.textContent = parseInt(value.result);
    }
}