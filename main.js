'use strict';

// DOM captute variables

const currentScreenOutput = document.querySelector(
  '.calculator__screen__output-current'
);

const previousScreenOutput = document.querySelector(
  '.calculator__screen__output-previous'
);

const allBtns = document.querySelectorAll('.button');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const percentBtn = document.querySelector('.percent');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');

// Operator functions
// Can pass these into array.reduce as an argument

const addNumber = () => {
  previousNumber + currentNumber;
};

const subtractNumber = () => {
  previousNumber - currentNumber;
};

const multiplyNumber = () => {
  previousNumber * currentNumber;
};

const divideNumber = () => {
  previousNumber / currentNumber;
};

// Variable to store the number before operator button is pressed
let currentNumber;

// Variable to store currentNumber after operator button has been pressed
let previousNumber;

// // Initially display will show zero as starting point

// when number button is pressed, update currentScreenOutput

numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    let number = button.value;
    currentScreenOutput.innerHTML += number;
  });
});

// add above value to an array when operator is pressed
operatorBtns.forEach((button) => {
  button.addEventListener('click', () => {
    previousNumber = parseInt(currentScreenOutput.innerHTML);
    previousScreenOutput.innerHTML = previousNumber;
  });
});

// clear/reset function

// const clearAll = () => {
//   currentScreenOutput.innerHTML = 0;
// };

// clearBtn.addEventListener('click', clearAll);
