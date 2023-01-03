const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number, .operation');
const equal = document.querySelector('.result');
const clear = document.querySelector('.clear');

function toDisplay() {
    display.innerHTML += this.textContent
}

buttons.forEach(button => button.onclick = toDisplay);

equal.onclick = () => {
    display.innerHTML = eval(display.innerHTML)
}

clear.onclick = () => display.innerHTML = '';

// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }

// function operate(op, a, b) {
//     if (op === '+') {
//         return add(a, b)
//     } else if (op === '-') {
//         return subtract(a, b)
//     } else if (op === '*') {
//         return multiply(a, b)
//     } else {
//         return divide(a, b)
//     }
// }