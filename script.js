const buttonBox = document.querySelector('#button-box');
const inputText = document.querySelector('#input');
const resultText = document.querySelector('#result');

const calcSys = ['on', 'ac', 'spec'];
const calcFunc = ['+', '-', '÷', '✕', '='];
const calcArray = [];
const numbers = [];
let result;

buttonBox.addEventListener('click', function (e) {
    if (e.target !== this) {
        if (e.target.value === 'ac') {
            calcArray.splice(0, calcArray.length);
            inputText.textContent = '';
            result = '';
        }

        operate(e.target);
        if (e.target.value !== '=' && !calcSys.includes(e.target.value)) inputText.textContent += e.target.value;
        resultText.textContent = result;
    }
})

function operate(input) {

    if (!calcFunc.includes(input.value) && !calcSys.includes(input.value)) {
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
            
            // calcArray[0] = parseFloat(calcArray[0]).toFixed(10);

            result = calcArray[0];
        }
    }
}