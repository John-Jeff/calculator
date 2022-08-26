let buttonBox = document.querySelector('#button-box');

let numbers = [];

buttonBox.addEventListener('click', function(e) {
    collectInput(e.target)
})

function collectInput(input) {

    if (input.value === '/') console.log('/');
    else if (input.value === '*') console.log('*');
    else if (input.value === '-') console.log('-');
    else if (input.value === '+') console.log('+');
    else if (input.value === '=') console.log('=');

    else {
        if(parseInt(input.value) === NaN) {}
        else {
            numbers.push(parseInt(input.value));
            console.log(numbers);
        }
    }

}