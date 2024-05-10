const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#all-clear');
const backBtn = document.querySelector('#back-btn');
const themeBtn = document.querySelector('#theme');
const INPUT_FONT_SIZE = '28px';

let value1 = '';
let value2 = '';
let operator = '';

// Key press functionality
document.addEventListener('keydown', (e) => {
    numberBtns.forEach(function (numberBtn) {
        if (e.key === numberBtn.value) {
            updateTerms(e.key);
        }
    });

    operationBtns.forEach(function (operationBtn) {
        if (e.key === operationBtn.value) {
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

themeBtn.addEventListener('click', (e) => {
    if (e.detail == 1) toggleDarkMode();
})


function updateTerms(input) {
    if (!operator) {
        if (value1.toString().length < 10) {
            value1 += checkForDecimal(input, value1);
        }
    } else {
        if (value2.length < 10) {
            value2 += checkForDecimal(input, value2);
        }
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
    return result;
}

function updateDisplay() {
    const inputText = document.querySelector('#input');
    let combinedInputs = `${value1} ${operator} ${value2}`
    inputText.innerText = combinedInputs;
    checkForTextOverflow(combinedInputs);
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

function checkForTextOverflow(combinedInputs) {
    const inputText = document.querySelector('#input');
    // let currentInputSize = Number.parseFloat(window.getComputedStyle(inputText).fontSize);
    inputText.style.fontSize = (combinedInputs.length > 20) ? `24px` : INPUT_FONT_SIZE;
}

function toggleDarkMode() {
    const body = document.body;
    const calcBody = document.querySelector('.main-body');
    const calcScreen = document.querySelector('.main-screen');
    const btns = document.querySelectorAll('button');
    
    body.classList.toggle('dark-back');
    calcBody.classList.toggle('dark');
    calcScreen.classList.toggle('dark');
    btns.forEach((btn) => {
        btn.classList.toggle('dark');
    })
    // numberBtns.forEach((numberBtn) => {
    //     numberBtn.classList.toggle('dark');
    // });
}
