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
    return (a*1.0) / b;
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

const buttons = document.querySelectorAll('.number');
const resultDisplay = document.querySelector('.result');
const operations = document.querySelectorAll('.operator');
const equality = document.querySelector('#equal');
const clrBtn = document.querySelector('.clear')
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
    //initial input from user before op is selected
    if (opSelected.matched == '') {
        value['firstNum'] += button.target.id;
        displayVal['value'] = parseInt(value['firstNum']);  
        value['firstNum'] = parseInt(value['firstNum']);
    
        resultDisplay.textContent = displayVal.value;
    //record second number if op is selected
    } else if (opSelected.matched != '') {
        value['secondNum'] += button.target.id;
        displayVal['value'] = parseInt(value['secondNum']);  
        value['secondNum'] = parseInt(value['secondNum']);
    
        resultDisplay.textContent = displayVal.value;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', display);
})

function getOp(operation) {
    //chaining operations
    if (opSelected.matched && value.firstNum !== '' && value.secondNum) {
        value.result = operate(opSelected.matched, value.firstNum, value.secondNum);
        resultDisplay.textContent = parseFloat((value.result).toFixed(4));
        value.firstNum = value.result;
        value.secondNum = '';
    } else if (opSelected.matched && value.firstNum !== '' && value.secondNum == 0) {
        resultDisplay.textContent = 'Try again :)';
        clearAll;
    }
    opSelected.matched = opArray.find( element => {
        return element == operation.target.id;
    });
}

operations.forEach(operation => {
    operation.addEventListener('click', getOp);
})


//if equal gets clicked
equality.addEventListener('click', performOp);

function performOp() {
    if (value.firstNum !== '' && value.secondNum !== '' && opSelected.matched) {
        value.result = operate(opSelected.matched, value.firstNum, value.secondNum);
        resultDisplay.textContent = parseFloat((value.result).toFixed(4));
        value.firstNum = value.result;
        value.secondNum = '';
    }
}

//reset entire calc when clear is pressed
clrBtn.addEventListener('click', clearAll);

function clearAll() {
    Object.keys(value).forEach(valueNum => {
        value[valueNum] = '';
    })
    opSelected.matched = '';
    displayVal.value = '';
    resultDisplay.textContent = displayVal.value;
}