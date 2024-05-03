const buttonBox = document.querySelector('#button-box');
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#all-clear');
const inputText = document.querySelector('#input');
const resultText = document.querySelector('#result');

const calcSys = ['on', 'ac', 'spec'];
const calcFunc = ['+', '-', '÷', '✕', '='];
const calcArray = [];
const numbers = [];
let result;

let value1 = '';
let value2 = '';
let operator = '';

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', updateTerms);
});

operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener('click', function() {
        if ((value1 && value2)) {
            value1 = calculate(value1, operator, value2);
            value2 = '';
            operator = (this.id === 'equal') ? '' : this.value;
        }
        else if (value1 && this.value !== '=') {
            operator = this.value;
        }
        updateDisplay();
    })
});

clearBtn.addEventListener('click', clear);


function updateTerms() {
    if (!operator) {
        (value1.length < 10) && (value1 += this.value);
        console.log(value1);
    } else {
        (value2.length < 10) && (value2 += this.value);
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
    console.log(result);
    return result;
}

function updateDisplay() {
    const inputText = document.querySelector('#input');
    inputText.innerText = `${value1} ${operator} ${value2}`;
}

function clear() {
    value1 = '';
    value2 = '';
    operator = '';
    updateDisplay();
}

// buttonBox.addEventListener('click', function (e) {
//     if (e.target !== this) {
//         if (e.target.value === 'ac') {
//             calcArray.splice(0, calcArray.length);
//             inputText.textContent = '';
//             result = '';
//         }

//         operate(e.target);
//         if (e.target.value !== '=' && !calcSys.includes(e.target.value)) inputText.textContent += e.target.value;
//         resultText.textContent = result;
//     }
// })

// function operate(input) {

//     if (!calcFunc.includes(input.value) && !calcSys.includes(input.value)) {
//         numbers.push(parseInt(input.value));
//         // console.log(numbers);
//     }

//     if (calcFunc.includes(input.value)) {

//         calcArray.push(parseInt(numbers.join('')));
//         for (let i = 0; i <= numbers.length; i++) numbers.shift();
//         calcArray.push(input.value);

//         if (calcArray.length >= 3) {
//             switch (calcArray[1]) {
//                 case '÷':
//                     calcArray[0] = calcArray[0] / calcArray[2];
//                     break;
//                 case '✕':
//                     calcArray[0] = calcArray[0] * calcArray[2];
//                     break;
//                 case '-':
//                     calcArray[0] = calcArray[0] - calcArray[2];
//                     break;
//                 case '+':
//                     calcArray[0] = calcArray[0] + calcArray[2];
//                     break;
//             }

//             (calcArray[3] === '=') ? calcArray.splice(1, calcArray.length - 1) : calcArray.splice(1, calcArray.length - 2);
            
//             // calcArray[0] = parseFloat(calcArray[0]).toFixed(10);

//             result = calcArray[0];
//         }
//     }
// }