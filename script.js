const buttonBox = document.querySelector('#button-box');
const inputText = document.querySelector('#input');
const resultText = document.querySelector('#result');

const calcSys = ['+', '-', '÷', '✕', '=', 'on', 'ac', 'spec'];
const calcFunc = ['+', '-', '÷', '✕', '='];
const calcArray = [];
let numbers = [];
let num1 = [];
let num2 = [];
let operation;
let result;

buttonBox.addEventListener('click', function (e) {
    if (e.target !== this) {
        if (e.target.value === 'ac') {
            inputText.textContent = '';
            result = '';
        }

        // collectInput(e.target);
        test(e.target);
        inputText.textContent += e.target.value;
        resultText.textContent = result;
    }
})

function collectInput(input) {

    if (calcSys.includes(input.value)) {
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

    else if (!calcSys.includes(input.value)) {
        numbers.push(parseInt(input.value));
        console.log(numbers);
    }
}

function operate(op, ...num) {
    let firstNum = num[0];
    let secNum = num[1];
    let result;

    if (typeof result === 'number') firstNum = result;

    switch (op) {
        case '÷':
            result = firstNum / secNum;
            break;
        case '✕':
            result = firstNum * secNum;
            break;
        case '-':
            result = firstNum - secNum;
            break;
        case '+':
            result = firstNum + secNum;
            break;
    }
    // if (op === '÷') result = firstNum / secNum;
    // else if (op === '✕') result = firstNum * secNum;
    // else if (op === '-') result = firstNum - secNum;
    // else if (op === '+') result = firstNum + secNum;

    return result;
}

// if (num1 < num2) result = parseFloat((num1/num2).toFixed(15));

function test(input) {

    if (!calcSys.includes(input.value)) {
        numbers.push(parseInt(input.value));
        console.log(numbers);
    }

    if (calcFunc.includes(input.value)) {

        calcArray.push(parseInt(numbers.join('')));
        for (let i = 0; i <= numbers.length; i++) numbers.shift();
        calcArray.push(input.value);

        if (calcArray.length >= 3) {
            switch (calcArray[1]) {
                case '÷':
                    calcArray[0] = calcArray[0] / calcArray[2];
                    break;
                case '✕':
                    calcArray[0] = calcArray[0] * calcArray[2];
                    break;
                case '-':
                    calcArray[0] = calcArray[0] - calcArray[2];
                    break;
                case '+':
                    calcArray[0] = calcArray[0] + calcArray[2];
                    break;
            }

            (calcArray[3] === '=') ? calcArray.splice(1, calcArray.length - 1) : calcArray.splice(1, calcArray.length - 2);
            
            result = calcArray[0];
        }
    }
}