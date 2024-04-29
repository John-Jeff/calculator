const buttonBox = document.querySelector('#button-box');
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.op');
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
let temp = false;

// for (let numberBtn of numberBtns) {
//     console.log(numberBtn.value);
// }

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', function() {
        console.log(this.value);
        if (!temp) {
            value1 += this.value;
            console.log(value1);
        } else {
            value2 += this.value;
            console.log(value2);
        }
    })
})

operationBtns.forEach((operationBtn) => {
    operationBtn.addEventListener('click', function() {
        if (value1 && value2) {
            value1 = calculate(this.value);
        }
    })
})


function calculate(operator) {
    let num1 = Number.parseInt(value1);
    let num2 = Number.parseInt(value2);
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
    return result;
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