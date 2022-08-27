const buttonBox = document.querySelector('#button-box');
const inputText = document.querySelector('#input');
const resultText = document.querySelector('#result');

const calcFunc = ['+', '-', '÷', '✕', 'on', 'ac', 'spec'];
let numbers = [];
let num1 = [];
let num2 = [];
let operation;
let result;

buttonBox.addEventListener('click', function (e) {
    if (e.target !== this) {
        collectInput(e.target);
        inputText.textContent += e.target.value;
        resultText.textContent = result;
    }
})

function collectInput(input) {

    if (calcFunc.includes(input.value)) {
        if (numbers.length > 0) {

            num1 = parseInt(numbers.join(''));

            for (let i = 0; i <= numbers.length; i++) numbers.shift();

            operation = input.value;
        }
    }

    else if (input.value === '=') {
        if (numbers.length > 0) {
            num2 = parseInt(numbers.join(''));

            result = operate(operation, num1, num2);
        }
    }

    else if (!calcFunc.includes(input.value)) {
        numbers.push(parseInt(input.value));
        console.log(numbers);
    }
}

function operate(op, ...num) {
    let firstNum = num[0];
    let secNum = num[1];
    let result;

    if (op === '÷') result = firstNum / secNum;
    else if (op === '✕') result = firstNum * secNum;
    else if (op === '-') result = firstNum - secNum;
    else if (op === '+') result = firstNum + secNum;

    return result;
}

// if (num1 < num2) result = parseFloat((num1/num2).toFixed(15));