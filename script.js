const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#all-clear');
const backBtn = document.querySelector('#back-btn');

let value1 = '';
let value2 = '';
let operator = '';

// Key press functionality
document.addEventListener('keydown', (e) => {
    numberBtns.forEach(function (numberBtn) {
        if (e.key === numberBtn.value) {
            console.log(e.key);
            updateTerms(e.key);
        }
    });

    operationBtns.forEach(function (operationBtn) {
        if (e.key === operationBtn.value) {
            console.log(e.key);
            if (!(value1 === '') && !(value2 === '')) {
                value1 = calculate(value1, operator, value2);
                value2 = '';
                operator = (e.key === 'Enter') ? '' : e.key;
            }
            else if (!(value1 === '') && e.key !== 'Enter') {
                operator = e.key;
            }
            updateDisplay();
        }
    });

    if (e.key === 'Backspace') {
        backspace();
    }
});


// Click functionality
numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', function (e) {
        if (e.detail == 1) {
            updateTerms(this.value);
        }
    });
});

operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener('click', function (e) {
        if (e.detail == 1) {
            if (!(value1 === '') && !(value2 === '')) {
                value1 = calculate(value1, operator, value2);
                value2 = '';
                operator = (this.id === 'equal') ? '' : this.value;
            }
            else if (!(value1 === '') && this.value !== 'Enter') {
                operator = this.value;
            }
            updateDisplay();
        }
    })
});

backBtn.addEventListener('click', (e) => {
    if (e.detail == 1) backspace();
})

clearBtn.addEventListener('click', (e) => {
    if (e.detail == 1) clear();
});


function updateTerms(input) {
    if (!operator) {
        if (value1.length < 10) {
            value1 += checkForDecimal(input, value1);
        }
        console.log(value1);
    } else {
        if (value2.length < 10) {
            value2 += checkForDecimal(input, value2);
        }
        console.log(value2);
    }
    updateDisplay();
}

function calculate(value1, operator, value2) {
    let num1 = Number.parseFloat(value1);
    let num2 = Number.parseFloat(value2);
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    if (!Number.isInteger(result)) {
        result = result.toFixed(3);
    }
    console.log(result);
    return result;
}

function updateDisplay() {
    const inputText = document.querySelector('#input');
    inputText.innerText = `${value1} ${operator} ${value2}`;
}

function backspace() {
    let combinedInputs = [value1, operator, value2].join(' ').trim();
    combinedInputs = combinedInputs.substring(0, combinedInputs.length - 1);
    [value1 = '', operator = '', value2 = ''] = combinedInputs.split(' ');
    updateDisplay();
}

function clear() {
    value1 = '';
    value2 = '';
    operator = '';
    updateDisplay();
}

function checkForDecimal(input, value) {
    if (input === '.') {
        return (!value.includes('.')) ? input : '';
    } else {
        return input;
    }
}
