let buttonBox = document.querySelector('#button-box');
let inputText = document.querySelector('#input');
let resultText = document.querySelector('#result');

let numbers = [];
let num1 = [];
let num2 = [];
let operation;
let result;

buttonBox.addEventListener('click', function(e) {
    if (e.target !== this) {
        collectInput(e.target);
        inputText.textContent += e.target.value;
        resultText.textContent = result;
    }

})

function collectInput(input) {

    if (input.value === '/') {
       computation(input);
    }
    else if (input.value === '*') {
        computation(input);
    }
    else if (input.value === '-') {
        computation(input);
    }
    else if (input.value === '+') {
        computation(input);
    }
    else if (input.value === '=') {
        if (numbers.length > 0) {
            num2 = parseInt(numbers.join(''));
            if (operation === '/') result = num1/num2;
            if (operation === '*') result = num1*num2;
            if (operation === '-') result = num1-num2;
            if (operation === '+') result = num1+num2;
        }
    }

    else {
        if(parseInt(input.value) === NaN) {}
        else {
            numbers.push(parseInt(input.value));
            console.log(numbers);
        }
    }

}

function computation(input) {
    if (numbers.length > 0) {

        num1 = parseInt(numbers.join(''));
        
        for (let i = 0; i <= numbers.length; i++) {
            numbers.shift();
        };

        operation = input.value;
    }
}